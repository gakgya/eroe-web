import React, { useEffect, useState, useRef } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function Location(props) {
  const [loc_lat, setLoc_lat] = useState(37.4472);
  const [loc_lng, setLoc_lng] = useState(127.1644);
  const text = "현재위치";

  useInterval(() => {
    fetch("http://localhost:3001/locate", {
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

    //kakao api를 글로벌로 사용함
    /*global kakao*/ 

    function getAddr(lat, lng){
      // 주소-좌표 변환 객체를 생성합니다
      let geocoder = new kakao.maps.services.Geocoder();

      let coord = new kakao.maps.LatLng(lat, lng);
      let callback = function(result, status) {
          if (status === kakao.maps.services.Status.OK) {
              const arr  ={ ...result};
              const _arr = arr[0].address.region_2depth_name;
              props.getAddr(_arr);
          }
      }
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    }

    useEffect(()=>{
      getAddr(loc_lat, loc_lng);
    })

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
