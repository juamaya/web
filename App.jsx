

// IMAGENES
import ciudad from './src/images/ciudad.jpg'
import ciudad1 from './src/images/ciudad1.jpg'
import ilustracion from './src/images/ilustracion.webp'
import ilustracion1 from './src/images/ilustracion1.webp'
import ilustracion2 from './src/images/ilustracion2.webp'
import git1 from './src/images/git1.webp'

// COMPONENTES
import { Navbar } from './src/componentes/Navbar'
import { Footer } from './src/componentes/Footer'
import { NewYork} from './src/componentes/NewYork'
import { Card } from './src/componentes/Card'
import { Spinner } from './src/componentes/Spinner'
import { Services } from './src/componentes/Services'
import { Offcanvas } from './src/componentes/Offcanvas'
import { Form } from './src/componentes/Form'
import { BotonScroll } from './src/componentes/BotonScroll'
import Skills from './src/componentes/Skills'




function App() {


  return (
    <div className="App init bg-info">
      <Navbar />

      <div className="container">
        <NewYork ciudad={ciudad1} />
        <p className='mt-3  text-center'>
          New York es una ciudad cosmopolita con una atmósfera única. <br />
          Está dividida en cinco distritos (o "Boroughs"): <b>Manhattan, Brooklyn, Queens, Bronx y Staten Island.</b><br />
          Nueva York  se ubica donde el río Hudson desemboca en el océano Atlántico. <br />
          En su centro se encuentra Manhattan, un distrito densamente poblado que se encuentra entre los principales centros comerciales, financieros y culturales del mundo.
        </p>
      </div>

      <span className="placeholder col-12 bg-primary"></span>
      <h2 className='text-center' id='Jobs' >Ours Jobs</h2>
      <hr />

      <Card
        ilustracion={ilustracion}
        job="Design Web Pages"
        icon="bi bi-laptop"
        texto="El diseño web es una actividad que consiste en la planificación, diseño, implementación y mantenimiento de sitios web."
        texto1=" Consulta gratuita para conocer tu negocio y establecer objetivos para el diseño de tu sitio web." />

      <Card
        ilustracion={ilustracion1}
        job="Team Work"
        icon="bi bi-people-fill"
        texto="El trabajo en equipo es un proceso en el que diferentes personas aportan sus habilidades, conocimientos y tiempo para alcanzar metas de forma conjunta."
        texto1=" Motivación, participación, organización, compromiso, confianza, objetivos comunes y resolución de problemas son las siete características del trabajo en equipo." />

      <Card
        ilustracion={ilustracion2}
        job="Quick Response"
        icon="bi bi-clock"
        texto="Nuestros expertos están a su servicio las 24 horas con los contratos de servicio que le ayudan a conseguir unos resultados fiables."
        texto1=" Consulta gratuita para conocer tu negocio y establecer los servicios que requieran." />


        
      <BotonScroll />
      <h6 id='Services'> </h6>

      <span className="placeholder  placeholder-lg col-12 bg-primary"></span>
      <h2 className='text-center'   >Ours Services</h2>
      <hr />

      <div className="container">
        <Services/>
      </div>
      <BotonScroll />
      <h6 id='About us'> </h6>

      <span className="placeholder  placeholder-lg col-12 bg-primary"></span>
      <h2 className='text-center'   >About us</h2>
      <hr />

      <div className="d-flex justify-content-center">
        <Offcanvas />
      </div>

      <Skills />



      <div className="container">
        <NewYork ciudad={ciudad} />

        <p className="mt-3 fs-4 text-center">Nueva York : <br />  </p>
        <p className="mt-3   text-center">
          Sus sitios icónicos incluyen rascacielos, como  <mark>Empire State Building</mark><br />
          EL <mark className='bg-success'> Central Park</mark> es el parque urbano más grande de Nueva York y uno de los más grandes el mundo. Mide más de 4 kilómetros de largo y 800 metros de ancho..<br />
          El <mark>teatro Broadway </mark> se ubica en la zona del Times Square iluminada con neones..</p>
      </div>


      <h6 id='Contact'> </h6>
      <span className="placeholder  placeholder-lg col-12 bg-primary"></span>

      <h2 className='text-center'   >Contact with us</h2>


      <div className="container  bg-secondary p-5 mb-5">
        <Form />
      </div>

      <Footer />

      <BotonScroll />
    </div>
  )
}

export default App
