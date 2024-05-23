import React from 'react';
import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Logo from '../../Assets/zamecoLOGO.png';

const Home = () => {
  // const currentDate = new Date().toLocaleDateString('en-US', {
  //   year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // });
  return (
    <>
    <Navbar />
    <section id="hero" class="hero d-flex align-items-center">
    <div class="container position-relative" data-aos="fade-up" data-aos-delay="500">
      <a href="index.html" class="logo2">
        <img src={Logo} alt="" class="img-fluid"/></a>
      <h2>“To provide efficient, reliable, safe and affordable power towards utmost customer satisfaction.”</h2>
      <a href="#contact" class="btn-get-started scrollto">Contact Us</a>
    </div>
  </section>
    </>
  );
}

export default Home;