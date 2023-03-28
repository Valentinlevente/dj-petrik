import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const image = require('../assets/dj.jpg')

const Fooldal = () => {
  return (
    <div>
        <Navbar />
            <div className='fooldalContainer'>
                <p>
                    Üdvözöllek DJ Petrik weboldalán!
                </p>
                <p>
                    Válassz a fenti lehetőségek közül!
                </p>
                <img src={image} alt="Kép nem elérhető" />
            </div>
        <Footer />
    </div>
  )
}

export default Fooldal