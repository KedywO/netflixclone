import React, {useState, useEffect} from "react";
import './Nav.css'

export default function Nav(){

    const [show, handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=> {
            if(window.scrollY > 50){
                handleShow(true);
            }else handleShow(false);
        });
        return ()=> {
            window.removeEventListener("scroll");
        }
    },[])
    
    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img
                className="nav-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img
                className="nav-avatar"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Netflix Logo"
            />
            
        </div>        
    )
}