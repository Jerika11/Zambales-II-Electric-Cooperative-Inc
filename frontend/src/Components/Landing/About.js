import React from 'react';
import AboutImg from '../../Assets/about.jpg';
import p1 from '../../Assets/partners-7-11.png';
import p2 from '../../Assets/partners-cebuana.png';
import p3 from '../../Assets/partners-ecpay.png';
import p4 from '../../Assets/partners-savemore.png';
import p5 from '../../Assets/partners-sm.png';
import p6 from '../../Assets/partners-gcash.png';
import {useNavigate} from 'react-router-dom';
import './about.css';

const Contact = () => {
  const navigate = useNavigate();
    function gotoAwards(event) {
        navigate('/awards');
    }
    function gotoBod(event) {
        navigate('/bod');
    }
    function gotoJob(event) {
      navigate('/jobopportunity');
  }
  function gotoEvents(event) {
    navigate('/events');
}
function gotoGallery(event) {
  navigate('/gallery');
}
  return (
    <>
    <div id="about"></div>
    <section  class="about">
      <div class="container">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left">
            {/* <img src={AboutImg} class="img-fluid" alt=""/> */}
            <div className='d-flex justify-content-end mb-3 me-3'><button className='btn btn-danger ms-3' onClick={gotoEvents}>View Events<i class='bx bx-right-arrow-alt'></i></button></div>
            <div className='container'>
              <div className='gallery--container'>
                <div className='img-box active'><h3>Ground Breaking Ceremony 2019</h3></div>
                <div className='img-box'><h3>Run For Light 2019</h3></div>
                <div className='img-box'><h3>Tree Planting 2019</h3></div>
                <div className='img-box'><h3>Outreach Program 2020</h3></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right">
            <h3>Zameco II Electric Cooperative INC.</h3>
            <p className="fst-italic">
              To provide effecient, reliable, safe and affordable power towards utmost customer satisfaction. - <code className='text-danger'>Vision</code>
            </p>
            <h3>Core Values</h3>
            <ul>
              <li><span style={{color:'#cc1616', fontWeight:'bold'}}>D</span> - edication</li>
              <li><span style={{color:'#cc1616', fontWeight:'bold'}}>E</span> - fficiency</li>
              <li><span style={{color:'#cc1616', fontWeight:'bold'}}>L</span> - eadership</li>
              <li><span style={{color:'#cc1616', fontWeight:'bold'}}>I</span> - nnovativeness</li>
              <li><span style={{color:'#cc1616', fontWeight:'bold'}}>G</span> - enerosity</li>
              <li><span style={{color:'#cc1616', fontWeight:'bold'}}>H</span> - ardwork</li>
              <li><span style={{color:'#cc1616', fontWeight:'bold'}}>T</span> - rustworthiness</li>
              <li><span style={{color:'#cc1616', fontWeight:'bold'}}>S</span> - olidarity</li> 
            </ul>

            <p>
              A highly competitive electric distributor unified by a well-motivated and innovative workforce by 2025 - <code className='fst-italic text-danger'>Mission</code>
            </p>
            {/* <button className='btn btn-danger' onClick={gotoGallery}>View Gallery<i class='bx bx-right-arrow-alt'></i></button> */}
          </div>
        </div>

      </div>
    </section>
    <section id="why-us" class="why-us">
      <div class="container">

        <div class="row">

          <div class="col-lg-4" data-aos="fade-up">
            <a onClick={gotoAwards}>
              <div class="box">
                <span>01</span>
                <h4>AWARDS</h4>
                <p>Zameco II Awards aim to acknowledge and boost the recognition of the skill and dedication of individuals within Zameco II.</p>
              </div>
            </a>
          </div>
        
          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="150">
            {/* <a href="#hero" onClick={gotoHome}> */}
            <a onClick={gotoBod}>
              <div class="box">
                <span>02</span>
                <h4>BOD</h4>
                <p>Our Board governs, setting policies to ensure the achievement of our company's objectives and goals effectively.</p>
              </div>
            </a>
          </div>
        
          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <a onClick={gotoJob} href='#'>
              <div class="box">
                <span>03</span>
                <h4>JOB OPPORTUNITIES</h4>
                <p>Find your next career move by exploring job openings at Zameco II for exciting opportunities and professional growth.</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>

    <section id="clients" class="clients">
      <div class="container" data-aos="zoom-in">

        <div class="row d-flex align-items-center">

          <div class="col-lg-2 col-md-4 col-6">
          <img src={p3} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={p2} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={p1} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={p4} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={p5} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src={p6} class="img-fluid" alt=""/>
          </div>

          

        </div>

      </div>
    </section>
    </>
    
  );
}

export default Contact;