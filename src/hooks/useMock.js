import { useState, useEffect } from 'react';
import { service } from '../service';

const useMock = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
	const [data, setData] = useState();
	
	const fetchData = () => {
		service.getUsers().then(res => setData(res)).catch(err => setError(err))
	}
	
	useEffect(() => {
		return data || error ? setLoading(false) : false;
	}, [data, error]);

	useEffect(() => {
		return loading ? fetchData() : false;
	}, [loading]);
	
	useEffect(() => {
		setLoading(true);
  }, []);

  return {
    data,
    error,
    loading,
  };
};

export default useMock;
