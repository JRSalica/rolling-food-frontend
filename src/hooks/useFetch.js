import { useState, useEffect } from 'react';
import axiosConfig from '../config/axios';

const useFetch = (URL) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    try {
      const { data } = await axiosConfig(URL);
      setDataFetch({
        loading: false,
        data,
        error: null,
      });
    } catch (error) {
      setDataFetch({
        loading: false,
        data: null,
        error,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [URL]);

  return dataFetch;
};

export default useFetch;
