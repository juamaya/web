import React from 'react'

export const Form = () => {
    return (
        <div>

            <form className="  " width="400">
                <div className="form-floating mb-3 ">
                    <input type="text" className="form-control text-primary" id="floatingName" placeholder="Name" />
                    <label htmlFor="floatingName">Name</label>
                </div>
                <div className="form-floating mb-3 ">
                    <input type="text" className="form-control" id="floatingPhone" placeholder="Phone" />
                    <label htmlFor="floatingPhone">Phone</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="button">ENVIAR</button>
                </div>
            </form>
        </div>
    )
}
