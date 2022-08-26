export interface NowPlaying {
	isPlaying: boolean;
	track: {
		externalUrl: string;
		name: string;
		album: {
			name: string;
		};
		artists: {
			name: string;
		}[];
	};
}
