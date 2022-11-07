import React from 'react'
import AboutContenido from '../componentes/AboutContenido'
import Footer from '../componentes/Footer'
import Navbar from '../componentes/Navbar'
import ProjectImagen from '../componentes/ProjectImagen'

export default function About() {
  return (
    <>
     <Navbar/>
     <ProjectImagen titulo="Informacion Personal"/>
     <AboutContenido/>
    <Footer/>
    </>
  )
}

