import React, { useEffect, useState, useRef } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function Location() {
  const [loc_lat, setLoc_lat] = useState(37.448);
  const [loc_lng, setLoc_lng] = useState(127.1694);
  const text = "현재위치";

  useInterval(() => {
    fetch("http://gakgya.iptime.org:3001/locate", {
      method: "post", // 통신방법
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setLoc_lat(json.loc_latitude);
        setLoc_lng(json.loc_longtitude);
      });
  }, 5000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  return (
    <Map
      center={{ lat: loc_lat, lng: loc_lng }}
      level={1}
      style={{ width: "100%", height: "100%" }}
    >
      <MapMarker position={{ lat: loc_lat, lng: loc_lng }}>
        <div style={{ color: "#000" }}>{text}</div>
      </MapMarker>
    </Map>
  );
}

export default Location;
