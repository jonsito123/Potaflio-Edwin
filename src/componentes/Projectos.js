import React from 'react'
import "./ProyectosStyle.css"
import { ProyectosInformacion } from './ProyectosData'
import Proyecto from './Proyecto'

export default function Projectos() {
  return (
    <div className='contenido-trabajos'>
      <h1 className='titulo-proyectos'>
        Proyectos Realizados
      </h1>
      <div className='projectos-contenido'>
       {
        ProyectosInformacion.map((proyecto)=>{
            return <Proyecto key={proyecto}
            proyecto={proyecto}
            />
        })
       }
      
      </div>
    </div>
  )
}
