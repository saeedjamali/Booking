import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function useFetch(url, query = "") {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {

        async function fetchData() {
            try {
                setIsLoading(true);
                const { data } = await axios.get(`${url}?${query}`);
                setData(data);
                console.log("Where0", data);

            } catch (error) {
                console.log("Where2");
                setData([]);
                toast.error(error.message);
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();

    }, [query, url]);

    return { isLoading, data }
}