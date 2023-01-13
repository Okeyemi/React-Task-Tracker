import React from "react";
import {
    // FaYoutube,
    // FaFacebook,
    FaTwitter,
    FaFacebookSquare,
    FaLinkedinIn,
    FaInstagram
  } from 'react-icons/fa'
export default function SocialFollow() {
  return (
    <div class="social-container">
      <h3>Get In Touch </h3>
      <a href="https://www.twitter.com/okeyemitunde1"
        className="twitter social">
        {/* < faYoutube/> */}
        <FaTwitter style={{
         cursor: 'pointer' }} />
        </a>
      <a href="https://www.facebook.com//"
        className="facebook social">
        {/* <react-icons icon={faFacebook} size="2x" /> */}
        <FaInstagram style={{ 
        cursor: 'pointer' }} />
      </a>
      <a href="https://www.linkedin.com/in/okeyemi-tunde" className="twitter social">
        {/* <react-icons icon={faTwitter} size="2x" /> */}
        <FaFacebookSquare style={{  
         cursor: 'pointer', fontSize: '7x' }} />
      </a>
      <a href="https://www.instagram.com/okeyemitunde"
        className="instagram social">
        {/* <react-icons icon={faInstagram} size="2x" /> */}
        <FaLinkedinIn style={{  
          cursor: 'pointer' }} />
      </a>
    </div>
  );
}