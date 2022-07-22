import React from 'react'
import styles from './styles.css'

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>

                <h3 id='logo'>Design Challenge |</h3>
                <div className='navbarContent'>
      
                    <ul >   
                        <li className='navbarElement left-element'>CURRENCY <i className="fa">&#xf107;</i></li>
                        <li className='navbarElement left-element'>ITEMS <i className="fa">&#xf107;</i></li>
                        <li className='navbarElement left-element'>ACCOUNTS <i className="fa">&#xf107;</i></li>
                        <li className='navbarElement left-element'>SERVICES <i className="fa">&#xf107;</i></li>
                        <li className='navbarElement left-element'>SWAP <i className="fa">&#xf107;</i></li>
                        <li className='navbarElement left-element'>SELL <i className="fa">&#xf107;</i></li>
                        <li className='navbarElement navbarElementRight right-element' id='priceOption'>USD <i className="fa">&#xf107;</i></li>
                        <li className='navbarElement right-element' id='priceOption'><i className="fa fa-shopping-cart" ></i> <span style={{ "marginLeft": "5px" }}>CART(5)</span></li>
                        <li className='navbarElement sing-in-button' ><button className='button-4'>SING IN <i class="fa">&#xf007;</i></button></li>
                    </ul>

                </div>

            </nav>
        </>
    )
}

export default Navbar