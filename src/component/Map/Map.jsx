import React, { useEffect, useState } from 'react'
import { useHotel } from '../context/HotelsProvider'
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from 'react-leaflet'
import { useNavigate, useSearchParams } from 'react-router-dom';
import useGeoLocaion from '../hooks/useGeoLocation';


function Map({markerLocation}) {
    const [mapCenter, setMapCenter] = useState([51.505, -0.09]);
    const [currentLocation, setCurLoction] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
   

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    const curlOC = searchParams.get("currentlocation");

    useEffect(() => {
        if (lat && lng) setMapCenter([lat, lng]);
        if (curlOC) setCurLoction(true)
    }, [lat, lng, currentLocation]);

    const { isLoading: isLoadingGeoLocation, error, geoUserLocation, getGeoLocation } = useGeoLocaion();

    //TODO For get Current location
    // useEffect({
    //     if(geoUserLocation) {
    //         setMapCenter([geoUserLocation.lat, geoUserLocation.lng])
    //     }
    // }, [geoUserLocation]);

    return (
        <div className='w-full h-full '>
            <MapContainer className='w-full h-full relative rounded-md' center={mapCenter} zoom={14} scrollWheelZoom={false}>
                <button className='p-1 fixed bottom-[4rem] right-12 z-[1000] bg-blue-600 rounded-md shadow-lg shadow-sky-200 bottom-1 border-sky-400 text-white font-mono text-[10px]' onClick={getGeoLocation}>{isLoadingGeoLocation ? "Loading..." : "Use Your Location"}</button>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <DetectClick />
                <ChangeCenter position={mapCenter} />
                {
                    markerLocation.map((hotel) => (
                        <Marker key={hotel.id} position={[hotel.latitude, hotel.longitude]} opacity={1}>
                            <Popup>
                                {hotel.host_location} <br /> {hotel.name}
                            </Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}

export default Map


function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null
}


function DetectClick() {
    const navigate = useNavigate();
    useMapEvent(
        { click: e => navigate(`/bookmarks/add?lat=${e.latlng.lat}&lng=${e.latlng.lng}`) }
    );
    return null;
}