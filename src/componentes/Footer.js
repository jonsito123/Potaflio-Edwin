import React from 'react'
import "./FooterStyle.css"
import {AiOutlineHome,AiFillPhone,AiOutlineGooglePlus,AiFillGithub,AiOutlineLinkedin,AiOutlineTwitter} from "react-icons/ai";
export default function Footer() {
  return (
    <footer>
        <div className='contenido-footer'>
              <div className='contenido-left'>
                <h4 className='info-general'>Informacion General</h4>
                <div className='ubicacion'>
                    <AiOutlineHome
                    size={20}
                    style={{color:"#fff",marginRight:"2rem"}}
                    />
                    <div>
                        <p>AV Peru 221</p>
                        <p>Cajamarca-PERU</p>
                    </div>
                </div>
                <div className='telefono'>

                   <h4>
                   <AiFillPhone
                    size={20}
                    style={{color:"#fff",marginRight:"2rem"}}
                    />965342267
                   </h4>

                </div>
                <div className='telefono'>
                   <h4>
                   <AiOutlineGooglePlus
                    size={20}
                    style={{color:"#fff",marginRight:"2rem"}}
                    />ecuevah16_1@unc.edu.pe
                   </h4>

                </div>
              </div>
              <div className='contenido-rigth'>
                <h4 className='info-general'>Mis Redes Sociales</h4>
                
                <div className='redes-sociales'>
                <p>
                    Mi nombre es Cueva Huaman Edwin
                </p>
                   <ul className='redes-footer'>
                     <li>
                      <a href="https://github.com/jonsito123">
                      <AiFillGithub
                     
                     size={32}
                     style={{color:"#fff",marginRight:"2rem"}}
                     />
                      </a>
                     
                     </li>
                     <li>
                     <AiOutlineLinkedin
                    size={32}
                    style={{color:"#fff",marginRight:"2rem"}}
                    />
                     </li>
                     <li>
                     <AiOutlineTwitter
                    size={32}
                    style={{color:"#fff",marginRight:"2rem"}}
                    />
                     </li>
                   </ul>
                  
                </div>

             </div>
            
        </div>
    </footer>
  )
}
