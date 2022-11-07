import React, { useState } from 'react'
import "./NavbarStyle.css"
import {Link} from "react-router-dom";
import { AiOutlineAlignRight,AiOutlineCloseCircle} from "react-icons/ai";
export default function Navbar() {
    
    const [click, setclick] = useState(false)
    const handleCLick=()=>{
        setclick(!click)
    }

    ///colores

  return (
    <div className='header'>
       <Link to={"/"}>
        <h1>Portafolio</h1>
       </Link>
         <ul   className={click?"nav-menu active":"nav-menu"}>
            <li>
                <Link to={"/"}>
                Home
                </Link>
            </li>
            <li>
                <Link to={"/project"}>Projectos</Link>
            </li>
            <li>
            <Link to={"/about"}>Sobre mi</Link>
            </li>
           
         </ul>
         <div className='icono' onClick={handleCLick}>
         {click?
         <AiOutlineAlignRight
         size={20} style={{color:"#fff"}}
         />:
         <AiOutlineCloseCircle
         size={20}
         style={{color:"#fff"}}
         
         />}
            
         </div>
    </div>
  )
}
