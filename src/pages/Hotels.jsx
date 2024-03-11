import React from 'react'
import { useSearchParams } from 'react-router-dom'
import useFetch from '../component/hooks/useFetch';

function Hotels() {
    const URL = "http://localhost:5000/hotels";
    const [searchParams, setSearchParams] = useSearchParams();
    const destination = searchParams.get("destination");
    const room = JSON.parse(searchParams.get("options"))[2]?.quantity;
    console.log("Dest:", destination);
    const { data, isLoading } = useFetch(URL, `q=${destination || ""}&accommodates_gte=${room || 1}`);
    // name_like

    console.log(data);
    return (
        <div>Hotels</div>
    )
}

export default Hotels