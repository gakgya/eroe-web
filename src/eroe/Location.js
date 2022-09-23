import React, {useState} from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function Location(){
  const [loc_lat, setLoc_lat] = useState(33.5563);
  const [loc_lng, setLoc_lng] = useState(126.79581);
  const text = '현재위치'
  return (
    <Map
      center={{ lat: loc_lat, lng: loc_lng }}
      style={{ width: "100%", height: "100%" }}
    >
      <MapMarker position={{ lat: loc_lat, lng: loc_lng }}>
        <div style={{color:"#000"}}>{text}</div>
      </MapMarker>
    </Map>
  )
}

export default Location;