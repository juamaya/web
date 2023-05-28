import React from 'react'


export const Imagen = (props) => {
  return (
    <div className='mt-5' >
      <div className="card text-bg-dark">
        <img src={props.ciudad} className="card-img" alt="New York" />
        <div className="card-img-overlay d-flex justify-content-center align-item-center">
          <h1 className="card-title mt-5">Welcome to New York</h1>
          
        </div>
      </div>
 
      {/* <img src={props.ciudad} className='img-fluid mt-5' width={1000} alt="ciudad" /> */}
    </div>
  )
}

