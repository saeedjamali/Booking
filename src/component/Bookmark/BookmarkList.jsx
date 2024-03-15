import React from 'react'
import { useBookmark } from '../context/BookmarkProvider'
import ReactCountryFlag from 'react-country-flag';
import { useNavigate } from 'react-router';
import Loader from '../../pages/Loader';
import { Link } from 'react-router-dom';

function BookmarkList() {
    const navigate = useNavigate();
    const { bookmarks, isBookmarkLoading, currentBookmark } = useBookmark();
    console.log(bookmarks);

    if (isBookmarkLoading) return <Loader />
    return (
        <div>
            <button className='mt-2 bg-gray-200 rounded-md px-2' onClick={(e) => {
                e.preventDefault();
                navigate(-1)
            }}> &larr; Back </button>
            <div className='my-4 font-bold center'>BookmarkList</div>
            {

                bookmarks.map((bookmark) =>
                    <Link to={`${bookmark.id}?lat=${bookmark.latitude}&lng=${bookmark.longitude}&currentlocation=${true}`} className='m-0 block'>
                        <div className={`mt-2  p-1 bg-slate-100 rounded-md  ${currentBookmark.id == bookmark.id ? ' ring-blue-200 ring-1':"" } `}>
                            <ReactCountryFlag svg countryCode={bookmark.countryCode} />
                            <span className='ml-2 font-bold'>{bookmark.cityName}</span> &bull; <span> {bookmark.country}</span>
                        </div>
                    </Link>
                )
            }
        </div >
    )
}

export default BookmarkList