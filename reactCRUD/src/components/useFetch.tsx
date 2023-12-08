import { useState , useEffect } from 'react';

type Weapon = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    createdAt: string;
  };

const useFetch = (url: string) => {

    const [data, setData] = useState<Weapon[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
            if (!res.ok) {
                throw Error('Could not fetch data from server');
            }
            return res.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
                console.log(data);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                } else {

                    setIsLoading(false);
                    setError(err.message);  
                }
            });
        return () => abortCont.abort();
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch;
