import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    throw Error('Sorry I could not fetch data for the requested resource');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setisPending(false);
                setError(null);
            })
            .catch(err => {
                setisPending(false);
                setError(err.message);

            })
    }, [url]);
    return { data, isPending, error };

}

export default useFetch;