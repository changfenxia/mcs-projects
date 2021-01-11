import React, {useState, useLayoutEffect} from 'react'
import mapboxgl from "mapbox-gl";

export default function MapWithMarker() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGFkc3RlcnIiLCJhIjoiY2tqczJ6dmI4MDAwYzJ5bG9yMmxobXF0MSJ9.TTyJRwJnDBC_yC_-OId5eg";
    const [marker, setMarker] = useState(undefined);

    useLayoutEffect(() => {
      const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [55.7558, 37.6173],
        zoom: 10
      });

     setMarker(new mapboxgl.Marker()
  .setLngLat([55.7558, 37.6173])
  .addTo(map))

      return () => map.remove()
    }, []);

    const stores = {
      km20: [55.761994, 37.610641],
      belief: [55.733396, 37.601152],
      brandshop: [55.767839, 37.616812]
    };

    const handleSelectChange = (e) => {
        const [long, lat] = stores[e.target.value];
        marker.setLngLat([long, lat])
    }

    return (
      <>
        <div className="map-overlay">
          <h3>Выберите магазин: </h3>
          <select onChange={handleSelectChange}>
            <option value="km20">KM20</option>
            <option value="belief">BELIEF</option>
            <option value="brandshop">BRANDSHOP</option>
          </select>
        </div>
        <div id="map"></div>
      </>
    );
  }