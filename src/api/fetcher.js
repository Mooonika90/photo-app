import { UNSPLASH_BASE_URL, UNSPLASH_COMMON_HEADERS } from '../config';

function fetcherUnsplash(pathname, params = '') {
	return fetch(`${UNSPLASH_BASE_URL}${pathname}${params}`, {
		headers: {
			...UNSPLASH_COMMON_HEADERS,
		},
	}).then((res) => res.json());
}

export default fetcherUnsplash;
