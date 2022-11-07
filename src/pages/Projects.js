import React from 'react'
import Footer from '../componentes/Footer'
import Navbar from '../componentes/Navbar'
import ProjectImagen from '../componentes/ProjectImagen'
import Projectos from '../componentes/Projectos'

export default function Projects() {
  return (
    <div>
      <Navbar/>
      <ProjectImagen titulo="Mis proyectos Personales"/>
      <Projectos/>
      <Footer/>
    </div>
  )
}
