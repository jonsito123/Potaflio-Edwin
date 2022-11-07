import React from 'react'
import HomeImg from "../assets/Home-img.jpg"
import {Link} from "react-router-dom"
import "./UserImgStyle.css"
import imagenPerfil from "../assets/edwinCueva.png"
export default function UserImg() {

  return (
    <div className='usuario'>
        <div className='usuario-contendido'>
            <img src={HomeImg} alt="hola mundo"
            className='usuario-imagen'
            />
            
        </div>
        <div className='usuario-informacion'>
              <img className='imagen-perfil' src={imagenPerfil} alt="Imagne personal" />
              <p className='info-personal'>HI, me llamo Edwin Jonathan Cueva Huaman tengo 23 años de edad,Soy una persona apasionada por el desarrollo de software</p>
              <h1>Apasionado por el desarrollo de software</h1>
         <div className='usuario-contacto'>
            <Link to={"/project"} className="btn">
                Projectos
            </Link>  
            <Link to={"/About"} className="btn btn-light">
                Sobre Mi
            </Link>  
                      
         </div>

        </div>
        
    </div>
  )
}
