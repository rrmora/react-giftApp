import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifts';
export const  useFetchGifts = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

        useEffect( () => {
        getGifs( category ).then( img => setState({ data: img, loading: false }) );
    }, [ category ]); // mandar llamar la funcion getGifs solo al renderizar por primera vez

    return state;
}
