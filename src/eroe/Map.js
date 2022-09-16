import React, { useEffect } from 'react'

const Map=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    var map = new kakao.maps.Map(container, options);
    }, [])


    return (
        <div>
        	<div id="map" style={{width:"500px", height:"400px"}}></div> 
        </div>
    )
}

export default Map;