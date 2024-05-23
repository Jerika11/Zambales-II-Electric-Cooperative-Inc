import React, {useEffect, useState} from 'react'
import './Landing.css'
import Homepage from './Home';
import About from './About';
import Information from './Information'
import Powerwatch from './Powerwatch';
import Announcement from './Announcement';
import Helpsupport from './Helpsupport'
import Rate from './Rate';
import Contact from './Contact';
import Footer from './Footer';
const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
        <Homepage />
        <About />
        <Information />
        <Powerwatch />
        <Announcement />
        <Helpsupport />
        <Contact />
        <Footer />
        <button data-aos="fade-up" data-aos-delay="200"
          id="scrollToTopBtn"
          className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
          style={{
            display: isVisible ? 'block' : 'none'
          }}
        >
          <i class='bx bx-up-arrow-alt fs-2'></i>
        </button>
    </div>
  )
}

export default Landing