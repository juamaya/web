
 
// IMAGENES
import ciudad from './src/images/ciudad.jpg'
import ciudad1 from './src/images/ciudad1.jpg'
import ilustracion from './src/images/ilustracion.webp'
import ilustracion1 from './src/images/ilustracion1.webp'
import ilustracion2 from './src/images/ilustracion2.webp'

// COMPONENTES
import { Navbar } from './src/componentes/Navbar'
import { Footer } from './src/componentes/Footer'
import { Imagen } from './src/componentes/Imagen'
import { Card } from './src/componentes/Card'
import { Spinner } from './src/componentes/Spinner'
import { Git } from './src/componentes/Git'
import { Offcanvas } from './src/componentes/Offcanvas'
import { Form } from './src/componentes/Form'
import { BotonScroll } from './src/componentes/BotonScroll'




function App() {


  return (
    <div className="App init">
      <Navbar />

      <div className="container">
        <Imagen ciudad={ciudad1} />
        <h6 id='Jobs'>Nueva York incluye 5 distritos que se ubican donde el río Hudson desemboca en el océano Atlántico. En su centro se encuentra Manhattan, un distrito densamente poblado que se encuentra entre los principales centros comerciales, financieros y culturales del mundo. Sus sitios icónicos incluyen rascacielos, como el Empire State Building, y el amplio Central Park. El teatro Broadway se ubica en la zona del Times Square iluminada con neones..</h6>
      </div>

      <span className="placeholder col-12 bg-primary"></span>
      <h2 className='text-center' id='Jobs' >Ours Jobs</h2>
      <hr />

      <Card ilustracion={ilustracion} job="Design Web Pages" />
      <Card ilustracion={ilustracion1} job="Team Work" />
      <Card ilustracion={ilustracion2} job="Quick Response" />

      <h6 id='Products'> </h6>
      <Spinner />
      <span className="placeholder  placeholder-lg col-12 bg-primary"></span>
      <h2 className='text-center'   >Ours Products</h2>
      <hr />

      <div className="container">
        <Git />
      </div>

      <h6 id='About us'> </h6>
      <Spinner />
      <span className="placeholder  placeholder-lg col-12 bg-primary"></span>
      <h2 className='text-center'   >About us</h2>
      <hr />

      <div className="d-flex justify-content-center">
        <Offcanvas />
        </div>  
       


      <div className="container">
        <Imagen ciudad={ciudad} />
        <h6 >Nueva York :  Sus sitios icónicos incluyen rascacielos, como el Empire State Building, y el amplio Central Park. El teatro Broadway se ubica en la zona del Times Square iluminada con neones..</h6>
      </div>

      <h6 id='Contact'> </h6>
      <Spinner />
      <span className="placeholder  placeholder-lg col-12 bg-primary"></span>
      <h2 className='text-center'   >Contact</h2>
      <hr />


      <div className="container">
        <Form />
      </div>

      <BotonScroll />
      <Footer />

    </div>
  )
}

export default App
