import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  function gotoPowerwatch(event) {
    navigate('/powerwatch');
}
  return (
    <>
    <section id="cta" class="cta">
      <div class="container" data-aos="zoom-in">

        <div class="text-center">
          <h3>POWERWATCH</h3>
          <p> The Official Newsletter of Zambales II Electric Cooperative, Inc.</p>
          <p>ELECTRICOOPNEWS</p>
          <p>ZAMECO II Powerwatch</p>
          <a class="cta-btn" onClick={gotoPowerwatch}>VIEW</a>
        </div>

      </div>
    </section>
    </>
  );
}

export default Contact;