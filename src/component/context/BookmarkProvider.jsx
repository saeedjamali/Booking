import React, { createContext, useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import toast from 'react-hot-toast';



const BASE_URL = "http://localhost:5000/bookmarks";
const BookmarkContext = createContext();

function BookmarkProvider({ children }) {

    const [bookmarks, setBookmarks] = useState([]);
    const [currentBookmark, setCurrentBookmark] = useState([]);
    const [isBookmarkLoading, setIsBookmarkLoading] = useState(false);
    const [isSingleBookmarkLoading, setIsSingleBookmarkLoading] = useState(false);


    // const { data, isLoading } = useFetch(BASE_URL);
    useEffect(() => {
        async function getBookmmark() {

            setIsBookmarkLoading(true);
            try {
                const { data } = await axios.get(BASE_URL);
                setBookmarks(data);

            } catch (error) {
                toast.error(error?.message);
            }
            finally {
                setIsBookmarkLoading(false);
            }
        }
        getBookmmark();
    }, []);


    async function getSingleBookmark(id) {

        setIsSingleBookmarkLoading(true);
        try {
            const { data } = await axios.get(`${BASE_URL}/${id}`);
            setCurrentBookmark(data);

        } catch (error) {
            toast.error(error?.message);
        }
        finally {
            setIsSingleBookmarkLoading(false);
        }
    }

    return (
        <BookmarkContext.Provider value={{ bookmarks, isBookmarkLoading, currentBookmark, setBookmarks, getSingleBookmark, isSingleBookmarkLoading }}>{children}</BookmarkContext.Provider>
    )
}

export default BookmarkProvider;

export function useBookmark() {
    return useContext(BookmarkContext)
}

