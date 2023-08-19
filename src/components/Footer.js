import React from 'react'
import './Footer.scss'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div>
    <footer class="padding_4x">
  <div class="flex">
    <section class="flex-content padding_1x">
      <h3>Information</h3>
      <a href="#">ABOUT US</a>
      <a href="#">DELIVERY INFORMATION</a>
      <a href="#">PRIVACY POLICY</a>
      <a href="#">TERMS & CONDITIONS</a>
    </section>
    <section class="flex-content padding_1x">
      <h3>Customer Service</h3>
      <a href="#">CONTACT US</a>
      <a href="#">RETURN</a>
      <a href="#">SITE MAPS</a>
      <a href="#">Terms of Service</a>
    </section>
    <section class="flex-content padding_1x">
      <h3>Extras</h3>
      <a href="#">BRANDS</a>
      <a href="#">GIFT VOUCHERS</a>
      <a href="#">AFFILIATE</a>
      <a href="#">SPECIALS</a>
    </section>
    <section class="flex-content padding_1x">
      <h3>My Account</h3>
      <a href="#">MY ACCOUNT</a>
      <a href="#">ORDER HISTORY</a>
      <a href="#">WISH LIST</a>
      <a href="#">NEWSLETTER</a>
    </section>
    <section class="flex-content padding_1x">
      <h3>Newsletter</h3>
      <fieldset class="fixed_flex">
        <input type="email" name="newsletter" placeholder="Your Email Address"/>
        <button class="btn btn_2">Subscribe</button>
      </fieldset>
      <div className='contact'>
      <h3>Contact Us</h3>
      <div className='flex-content padding_1x'>
      <a href="#"><LocationOnOutlinedIcon></LocationOnOutlinedIcon> Marmora Road,Glasgow D04 89GR</a>
      <a href="#"><PhoneOutlinedIcon></PhoneOutlinedIcon>800-2345-7895</a>
      <a href="#"><EmailOutlinedIcon></EmailOutlinedIcon>admin@tgm.com</a>
      </div>
      </div>
    </section>
  </div>
  <div class="flex">
  <div className='flex-content padding_1x'>
    <a href="#"><FacebookTwoToneIcon></FacebookTwoToneIcon></a>
    <a href="#"><GoogleIcon></GoogleIcon></a>
    <a href="#"><TwitterIcon></TwitterIcon></a>
    </div>
  </div>
</footer>
<div className='foot'>
<h1>Powered By OpenCart Stationery online store © 2023</h1>
</div>
</div>
  )
}

export default Footer;
