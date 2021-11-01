import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(async() => {
    const response = await fetch(url); 
    const final = await response.json();
    setIsPending(false);
    setData(final);
  }, [url])
  return { data, isPending};
}
export default useFetch;
