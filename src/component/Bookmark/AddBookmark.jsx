import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import useReverseGeoLocation from '../hooks/useReverseGeoLocation'
import toast from 'react-hot-toast';
import axios from 'axios';
import ReactCountryFlag from 'react-country-flag';
import Loader from '../Hotel/Loader'
import { useBookmark } from '../context/BookmarkProvider';


const URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";
const URL_BOOKMARK = "http://localhost:5000"

function AddBookmark() {
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [countryCode, setCountryCode] = useState("IR");
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { setBookmarks } = useBookmark();

    useEffect(() => {
        async function getGeoName() {

            setIsLoading(true);
            try {
                const { data } = await axios.get(`${URL}?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
                setCity(data.city);
                setCountry(data.countryName);
                setCountryCode(data.countryCode);
                // toast.success("location get from bigData")
            } catch (error) {
                toast.error(error?.message);
            } finally {
                setIsLoading(false);
            }
        }
        getGeoName();

    }, [lat, lng]);


    const handleAddBookmark = async (e) => {

        // if (!city || !country) return toast.error("Pls fill input");
        e.preventDefault();
        const newBookmark = {
            cityName: city,
            country,
            countryCode,
            latitude: lat,
            longitude: lng,
            host_location: city + " " + country,
        }


        async function addNewBookmark() {
            try {
                const { data } = await axios.post(`${URL_BOOKMARK}/bookmarks/`, newBookmark);
                if (!data.countryCode) throw new Error("This Location not city..");
                setBookmarks(prev => [...prev, data]);
                toast.success("Bookmark is Added.")
            } catch (error) {
                toast.error(error.message);
            }
        }

        await addNewBookmark();

        navigate("/bookmarks");
    }



    if (isLoading) return <Loader />
    return (
        <div>



            <form className='mt-2' onSubmit={handleAddBookmark}>
                <div className='flex items-center justify-between mt-4'>
                    <button className='mt-2 bg-red-100 rounded-md px-2' onClick={(e) => {
                        e.preventDefault();
                        navigate(-1)
                    }
                    }>&larr; Back</button>
                    <button className='mt-2 bg-green-300 rounded-md px-2' onClick={(e) => handleAddBookmark} >Add</button>
                </div>
                <span className='text-base font-bold mt-4 center '>Add New Location</span>
                <div className='flex flex-col relative'>

                    <label htmlFor="city">City</label>

                    <input type="text" name="city" id="" className='rounded-md  border-1 border-green-700' value={city} onChange={e => setCity(e.target.value)} />
                    <span className='absolute right-2 bottom-2'><ReactCountryFlag svg countryCode={countryCode} /></span>
                </div>
                <div className='flex flex-col mt-2'>
                    <label htmlFor="country">Country</label>
                    <input type="text" name="city" id="" className='rounded-md  border-1 border-green-700' value={country} onChange={e => setCountry(e.target.value)} />
                </div>

            </form>
        </div>
    )
}

export default AddBookmark