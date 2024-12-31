import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import axios from 'axios';
import './map.css';

const INITIAL_CENTER = [
    -123.1207,
    49.2827
]
const INITIAL_ZOOM = 11
const URL = 'http://localhost:4000/near-me/query'

function Map(){

    const mapContainerRef = useRef();
    const mapRef = useRef();

    const [center, setCenter] = useState(INITIAL_CENTER)
    const [zoom, setZoom] = useState(INITIAL_ZOOM)
    const [trashcanData, setTrashcanData] = useState({})

    useEffect(() => {
        // async function getDatapoints(){
        //     const response = await axios.get(URL)
        //     setTrashcanData(response.data)
        // }

        // getDatapoints();

        mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uZS1zdW4iLCJhIjoiY2x3OW9iandtMDVpZzJqcnpneGZwYjNkMyJ9.eJnId9hutvkgXLwik2UxBg';

        mapRef.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: center,
            zoom: zoom
        });
        
        mapRef.current.on('move', () => {
            const mapCenter = mapRef.current.getCenter()
            const mapZoom = mapRef.current.getZoom()
            setCenter([ mapCenter.lng, mapCenter.lat ])
            setZoom(mapZoom)
        })

        mapRef.current.addControl(
            new mapboxgl.GeolocateControl({
                positionOptions: {
                enableHighAccuracy: true
                },
                trackUserLocation: true,
                showUserHeading: true
            })
        );
    

        return () => {
            mapRef.current.remove();
        };
    }, []);

    useEffect(() => {
        // for (const i in trashcanData.features) {
        //     const obj = trashcanData.features[i]
        //     const coordinates = [obj.geometry.x, obj.geometry.y]
        //     new mapboxgl.Marker().setLngLat(coordinates).addTo(mapRef.current); 
        // }
        new mapboxgl.Marker().setLngLat([-123, 49]).addTo(mapRef.current)
    }, [trashcanData])

    console.log("hi")
    return (
        <>
            {/* <div className="sidebar">
                Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
            </div> */}
            <div id='map-container' ref={mapContainerRef} style={{ width:'100%', height: '100%' }}/>
        </> 
   )
   
};

export default Map;