import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  function gotoSoa(event) {
      navigate('/soa');
  }
  function gotoSca(event) {
      navigate('/seniorcitizenact');
  }
  function gotoMagna(event) {
    navigate('/magnacarta');
}
  return (
    <>
    <section id="services" class="services">
    <div class="container">

      <div class="section-title">
        <span>Information</span>
        <h2>Information</h2>
        <p>Discover supplementary information for a more comprehensive understanding</p>
      </div>
    
        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <a onClick={gotoSoa}>
              <div class="icon-box">
                <div class="icon"><i class="bx bx-receipt"></i></div>
                <h4>Understanding SOA</h4>
                <p>View the detailed breakdown of your Zameco II statement of account.</p>
              </div>
            </a>
          </div>
    
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="150">
            <a onClick={gotoSca}>
              <div class="icon-box">
                <div class="icon"><i class="bx bx-file-blank"></i></div>
                <h4>Senior Citizen's Act</h4>
                <p>Discover the Senior Citizens Act, advocating for the rights and empowerment of seniors.</p>
              </div>
            </a>
          </div>
    
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <a onClick={gotoMagna}>
              <div class="icon-box">
                <div class="icon"><i class="bx bx-file"></i></div>
                <h4>Magna Carta</h4>
                <p>Ensures the protection of individual rights and freedoms.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Contact;