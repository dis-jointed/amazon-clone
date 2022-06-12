import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home__image'
                 src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 
                 alt='' />

                 <div className='home__row'>
                     <Product 
                     id='12321341'
                     title='SAMSUNG 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR'
                     price={199.99}
                     image='https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_UY218_.jpg'
                      rating={5}
                      />
                      
                     <Product 
                     id='49538094'
                     title='Echo Dot (3rd Gen) - Smart speaker with Alexa - Designed to protect your privacy - Charcoal'
                     price={98.99}
                     image='https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg'
                      rating={5}
                      />
                 </div>
                 
                 <div className='home__row'>
                 <Product 
                    id='4903850'
                     title='Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)'
                     price={139.99}
                     image='https://m.media-amazon.com/images/I/61aT8jl8THL._AC_UY218_.jpg'
                      rating={3}
                      />
                      <Product 
                      id='23445930'
                     title='SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model'
                     price={139.99}
                     image='https://m.media-amazon.com/images/I/81r8JazRcoL._AC_UY218_.jpg'
                      rating={5}
                      />
                      <Product
                      id='3254354345' 
                     title='2020 Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Gray (2nd Generation)'
                     price={139.99}
                     image='https://m.media-amazon.com/images/I/815ztYEEwYL._AC_UY218_.jpg'
                      rating={4}
                      />
                 </div>

                 <div className='home__row'>
                 <Product
                      id='90829332' 
                     title='Samsung Galaxy S21 Ultra 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 108MP High Res | 128GB, Phantom Black (SM-G998UZKAXAA)'
                     price={1094.99}
                     image='https://m.media-amazon.com/images/I/61O45C5qASL._AC_UY218_.jpg'
                      rating={4}
                      />
                     
                 </div>
            </div>
        </div>
    )
}

export default Home
