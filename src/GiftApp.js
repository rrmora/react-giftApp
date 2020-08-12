import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory'
import GridImage from './components/GridImage'

const GiftApp = props => {

    // const categories = ['One punch', 'Samuray X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
        // setCategories( [...categories, 'HunterXHunter'] ) // Agregar un elemento manteniendo las actuales, spread.
       // setCategories( cate => [...cate, 'HunterHunter']);
    // }

    return (
        <>
            <h2>Gift App</h2>
            <hr></hr>

            <AddCategory setCategories={ setCategories }/>

            <ol>
                { 
                    categories.map( category => (
                        <GridImage 
                            key={ category }
                            category={ category } />
                    ))
                }
            </ol>
        </>
    )
}

GiftApp.propTypes = {

}

export default GiftApp
