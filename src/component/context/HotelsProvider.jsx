import React, { createContext, useContext } from 'react'
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';



const BASE_URL = "http://localhost:5000/hotels";
const HotelContext = createContext();

function HotelsProvider({ children }) {

    const [searchParams, setSearchParams] = useSearchParams();
    const destination = searchParams.get("destination");
    const room = JSON.parse(searchParams.get("options"))?JSON.parse(searchParams.get("options"))[2]?.quantity:1;
    // console.log("Dest:", destination);
    const { data, isLoading } = useFetch(BASE_URL, `accommodates_gte=${room || 1}`);
    // name_like

    return (
        <HotelContext.Provider value={{ data, isLoading }}>{children}</HotelContext.Provider>
    )
}

export default HotelsProvider;

export function useHotel() {
    return useContext(HotelContext)
}

