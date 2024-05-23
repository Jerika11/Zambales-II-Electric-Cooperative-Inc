import React from 'react';
import ImgMap from '../../Assets/map.jpg';

const Announcement = () => {
  return (
    <>
    <footer id="footer">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="footer-info">
                            <h3>Zameco II</h3>
                            <p>
                                2206 Castillejos, <br/>
                                Philippines<br/><br/>
                                <strong>Phone:</strong> +63 39 938 9794<br/>
                                <strong>Email:</strong> zameco2@zameco2.com<br/>
                            </p>
                            <div class="social-links mt-3">
                                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="https://energyusecalculator.com" target="_blank" rel="noopener noreferrer">Energy Calculator</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="https://www.doe.gov.ph/" target="_blank" rel="noopener noreferrer">Department of Energy</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="https://www.ngcp.ph/" target="_blank" rel="noopener noreferrer">National Grid Corporation Of The Philippines(NGCP)</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="https://www.nea.gov.ph/ao39/" target="_blank" rel="noopener noreferrer">National Electrification Administartion</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="https://www.napocor.gov.ph/" target="_blank" rel="noopener noreferrer">National Power Corporation (NPC)</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="https://www.transco.ph/" target="_blank" rel="noopener noreferrer">National Transmission Corporation</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="https://www.erc.gov.ph/" target="_blank" rel="noopener noreferrer">Energy Regulatory Commission</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-6 footer-newsletter">
                        <h4>ZAMECO II Franchise Area</h4>
                        <img src={ImgMap} alt="Newsletter Photo" style={{height: '300px'}}/>
                    </div>

                </div>
            </div>
        </div>

        <div class="container">
            <div class="copyright">
                Copyright &copy; <strong></strong>. All Rights Reserved
            </div>
        </div>
  </footer>
    </>
  );
}

export default Announcement;