import React from 'react'

export const BotonScroll = () => {

    scroll = () => {

        const elemento = document.querySelector('.init')
        elemento.scrollIntoView('smooth', 'start');
    }


    return (
        <div className='text-center'>
            <button className="btn btn-primary" onClick={() => {{ scroll() }}}>
                Arriba
            </button>
        </div>
    )
}
