import React from 'react';
import "./Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import just from "./pics/JUST DECOR_free-file.png"




        
function Nav(props) {


        let showmenu = () => {
            let nav_container = document.querySelector(".nav_container");
            if(nav_container.style.display === "block"){
                nav_container.style.display = "none";
            }else{
                nav_container.style.display = "block";
            }
        }  

  return (
        <header>
            <div className="main_header">
                <div >
                    <img className="Logo" src={just} alt="" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faBars} className="menu" onClick={showmenu}/>
                </div>
                <nav className="nav_container">
                    <ul className="main_nav_container">
                        <FontAwesomeIcon icon={faClose} className="menu_cancel" onClick={showmenu} />
                        <li className="nav_item">Services</li>
                        <li className="nav_item">Projects</li>
                        <li className="nav_item">About</li>
                        <li className="nav_item">Contacts</li>
                    </ul>
                </nav>
            </div>
        </header>
  )
}

export default Nav