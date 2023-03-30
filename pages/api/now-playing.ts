import { NowPlaying } from "../../types";

interface Item {
    name: string;
    type: "track";
    external_urls: {
        spotify: string;
    };
    album: {
        name: string;
    };
    artists: {
        name: string;
    }[];
}

interface RecentlyPlayed {
    items: {
        track: Item;
    }[];
}

interface PlaybackState {
    is_playing: boolean;
    currently_playing_type: "track";
    item: Item;
}

const getToken = async () => {
    const client_id = process.env.SPOTIFY_CLIENT_ID!;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET!;
    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!;

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
            // Buffer API not supported in Vercel Edge API
            Authorization: `Basic ${btoa(client_id + ":" + client_secret)}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token: refresh_token,
        }),
    });

    if (response.ok) {
        const content = await response.json();
        return content.access_token as string;
    } else {
        throw Error("Error getting token");
    }
};

const getCurrentlyPlaying = async (token: string) => {
    const response = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (response.ok) {
        if (response.status === 200)
            return (await response.json()) as PlaybackState;
        return null;
    } else {
        throw Error("Error getting currently playing");
    }
};

const getRecentlyPlayed = async (token: string) => {
    const response = await fetch(
        "https://api.spotify.com/v1/me/player/recently-played?limit=1",
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (response.ok) {
        return (await response.json()) as RecentlyPlayed;
    } else {
        throw Error("Error getting last played");
    }
};

const getNowPlaying = async (): Promise<NowPlaying | null> => {
    console.log("Getting now playing track");
    const token = await getToken();
    const state = await getCurrentlyPlaying(token);

    if (!state || state.currently_playing_type !== "track") {
        const lastPlayed = await getRecentlyPlayed(token);
        const latestTrack = lastPlayed.items[0]?.track;

        if (!latestTrack) return null;

        return {
            isPlaying: false,
            track: {
                externalUrl: latestTrack.external_urls.spotify,
                name: latestTrack.name,
                album: {
                    name: latestTrack.album.name,
                },
                artists: latestTrack.artists.map((artist) => ({
                    name: artist.name,
                })),
            },
        };
    }

    return {
        isPlaying: state.is_playing,
        track: {
            externalUrl: state.item.external_urls.spotify,
            name: state.item.name,
            album: {
                name: state.item.album.name,
            },
            artists: state.item.artists.map((artist) => ({
                name: artist.name,
            })),
        },
    };
};

export const config = {
    runtime: "experimental-edge",
};

export default async function handler() {
    try {
        const nowPlaying = await getNowPlaying();
        return new Response(JSON.stringify(nowPlaying), {
            status: 200,
            headers: {
                "content-type": "application/json",
                "cache-control":
                    "public, s-maxage=60, stale-while-revalidate=600",
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({
                error: "Unknown error",
            }),
            {
                status: 500,
            }
        );
    }
}
