import React from 'react'

export const BotonScroll = () => {

    scroll = () => {

        const elemento = document.querySelector('.init')
        elemento.scrollIntoView('smooth', 'start');
    }


    return (
        <div className='text-center float-right'>
            <button className="btn btn-primary mb-4 fs-6 " onClick={() => {{ scroll() }}}>
              Inicio
            </button>
        </div>
    )
}
