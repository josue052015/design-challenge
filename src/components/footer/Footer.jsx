import React from 'react'
import styles from './styles.css'

const Footer = () => {
  return (
    <>
      
      <div className="main-footer">
        <div className='footer-container'>
          <div className="content-footer">
            <h4 class="f1">Phone</h4>
            <p class="f2">(+1) 829-804-9502
              <br />
              (+1) 809-699-8528
            </p>
          </div>

          <div className="content-footer">
            <h4 class="f1">Email</h4>
            <a class="f2" href="mailto:pe.rod.001@gmail.com" style={{ "color": "#CCCCCC;" }}>@pe.rod.001@gmail.com</a>
          </div>

          <div className="content-footer">
            <h4 class="f1">Location</h4>
            <p class="f2">Santo Domingo</p>
          </div>


        </div>
        <h2 class="final-title">&copy; Pedro Rodriguez | Web Developer</h2>
        <br />
      </div>
    </>
  )
}

export default Footer