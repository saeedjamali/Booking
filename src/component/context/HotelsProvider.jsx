import React, { createContext, useContext, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import axios from 'axios';



const BASE_URL = "http://localhost:5000/hotels";
const HotelContext = createContext();

function HotelsProvider({ children }) {


    const [currentHotel, setCurrentHotel] = useState();
    const [isLoadingCurrentHotel, setIsLoadingCurrentHotel] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const destination = searchParams.get("destination");
    const room = JSON.parse(searchParams.get("options")) ? JSON.parse(searchParams.get("options"))[2]?.quantity : 1;
    // console.log("Dest:", destination);
    const { data, isLoading } = useFetch(BASE_URL, `accommodates_gte=${room || 1}`);
    // name_like


    async function getHotel(id) {

        setIsLoadingCurrentHotel(true);
        try {
            const { data } = await axios.get(`${BASE_URL}/${id}`);
            setIsLoadingCurrentHotel(false);
            setCurrentHotel(data);

        } catch (error) {
            toast.error(error?.message);
            setIsLoadingCurrentHotel(false);   
        }
    }

    return (
        <HotelContext.Provider value={{ data, isLoading,isLoadingCurrentHotel,currentHotel ,getHotel}}>{children}</HotelContext.Provider>
    )
}

export default HotelsProvider;

export function useHotel() {
    return useContext(HotelContext)
}

