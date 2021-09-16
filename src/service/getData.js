import { data } from './mockData';
import { error } from './mockError';

const randomArray = (arr = []) => Math.floor(Math.random() * arr.length);

const getData = (ms = 3000) => {
	const promise = new Promise((resolve, reject) => {
		const arr = [data, error];
		const response = arr[randomArray(arr)];
		const success = () => setTimeout(() => resolve(response), ms);
		const failure = () => setTimeout(() => reject(response), ms);
		return response.status < 400 ? success() : failure();
	});

	return promise;
}

export { getData };

