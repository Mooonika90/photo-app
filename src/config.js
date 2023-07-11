export const UNSPLASH_BASE_URL = 'https://api.unsplash.com';

const UNSPLASH_ACCESS_KEYS = [
	'AZBbGXFEvEU2PX9hmILrqz6cw3Y37ysQgfbco-u3yq4',
	'mxzpMqvANNTWT9rCn6rcxtx2S2l3XDdI-4aSmCAOlwo',
];

const index = Math.floor(Math.random() * UNSPLASH_ACCESS_KEYS.length);

const UNSPLASH_ACCESS_KEY = UNSPLASH_ACCESS_KEYS[index];

export const UNSPLASH_COMMON_HEADERS = {
	Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
};
