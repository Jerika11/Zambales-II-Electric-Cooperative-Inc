import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  function gotoEc(event) {
    navigate('/electronicconnection');
}
function gotoSc(event) {
  navigate('/servicecenter');
}
function gotoDf(event) {
  navigate('/downloadform');
}
  return (
  <>
   <section id="pricing" class="pricing">
      <div class="container">

        <div class="section-title">
          <span>Help & Support</span>
          <h2>Help & Support</h2>
          {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay="150">
            <div class="box">
              <h3>Electronic Connections</h3>
              {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p> */}
              <div class="btn-wrap">
                <a onClick={gotoEc} class="btn-buy">Open</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-4 mt-md-0" data-aos="zoom-in">
            <div class="box featured">
              <h3>Service Center</h3>
              {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p> */}
              <div class="btn-wrap">
                <a onClick={gotoSc} class="btn-buy">Open</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="150">
            <div class="box">
              <h3>Download Forms</h3>
              {/* <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p> */}
              <div class="btn-wrap">
                <a onClick={gotoDf} class="btn-buy">Open</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  </>
  );
}

export default Contact;