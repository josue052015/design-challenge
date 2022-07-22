import React from 'react'
import styles from './styles.css'

const SearchElements = () => {
    return (
        <>
            {/*   <div className='dropdown'>
        <p>klkkkk</p>
        </div> */}

            <div className='search-elements-content'>
                <div className='search-element'>
                    <span className='dropdown-text'>Select a game <i className="fa dropdown-icon">&#xf0d7;</i></span>
                </div>

                <div className='search-element search'  >
                    <span className='dropdown-text'><i className="fa fa-search"></i> Search</span> 
                </div>
              
                <div className='search-element'>
                    <span className='dropdown-text '>Price <i className="fa dropdown-icon">&#xf0d7;</i></span>
                </div>

                <div className='search-element'>
                    <span className='dropdown-text '>Item Type<i className="fa dropdown-icon">&#xf0d7;</i></span>
                </div>
            </div>
        </>
    )
}

export default SearchElements