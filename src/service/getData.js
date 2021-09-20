import data from './mockData';
import error from './mockError';

const randomArray = (arr = []) => Math.floor(Math.random() * arr.length);

const getData = () => {
	const promise = new Promise((resolve, reject) => {
		const arr = [data, error];
		const response = arr[randomArray(arr)];
		const success = () => setTimeout(() => resolve(response.data), 2000);
		const failure = () => setTimeout(() => reject({error: true}), 2000);
		return response.status === 200 ? success() : failure();
	});

	return promise;
}

export default getData;
export { getData };
