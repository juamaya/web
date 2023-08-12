import React from 'react'



export const Card = (props) => {
    return (
        <div>

            <div className="card my-3 mx-5"  >
                <div className="row  ">
                    <div className="col-md-4  ">
                        <img src={ props.ilustracion} className="img-fluid rounded-start" alt="ilustracion" />
                    </div>
                    <div className="col-md-8 bg-secondary ">
                        <div className="card-body text-white">
                       <div className="fs-4 fw-2 text-warning"><i className={props.icon}></i></div> 
                            <h2 className="card-title mb-5 text-warning">{props.job}</h2>
                           
                            <p className="card-text">✅ {props.texto}</p>
                            <p className="card-text">✅ {props.texto1}</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
