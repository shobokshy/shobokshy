import { Buffer } from "buffer";
import type { NextApiRequest, NextApiResponse } from "next";

interface PlaybackState {
	is_playing: boolean;
	item: {
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
	};
}

const getToken = async () => {
	const client_id = "e9c9c593468c40c699e5630fdb31733e";
	const client_secret = "fe5de8551b444da8bbeeb7d1010af781";
	const refresh_token = "AQCjtmh_ckoTiitIZs7sGjWqoxlIFtOOgCQLVU_KYcw6I09aj95FxjFz3dAHJnBDmDU4W-EV0WtK2cF8WiM3RHU_vEUPQOSBibNlax5kxvfA-herr2tUgzwIN1wQKw2PQGk";

	const response = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			Authorization: `Basic ${Buffer.from(client_id + ":" + client_secret).toString("base64")}`,
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

const getNowPlaying = async (token: string) => {
	const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	if (response.ok) {
		return (await response.json()) as PlaybackState;
	} else {
		throw Error("Error getting currently playing");
	}
};

interface NowPlaying {
	isPlaying: boolean;
	track: {
		name: string;
		album: {
			name: string;
		};
		artists: {
			name: string;
		}[];
	};
}

export default async (req: NextApiRequest, res: NextApiResponse<NowPlaying>) => {
	if (req.method === "GET") {
		try {
			const token = await getToken();
			const state = await getNowPlaying(token);

			if (state.item.type === "track") {
				res.status(200).json({
					isPlaying: state.is_playing,
					track: {
						name: state.item.name,
						album: {
							name: state.item.album.name,
						},
						artists: state.item.artists.map((artist) => ({
							name: artist.name,
						})),
					},
				});
			}
		} catch (error) {
			res.status(500);
		}
	}
};
