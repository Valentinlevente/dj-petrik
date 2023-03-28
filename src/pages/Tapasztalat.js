import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const image = require('../assets/thumbnail.jpg')

const Tapasztalat = () => {
  return (
    <div>
        <Navbar />
            <div className='tapasztalatContainer'>
                <div>
                    <p>
                        Pro-bono bulik
                    </p>
                    <ul>
                        <li>
                            Csibeavató, 2021. 08. 31.
                        </li>
                        <li>
                            Karácsonyi bál, 2021. 12. 22.
                        </li>
                        <li>
                            Farsangi mulatság, 2022. 02. 20.
                        </li>
                    </ul>
                    <p>
                        Professzionális bulik
                    </p>
                    <ul>
                        <li>
                            Tanárkarácsony, 2021. 12. 20.        
                        </li>
                        <li>
                            Ballagás, 2022. 04. 30.
                        </li>
                    </ul>
                </div>
                <div>
                    <img src={image} alt="Kép nem található" />

                </div>
            </div>







        <Footer />
    </div>
  )
}

export default Tapasztalat