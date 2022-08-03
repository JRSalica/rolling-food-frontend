import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (URL, AuthStr) =>{
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true)
    axios.get(URL, {headers: {'Authorization': AuthStr}})
    .then(res => {
        setLoading(false);
        console.log(res);
        setData(res);
    })
    .catch(error => {
        setLoading(false)
        setError(error)
    })
  }, [URL, AuthStr]);

  return { data, loading, error };
};

export default useFetch;