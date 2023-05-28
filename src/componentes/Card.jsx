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
                            <h2 className="card- mb-5">{props.job}</h2>
                            <p className="card-text">✅    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">✅    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
