// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../Assets/zamecoLOGO.png';
import {useNavigate} from 'react-router-dom';
 
const Navibar = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Logic to handle header fixed top on scroll
      // Logic to show/hide back to top button
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };
  const navigate = useNavigate();

  const gotoLanding = (to) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Adjust the timeout if needed
  };

  function gotoRate(event) {
    navigate('/rate');
  }

  return (
<>
  <section id="topbar" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope-fill"></i><a href="mailto:contact@example.com">zameco2@zameco2.com</a>
        <i class="bi bi-phone-fill phone-icon"></i> +63 39 938 9794
      </div>
      <div class="social-links d-none d-md-block">
        <p className='mt-3'>{currentDate}</p>
      </div>
    </div>
  </section>

  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo">
        <img src={Logo} alt="" className="img-fluid" />
      </a>
      <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li><Link className="nav-link" onClick={() => gotoLanding('hero')} to="hero" smooth={true} duration={500}>Home</Link></li>
            <li><Link className="nav-link" onClick={() => gotoLanding('about')} to="about" smooth={true} duration={500}>About</Link></li>
            <li><Link className="nav-link" onClick={() => gotoLanding('services')} to="services" smooth={true} duration={500}>Information</Link></li>
            <li><Link className="nav-link" onClick={() => gotoLanding('cta')} to="cta" smooth={true} duration={500}>PowerWatch</Link></li>
            <li><Link className="nav-link" onClick={() => gotoLanding('portfolio')} to="portfolio" smooth={true} duration={500}>Announcement</Link></li>
            <li><Link className="nav-link" onClick={gotoRate} smooth={true} duration={500}>Rate</Link></li>
            <li><Link className="nav-link" onClick={() => gotoLanding('pricing')} to="pricing" smooth={true} duration={500}>Help & Support</Link></li>
            
          </ul>
          <i className="bi bi-list mobile-nav-toggle" onClick={toggleMobileNav}></i>
        </nav>
    </div>
  </header>
</>
  );
}

export default Navibar;