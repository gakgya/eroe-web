import React from "react";
import "./css/Servicecenter.css";

function Servicecenter () {
    return(
        <div>
            <button onClick={{}} className="servicecenter_button">고객센터</button>
            <button onClick={{}} className="qna_button">Q&A</button>
            <button onClick={{}} className="onetoone_button">1:1문의</button>
            <button className="empty"></button>
            <button onClick={{}} className="servicecenternum_button"><a href="tel:1688XXXX">고객센터&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1688-XXXX</a></button>
        </div>
    );
}

export default Servicecenter;