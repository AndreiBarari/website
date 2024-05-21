import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
const MapRender = () => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  const [lng] = useState(23.591423);
  const [lat] = useState(46.770439);
  const [zoom] = useState(11);

  // Initialize map when component mounts
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    // Add our navigation control (the +/- zoom buttons)
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Map onload event
    map.current.on("load", () => {
      // Nifty code to force map to fit inside container when it loads
      map.current.resize();
    });

    // Clean up on unmount
    return () => map.current.remove();
  }, [lat, lng, zoom]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default MapRender;
