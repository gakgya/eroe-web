/*global kakao*/ 
import React, { useEffect } from 'react'

const Location=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
      level: 3
    };
    var map = new kakao.maps.Map(container, options); 
    //eslint-disable-line no-unused-vars
    }, [])


    return (
        <div>
        	<div id="map" style={{width:"100%", height:"40%"}}></div> 
        </div>
    )
}

export default Location;