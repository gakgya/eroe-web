import React, { useEffect } from 'react';

const { kakao } = window;

const Location = () => {
    
    useEffect(() => {
        const container = document.getElementById('myMap');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};
        const map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
        var marker = new kakao.maps.Marker({
          position: markerPosition
      });
      marker.setMap(map);
      
    }, []);

    return (
        <div id='myMap' style={{
            width: '500px', 
            height: '500px'
        }}></div>
    );
}

//테스트

export default Location; 