import React from 'react'
import git from '../images/git.webp'
import git1 from '../images/git1.webp'
import git2 from '../images/git2.webp'
import cuadro from '../images/2.jpg'
import cuadro1 from '../images/3.jpg'
import htpA320 from '../images/htp-A320.jpg'

export const Services = () => {
  return (


    <div className='m-5 container-Services ' >

      <h4>DISEÑO DE PAGINAS WEB.</h4>
      <img src={git} className='img-fluid mb-3 ' width={500} alt="git" />
      <h4>CONTROL Y AUTOMATISMOS.</h4>
      <img src={git1} className='img-fluid mb-3  ' width={500} alt="git1" />
      
      <h4>INSTALACIONES ELECTRICAS.</h4>
      <img src={git2} className='img-fluid mb-3  ' width={500} alt="git2" />
      <img src={cuadro} className='img-fluid mb-3 mx-3 ' width={200} alt="cuadro" />
      <img src={cuadro1} className='img-fluid mb-3  ' width={200} alt="cuadro1" />

      <h4>MONTADOR ESTRUCTURAS AERONAUTICAS.</h4>
      <img src={htpA320} className='img-fluid mb-3  ' width={500} alt="htp-A320" />
      
    </div>


  )
}
