import "./Header.css";
import React from "react";
import Nav from "./Nav";
import HeaderContent from "./HeaderContent"

function Header(props){
    return(
        <div>
            <Nav />
            {/* <HeaderContent /> */}
        </div>
    )
}

export default Header