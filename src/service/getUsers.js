const getUsers = () => {
	const promise = new Promise(async (resolve, reject) => {
		try {
			const response = await fetch('/api/users');
			const json = await response.json();
			return resolve(json);
		}
		catch (e) {
			reject(e);
		}
	});

	return promise;
}

export default getUsers;
export { getUsers };
