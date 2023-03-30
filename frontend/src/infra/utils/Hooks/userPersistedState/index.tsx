import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { setCookie, parseCookies } from 'nookies';

type IResponse<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): IResponse<T> {
	const [state, setState] = useState(() => {
		const cookies = parseCookies();
		const storageValue = cookies[key];
		return storageValue ? JSON.parse(storageValue) : initialState;
	});

	useEffect(() => {
		setCookie(undefined, key, JSON.stringify(state), {
			path: '/',
		});
	}, [key, state]);

	return [state, setState];
}

export default usePersistedState;
