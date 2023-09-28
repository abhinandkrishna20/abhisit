import React from 'react';
import '../style/Footer.css';
const Footer =()=>{
    return(
        <footer>
          <div className='footer-4'>

          
          <div className='footer-column'>
          <h3>Latest Post</h3>
        <ul>
          <li><a href="/">Post 1</a></li>
          <li><a href="/">Post 2</a></li>
          <li><a href="/">Post 3</a></li>
        </ul>
          </div>

          <div className="footer-column">
        <h3>Featured Post</h3>
        <ul>
          <li><a href="/">Featured Post 1</a></li>
          <li><a href="/">Featured Post 2</a></li>
          <li><a href="/">Featured Post 3</a></li>
        </ul>
      </div>
      <div className="footer-column ">
        <h3>Social Media</h3>
        <ul className="social-icons social">
          <li><a href="/"><i className="fa fa-facebook"></i> </a></li>
          <li><a href="/"><i className="fa fa-twitter"></i> </a></li>
          <li><a href="/"><i className="fa fa-instagram"></i> </a></li>
          <li><a href="/"><i className="fa fa-linkedin"></i> </a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>About Me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
          </div>
      <p>&copy; AbhiSha Design Studio 2023</p>
    </footer>
    );

}
export default Footer;

