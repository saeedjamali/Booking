import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

export default function useReverseGeoLocation(lat, lng) {

   
    const [data, setData] = useState([]);
    useEffect(
        () => {

            async function getGeoName() {

                setIsLoading(true);
                try {
                    const { data } = await axios.get(`${URL}?latitude=${lat}&longitude=${lng}&localityLanguage=en`);
                    setData(data);

                } catch (error) {
                    toast.error(error?.message);
                } finally {
                    setIsLoading(false);
                }
            }

            getGeoName();
        }
        , []);

    return { data, isLoading }

}