import React from 'react'
import "./ProyectosStyle.css"
export default function Proyecto({proyecto}) {
  return (
    <div className='proyecto-card'>
            
    <img src={proyecto.imgSrc} alt=""/>
      <h2 className='titulo-proyecto'>
       {proyecto.title}
      </h2>
      <div className='proyecto-detalle'>
          <h4>Tecnologias Aplicadas:</h4>
          <ul className='tecnologias'>
            {
                proyecto.tecnologias.map((tecnologia)=>{
                    return <li>- {tecnologia}</li>
                })
            }
          </ul>
          
          
        <div className='botones-proyecto'>
          <a  className='btn btn-contacto'  href={proyecto.view}>
           Ver proyecto
          </a>
          <a  className='btn btn-contacto'  href={proyecto.gitgub}>
           Ver codigo
          </a>
        </div>
      </div>
   </div>
  )
}
