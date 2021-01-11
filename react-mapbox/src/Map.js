import React, {useState, useEffect, useLayoutEffect} from 'react'
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"

export default function Map() {
    const [long, setLong] = useState(5)
    const [lat, setLat] = useState(34)
    const [coords, setCoords] = useState([5, 34])
  
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGFkc3RlcnIiLCJhIjoiY2tqczJ6dmI4MDAwYzJ5bG9yMmxobXF0MSJ9.TTyJRwJnDBC_yC_-OId5eg";
    useLayoutEffect(() => {
      const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        //longitude, latitude
        center: [long, lat],
        zoom: 10
      });

    return () => { map.remove() }
    }, [long, lat]);

    const handleClick = () => {
        setLong(parseFloat(coords[0]).toFixed(4))
        setLat(parseFloat(coords[1]).toFixed(4))
    }

    const handleLongitudeChange = (e) => {
        setCoords([e.target.value, coords[1]])
    }

    const handleLatitudeChange = (e) => {
        setCoords([coords[0], e.target.value])
    }
  
    return (
      <>
        <label htmlFor="longitude">Longitude: </label>
        <input id="longitude" type="text" value={coords[0]} onChange={handleLongitudeChange}/>
        <label htmlFor="latitude">Latitude: </label>
        <input id="latitude" type="text" value={coords[1]} onChange={handleLatitudeChange}/>
        <button id="rerender" onClick={handleClick}>
          Ререндер!
        </button>
        <div id="map"></div>
      </>
    );
  }