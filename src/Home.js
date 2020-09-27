import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Best seller The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                        price={600.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={3}
                    />
                    <Product
                        id="49538094"
                        title='OnePlus 7T (Glacier Blue, 8GB RAM, Fluid AMOLED Display, 256GB Storage, 3800mAH Battery)'
                        price={37999.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71ncRs6HzyL._SX679_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="49538063"
                        title='ASUS ROG Strix G15 (10th Gen i7-10750H, 16GB RAM, 1TB SSD, 6GB NVIDIA GTX 1660 Ti Graphics, 15.6” FHD 144Hz Display, RGB Keyboard, WiFi 6, Windows 10, Mouse & Pad) Electro Punk - G512LU-HN195T '
                        price={123199.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/31Nb4xzgY-L.jpg"
                    />
                    <Product
                        id="49538063"
                        title='ASUS ROG Strix GL10CS Intel Core i5-9400F 9th Gen Gaming Desktop (8GB RAM/1TB HDD/Windows 10/2GB NVIDIA GeForce GTX 1050 Graphics/Iron Gray), GL10CS-IN063T'
                        price={52990.00}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71JEcduJrXL._SX425_.jpg"
                    />
                    <Product
                        id="49698063"
                        title='NVIDIA Quadro RTX 6000 24GB GDDR6 Graphic Card (VCQRTX6000-PB)'
                        price={464599.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71N6oxd1YmL._SY355_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="39698063"
                        title='WearIndia Super Hero Avenger Printed Unisex Pullover Cotton Hoodies Sweatshirt for Men and Women/Printed Hoodie/Graphic Printed Hoodie/Hoodie for Men & Women/Warm Hoodie/Unisex Hoodie with Free Face Mask '
                        price={799.00}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61CULYZB8PL._UY550_.jpg"
                    />
                    <Product
                        id="25698063"
                        title='Sehaz Artworks OurMemo Scrapbook Photo Albums for 4x6 Photos for Baby Birthdays, Couples Husband Wife (26 cm X 16 cm X 4 cm, Brown) '
                        price={399.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81vwp4S73JL._SY450_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="25699763"
                        title='Antec A400 RGB CPU Cooler Fan Compatible with: Intel LGA 775/1150 / 1151/1155 / 1156/1366 / 2011/2066, AMD FM2 / FM1 / AM3+ / AM3 / AM2 + / AM2 / AM4'
                        price={2551.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/71bxOtvdpKL._SX425_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={14400}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX679_.jpg"
                    />
                </div>
            </div>

        </div>
    );
}

export default Home;