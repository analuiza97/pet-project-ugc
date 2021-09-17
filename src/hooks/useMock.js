import { useState, useEffect } from 'react';
import { service } from '../service';

const useMock = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
	const [data, setData] = useState();
	
	const fetchService = () => {
		service.getData()
			.then(res => setData(res))
			.catch(err => setError(err))
	}
	
	useEffect(() => {
		return data || error ? setLoading(false) : false;
	}, [data, error]);

	useEffect(() => {
		return loading ? fetchService() : false;
	}, [loading]);
	
	useEffect(() => {
		setLoading(true);

		return () => {
			console.log('saiu')
		};
  }, []);

  return {
    data,
    error,
    loading,
  };
};

export default useMock;
