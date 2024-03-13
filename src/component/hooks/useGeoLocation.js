import { useState } from "react";

export default function useGeoLocaion() {

    const [geoUserLocation, setGeoUserLocation] = useState({ lat: 50, lng: 2 });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function getGeoLocation() {
        console.log("get Current location");
        // if (!navigator.geoLocation)
        //     return setError("Your Browser Not Supported..");
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition((pos) => {
            setGeoUserLocation({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            });
            setIsLoading(false);
        }, (error) => {
            setError(error.message);
            setIsLoading(false);
        });
    }
    return { isLoading, error, geoUserLocation, getGeoLocation };
}