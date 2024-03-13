import React, { useEffect, useState } from 'react'
import { useHotel } from '../context/HotelsProvider'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useSearchParams } from 'react-router-dom';
import useGeoLocaion from '../hooks/useGeoLocation';


function Map() {
    const [mapCenter, setMapCenter] = useState([51.505, -0.09]);
    const [searchParams, setSearchParams] = useSearchParams();
    const { data: hotels, isLoading } = useHotel();

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    useEffect(() => { if (lat && lng) setMapCenter([lat, lng]) }, [lat, lng])
        ;

    const { isLoading: isLoadingGeoLocation, error, geoUserLocation, getGeoLocation } = useGeoLocaion();

    console.log(geoUserLocation);
    useEffect({
        if(geoUserLocation) {
            setMapCenter([geoUserLocation.lat, geoUserLocation.lng])
        }
    }, [geoUserLocation]);

    return (
        <div className='w-full h-full '>
            <MapContainer className='w-full h-full relative rounded-md' center={mapCenter} zoom={13} scrollWheelZoom={false}>
                <button className='p-1 fixed bottom-[4rem] right-12 z-[1000] bg-blue-600 rounded-md shadow-lg shadow-sky-200 bottom-1 border-sky-400 text-white font-mono text-[10px]' onClick={getGeoLocation}>{isLoadingGeoLocation ? "Loading..." : "Use Your Location"}</button>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <ChangeCenter position={mapCenter} />
                {
                    hotels.map((hotel) => (
                        <Marker position={[hotel.latitude, hotel.longitude]}>
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