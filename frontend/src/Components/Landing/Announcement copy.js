import React from 'react';
import Img1 from '../../Assets/portfolio/portfolio-1.jpg';
import Img2 from '../../Assets/portfolio/portfolio-3.jpg';
import Img3 from '../../Assets/portfolio/portfolio-6.jpg';
import Img4 from '../../Assets/portfolio/portfolio-7.jpg';

const Announcement = () => {
  return (
    <>
    <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title">
          <span>Announcement</span>
          <h2>Announcement</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div class="row" data-aos="fade-up">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">Power Interruption</li>
              <li data-filter=".filter-card">Public Announcement</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="150">
          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={Img1} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <a href={Img1} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>


          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={Img2} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <a href={Img2} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={Img3} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <a href={Img3} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={Img4} class="img-fluid" alt="" />
            <div class="portfolio-info">
              <a href={Img4} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>
      </div>
      </div>
    </section> 
    </>
  );
}

export default Announcement;