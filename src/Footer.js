import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
import { Button } from '@material-ui/core';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__link'>
                <a href='#' className='footer__backToTop'>Back To Top</a>
            </div>
            
            <div className='footer__container'>
                <div className='footer__containerColumn'>
                    <h3 className='footer__containerHeading'>Get To Know Us</h3>
                    <p>Carrers</p>
                    <p>Blog</p>
                    <p>About Amazon</p>
                    <p>Investor Relations</p>
                    <p>Amazon Devices</p>
                    <p>Amazon Tours</p>
                </div>
                <div className='footer__containerColumn'>
                    <h3 className='footer__containerHeading'>Make Money With Us</h3>
                    <p>Sell Products on Amazon</p>
                    <p>Sell Apps on Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Advertis eyour Products</p>
                    <p>Self Publish With us</p>
                    <p>Host an Amazon Web</p>
                </div>
                <div className='footer__containerColumn'>
                    <h3 className='footer__containerHeading'>Amazon Payment Products</h3>
                    <p>Amazon Business card</p>
                    <p>Shop with points</p>
                    <p>Reload your Business</p>
                    <p>Amazon Currency Coverter</p>
                    <p>Amazon Prime</p>
                </div>
                <div className='footer__containerColumn'>
                    <h3 className='footer__containerHeading'>Let Us Help You</h3>
                    <p>Amazon and COVID-19</p>
                    <p>Your Account</p>
                    <p>Your Orders</p>
                    <p>Shipping rates & Policies</p>
                    <p>Amazon Assistant</p>
                    <p>Help</p>
                </div>
            </div>
            <div className='footer__containerFooter'>
                
                <Link to='/'>
                    <img 
                        className='header__logo'
                        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                        alt=''
                    />
                </Link>
                <div className='footer__buttons'>
                    <Button variant='outlined'><p>English</p></Button>
                    <Button variant='outlined'><p>$ USD - U.S.Dollar</p></Button>
                    <Button variant='outlined'><p>United States</p></Button>
                </div>
                
            </div>
        </div>
    )
}

export default Footer
