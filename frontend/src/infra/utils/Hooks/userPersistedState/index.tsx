import { useEffect, useState, Dispatch, SetStateAction } from 'react';

type IResponse<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): IResponse<T> {
	const [state, setState] = useState(() => {
		const storageValue = localStorage.getItem(key);
		return storageValue ? JSON.parse(storageValue) : initialState;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
}

export default usePersistedState;
