import React from 'react'
import {Link} from "react-router-dom"
import "./AboutContenidoStyle.css"
export default function AboutContenido() {
  return (
    
    <div className='about'>
      <div className='informacion-personal'>
        <h4>Quien Soy?</h4>
          
        <p className='texto-info-personal'>Estudiante de la carrera de ingeniería sistemas, responsable,
comprometido, honrado, trabajo en equipo, con muchas ganas
de aprender y poner en práctica todos mis conocimientos y
experiencias adquiridas durante mi formación profesional y de
esta manera contribuir con el crecimiento de vuestra empresa</p>
       

      
        <Link to={"/Project"}>
          <button type="" className='btn'>Proyectos</button>
        </Link>
      </div>
      <div className='skills'>
        <div className='tecnologias'>
          <h4>skills</h4>
          <ul className='tecnologias-conocidas'>
            
            <li>HTML  <progress id="file" max="100" value="70"></progress> </li>
            <li>CSS  <progress id="file" max="100" value="70"></progress> </li>
            <li>Javascript  <progress id="file" max="100" value="60"></progress> </li>
            <li>Reactjs  <progress id="file" max="100" value="60"></progress></li>
            <li>Angular <progress id="file" max="100" value="60"></progress></li>
          </ul>
          
        </div>

        
      </div>
      
    </div>
    
  )
}
