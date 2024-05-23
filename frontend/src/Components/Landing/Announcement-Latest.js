import React, {useState, useEffect} from 'react';
import AnnouncementData from './../../Data/announcement.json';
import { Link } from 'react-router-dom';
import './about.css'

const Announcement = () => {
  const [filteredData, setFilteredData] = useState(AnnouncementData);
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    console.log("Filter changed to:", newFilter);
    setFilter(newFilter);
    if (newFilter === "all") {
      setFilteredData(AnnouncementData);
    } else {
      const filtered = AnnouncementData.filter(item => item.type === newFilter);
      console.log("Filtered data:", filtered);
      setFilteredData(filtered);
    }
  };
  
  
  
  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-title">
            <span>Announcement</span>
            <h2>Announcement</h2>
            <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li onClick={() => handleFilterChange("all")} className={filter === "all" ? "filter-active" : ""}>All</li>
                <li onClick={() => handleFilterChange("Power Interruption")} className={filter === "Power Interruption" ? "filter-active" : ""}>Power Interruption</li>
                <li onClick={() => handleFilterChange("Public Announcement")} className={filter === "Public Announcement" ? "filter-active" : ""}>Public Announcement</li>
              </ul>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay="150">
              {filteredData.map((item) => (
              <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item portfolio-item filter-card filter-${item.type}`} data-aos="fade-up" data-aos-delay="150">
                <div className="portfolio-wrap">
                  <img src={item.src} className="full--image" alt="" />
                  <Link to={`/fullDetails/${item.id}`} className="btn btn-primary">View Full Details</Link>
                  
                </div>
              </div>
            ))}
          

          </div>
        </div>
      </section>
    {/* <section id="portfolio" class="portfolio">
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
    </section>  */}
    </>
  );
}

export default Announcement;