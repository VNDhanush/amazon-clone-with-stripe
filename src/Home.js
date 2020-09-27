import React, { useState } from 'react'
import './Home.css';
import Product from './Product';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import carousel from 'react-material-ui-carousel';
// import Carousel from 'react-material-ui-carousel';


const photos = [
    {
        url: 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
    },
    {
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg'
    },{
        url: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg'
    }
]

function Home() {
    return (  
         <div className='home'>
            
            <div className='home__container'>
                {/* <Carousel 
                    className='home__image'
                    autoplay = 'true'
                    timer = '300'
                    animation = 'fade'
                    indicators = 'true' 
                    timeout = '5'
                    navButtonsAlwaysVisible = 'true'

                >
                    {
                        photos.map((photo) => (
                            <img
                            width='100%'
                            src={photo.url}
                            alt=''
                            />
                        ))
                    }
                </Carousel> */}
                    
                        
               <div className='home__row'>
                    <Product
                        id='12345'
                        title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
                        price={109099.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61ers6OzvUL._SL1024_.jpg"
                        rating={5}
                    />
                    <Product
                        id='19245'
                        title="Vivo X50 Pro (Alpha Grey, 8GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
                        price={49990.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61hvpixQp3L._SL1200_.jpg"
                        rating={4}
                    />
                    <Product
                        id='19245'
                        title="Dell Alienware M15 R2 15.6-inch FHD Laptop (9th Gen Core i9/16GB/1TB SSD/8GB NVIDIA 2080 Graphics)"
                        price={322499.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61FjdoHidqL._SL1000_.jpg"
                        am
                        rating={5}
                    />
                    <Product
                        id='19245'
                        title="Bose SoundSport Free, True Wireless Earbuds, (Sweatproof Bluetooth Headphones for Workouts
                        and Sports), Midnight Blue/Citron"
                        price={18990.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61Bx0jEMbnL._SL1500_.jpg"
                        rating={5}
                    />
               </div>
               
                <div className='home__row'>
                    <Product 
                        id='4903850'
                        title='The Bhagavad-Gita records a conversation between a young man and God (in the form of Krishna)'
                        image='https://5.imimg.com/data5/WS/XM/MY-43915840/srimad-bhagavad-gita-as-it-is-500x500.jpg'
                        price={19.99}
                        rating={5}
                    />
                    <Product 
                        id='123765646'
                        title='Think Like a Monk - Jay Shetty - Train Your Mind for Peace and Purpose Every Day  '
                        image='https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg'
                        price={10.25}
                        rating={5}
                    />
                    <Product 
                        id= '4563777'
                        title= 'The Vanishing Half: A Novel - Hardcover – June 2, 2020'
                        image = 'https://images-na.ssl-images-amazon.com/images/I/41Qi7YILYiL._SCLZZZZZZZ__.jpg'
                        price = {16.20}
                        rating = {5}
                    />

                </div>
                <div className="home_imageRow">
                    <img
                        className="home_bigImage"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/May/RiseIndia/UpdatedGW/V206289537_IN_HETV_RiseIndia_LATVFurniture_StorePage_PC_Header_1500x300.jpg"
                        alt=""
                    />
                </div>
                <div className='home__row'>
                    <Product 
                        id='123765646'
                        title='Flowing striped viscose shirt. Straight fit model with collar and short sleeves. Button-up front'
                        image='https://i.pinimg.com/564x/53/4b/69/534b692fab22bffc6d94220a38cc4cae.jpg'
                        price={43.25}
                        rating={3}
                    />
                    <Product 
                        id='4736873645'
                        title='DARO-FL- SOLID TROUSER- ASH'
                        image='https://cdn.shopify.com/s/files/1/0752/6435/products/IMG_0189_8ec779fb-c016-4b15-87d9-e98977108874_1000x.jpg?v=1598778439'
                        price={62.05}
                        rating={2}
                    />
                    <Product 
                        id = '1436577'
                        title= 'The North Face McMurdo Down Parka Jacket Big Kids '
                        image= 'https://images-na.ssl-images-amazon.com/images/I/81k4wLyu8GL._AC_UX569_.jpg'
                        price = {325.00}
                        rating= {4}
                    />
                    <Product 
                        id='346543234'
                        title='Waterproof White Sneakers - Geox Amphibiox'
                        image='data:image/jpeg;base64,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'
                        price={21.25}
                        rating={2}
                    />
                    
                </div>
                <div className='home__row'>
                    <Product
                        id='456789'
                        title="Samsung LC49RG905511XEN 49' Curved LED Gaming Monitor - Full HD, VA Panel with VGA, 
                        HDMI, Display, Audio in, Heaphone Ports - LC27F591FDWXXL (Silver)"
                        price={10990}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={5}
                    />
                    <Product 
                        id='676874567'
                        title='Samsung has come to CES 2018 with an enormous 4K TV it’s calling The Wall'
                        image='https://cdn.vox-cdn.com/thumbor/eWHaKf2AKYUye9J-tQzk3iGq6w4=/0x0:5449x3633/1200x800/filters:focal(2290x1382:3160x2252)/cdn.vox-cdn.com/uploads/chorus_image/image/58240739/DSCF2717.0.jpg'
                        price={100.75}
                        rating={4}
                    />
                </div>
            </div>
            

        </div>
    )
}

export default Home
