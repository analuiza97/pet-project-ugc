import { useState, useEffect } from 'react';
import { service } from '../service';

const useMock = () => {
  const [loading, setLoading] = useState(undefined);
  const [error, setError] = useState(undefined);
	const [data, setData] = useState(undefined);
	
	const fetchService = () => {
		service.getData(5000)
			.then(res => setData(res.data))
			.catch(err => setError(err))
      .finally(() => setLoading(false));
	}
	
	useEffect(() => {
		return loading ? fetchService() : false;
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
