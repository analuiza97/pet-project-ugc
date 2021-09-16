import { useState, useEffect } from 'react';
import { service } from '../service';

const useMock = () => {
  const [loading, setLoading] = useState(undefined);
  const [error, setError] = useState(undefined);
	const [data, setData] = useState(undefined);
	
	const fetchService = () => {
		service.getData()
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

  // useEffect(() => {
	// 	setLoading(true);
		
	// 	return () => {
	// 		console.log('effect once');
	// 		setLoading(false);
	// 	}
  // }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   setError(false);
  //   try {
  //     setTimeout(() => {
  //       setData(users);
  //     }, 3000);
  //   } catch (error) {
  //     setError(errorMock);
  //   }
  //   setLoading(false);
  //   // return () => clearTimeout();
	// 	return () => {
	// 		console.log('effect once');
	// 	}
  // }, [setData]);

  return {
    data,
    error,
    loading,
  };
};

export default useMock;
