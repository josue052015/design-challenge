import React from 'react'
import styles from './styles.css'


const Card = () => {
    return (
        <>
            <div className='container'>
                <div className='card card-container'>
                    
                    <button className='element-quantity'> 1</button>
                    <button className='in-stock'>In stock</button>

                    <img className='image' src='http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gold_30_23.png'></img>

                  
                    <h4>Jigglypuff</h4>
                    <h3>$200</h3>
                    <p>Lorem ipsum dolor sit amet. 33 voluptatum pariatur ut recusandae aliquam qui fuga assumenda et veritatis sequi est soluta impedit et error quam! </p>

                    <div className='buttons'>
                        <button className=' button details-button'>DETAILS</button>
                        <button className='button add-button'>ADD</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card