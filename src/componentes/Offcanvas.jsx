import React from 'react'
import marin from '../images/marin.png'

export const Offcanvas = () => {
    return (
        <div>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">CLICK ME </button>

            <div className="offcanvas offcanvas-end text-bg-dark     " tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">JUAN MARIN AMAYA </h5>
                    <button type="button" className="btn-close  " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                <img src={marin} className="card-img" alt="marin" />
               
                <a type="btn btn-primary" href="https://juamaya.github.io/curricujuan.github.io/" target="_blank">CURRICULUM</a> 

                </div>
                
            </div>

        </div>
    )
}
