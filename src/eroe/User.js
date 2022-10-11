import React from "react";
import user from "./img/user.png";

function User() {
    return (
        <div>
            <p>
                <img
                    className="Userimg"
                    id="userimg"
                    align="left"
                    src={user}
                    alt="user"
                    onClick={{}}
                />
            배남길</p>
            <p>현재 주소요</p>
        </div>
    )
}

export default User;