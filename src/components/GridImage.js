// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
import { GiftGridItem } from './GiftGridItem';

export default function GridImage({ category }) {

    const { data: images, loading } = useFetchGifts( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>  

            { loading && <p className="animate__animated animate__flash">Cargando...</p> }
            
            <div className="card-grid">
                {
                    images.map( img => { 
                    // return <li key= { id } > { title } </li> }) 
                    return <GiftGridItem key={ img.id } { ...img }/>
                    })
                }
            </div>
        </>
    )   
}
