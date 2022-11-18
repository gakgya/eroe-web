import React from "react";
import Location from "./Location"
import "./css/Location_info.css";

function Location_info() {
    return (

            <div id="location_info_standard">
                <div className = "location_map">
                    <Location/>
                </div>
            </div>

    )
}

export default Location_info;