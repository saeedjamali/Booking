import React, { useEffect } from 'react'
import { useBookmark } from '../context/BookmarkProvider'
import Loader from '../Hotel/Loader';
import { useNavigate, useParams } from 'react-router';
import ReactCountryFlag from 'react-country-flag';

function SingleBookmark() {


    const navigate = useNavigate();
    const { currentBookmark, setBookmarks, getSingleBookmark, isSingleBookmarkLoading } = useBookmark();

    const { id } = useParams();
    console.log("ID:", id)
    useEffect(() => { getSingleBookmark(id) }, [id]);

    if (isSingleBookmarkLoading) return <Loader />
    return (
        <div >
            <button className='mt-2 bg-gray-200 rounded-md px-2' onClick={(e) => {
                e.preventDefault();
                navigate(-1)
            }}> &larr; Back </button>
            <div className='ring-1 ring-green-200 rounded-lg p-2 mt-4'>
                <p className='font-bold'>{currentBookmark.cityName}</p>
                <ReactCountryFlag svg countryCode={currentBookmark.countryCode} />
                <span className='ml-2'>{currentBookmark.country}</span>
            </div>
        </div>
    )
}

export default SingleBookmark