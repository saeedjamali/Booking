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
                console.log("data is :", data);
            } catch (error) {
                // setData([]);
                toast.error(error.message, {
                    position: "bottom-center"
                });
            } finally {
                setIsLoading(false)
            }



        }
        fetchData();

    }, [query, url]);

    return { data, isLoading };
}