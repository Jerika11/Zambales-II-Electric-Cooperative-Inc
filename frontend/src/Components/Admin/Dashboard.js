import React, {useState, useEffect, useRef} from 'react';
import Create from './Announcement/Create';
import Sidebar from './Sidebar';
import {useNavigate} from 'react-router-dom';
import Chart from 'chart.js/auto';
import announcementsData  from './../../Data/announcement_data.json';
import rateData from './../../Data/rate.json';
import Logo from './../../Assets/zamecoLOGO.png';
import axios from 'axios'

// End of Announcement
const Dashboard = () => {
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  
const [announcementsData, setAnnouncementsData] = useState([]);

useEffect(() => {
  axios.get('http://localhost:8080/')
    .then(res => {
      console.log('Fetched data:', res.data); // Debug log
      setAnnouncementsData(res.data);
    })
    .catch(err => console.log(err));
}, []);

  const [filteredData, setFilteredData] = useState([]);
  const [filterDate, setFilterDate] = useState('');

  const sortedAnnouncements = announcementsData.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });
  const limitedAnnouncements = sortedAnnouncements.slice(0, 3);

  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const labels = [];
    const data = [];

    (filteredData.length > 0 ? filteredData : rateData.Rate).forEach((item) => {
      const [month, year] = item.datePosted.split(', ');
      labels.push(`${month}/${year}`);
      const totalGenerationCost = parseFloat(item.totalgenerationcostmonth.replace(/,/g, ''));
      data.push(totalGenerationCost);
    });

    if (chartContainer.current) {
      chartInstance.current = new Chart(chartContainer.current, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'Total Generation Cost',
            data: data,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
            fill: false
          }]
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: 'Date'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Total Generation Cost'
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [filteredData]);

  const handleFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  const handleFilterClick = () => {
    const filtered = rateData.Rate.filter(item => item.datePosted === filterDate);
    setFilteredData(filtered);

    document.getElementById("dropdownMenuButton").innerText = filterDate !== '' ? `Filtered by ${filterDate}` : 'Filter by Date';
  };

  // Get unique datePosted values for dropdown options
  const uniqueDates = [...new Set(rateData.Rate.map(item => item.datePosted))];


  function gotoEvents(event) {
    navigate('/admin/Events');
  }
  const formatTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const suffix = hours >= 12 ? 'PM' : 'AM';
    const adjustedHours = hours % 12 || 12; // Convert 0 to 12 for AM/PM format
    return `${adjustedHours}:${minutes.toString().padStart(2, '0')} ${suffix}`;
  };

  // Function to format date in YYYY-MM-DD format
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  // Filter announcements for today
  const todaysAnnouncements = announcementsData.filter(announcement =>
    formatDate(announcement.date) === formatDate(new Date())
  );
  return (
    <>
    <Sidebar/>
    <div className='container-fluid dashboard--container page-content'>
        <h3 className='text-danger text-center'>DASHBOARD</h3>
        {/* <p className='dashboard--date mt-3'>{currentDate}</p> */}
        <div className='row'>
          <div className='col-md-8'>
            <div className='card dashboard--card'>
              <div className='row'>
                <div className='col-md-12'>
                  <p className=''>Todays Announcements</p>
                    <div className='row' data-aos="fade-up">
                      {todaysAnnouncements.map((announcement, index) => (
                        <div key={index} className='col-md-4'>
                          <div 
                            style={{ 
                              backgroundColor: announcement.company === 'Zameco' ? '#e03444' : 
                                              (announcement.company === 'NGCP' ? '#208454' : '') 
                            }} 
                            className="announcement---card w-100 text-light"
                          >
                            <h6 className='mt-2'>Date: <br />{announcement.date}</h6>
                            <h6 className='mt-2'><strong>Duration:</strong>{" "}
                          {announcement.duration % 1 !== 0
                            ? parseFloat(announcement.duration).toFixed(2)
                            : parseInt(announcement.duration)}{" "}
                          Hour/s</h6>
                            <h6 className='mt-2'><strong>Affected Areas:</strong><br /> {announcement.affected_area}</h6>
                            <h6 className='mt-2'><strong>Purpose:</strong><br /> {announcement.purpose}</h6>
                            <h6 className='mt-2'><strong>Time:</strong><br /> From: {formatTime(announcement.from_time)} To: {formatTime(announcement.to_time)}</h6>
                            <h6 className='mt-2'><strong>Status:</strong> {announcement.status}</h6>
                          </div>
                        </div>
                      ))}
                      {/* <div className='d-flex justify-content-end mt-2'  data-aos="fade-up"><button className='btn btn-danger' onClick={gotoEvents}>View More</button></div> */}
                    </div>
                  
                  
                </div>
                    <div className='col-md-12 mt-3' data-aos="fade-up">
                      <div className='d-flex justify-content-between'>
                        <p className=' mt-3'>Rate Graph</p>
                        <div className="dropdown d-flex">
                          <button className="btn btn-filter dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter by Date
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {uniqueDates.map((date, index) => (
                              <button className="dropdown-item" key={index} onClick={() => setFilterDate(date)}>{date}</button>
                            ))}
                          </div>
                          <button className='btn btn-danger' onClick={handleFilterClick}>Apply Filter</button>
                        </div>
                      </div>
                      <canvas ref={chartContainer} width="400" height="200"></canvas>
                    </div>
              </div>
            </div>
          </div>
          <div className='col-md-4' data-aos="fade-up">
            <div className='card dashboard--card-1 w-100'>
              {/* <img src={Logo} alt='logo'/> */}
              <div className='row mt-3'>
                <div className='col-md-12'>
                  <div className='card card--date p-3 mb-3'>
                    <h3 className='text-center text-danger'>Hi! Jerika</h3>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='card card--date'>
                    <p className='header--text mt-3'>Date</p>
                    <p className='dashboard--date'>{currentDate}</p>
                  </div>
                </div>
                <div className='col-md-12 mt-3'>
                  <div className='card card--visit'>
                    {/* <svg className=" mt-3" style={{width: '40px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg> */}
                    <svg className='mt-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#d33242" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/></svg>
                    <p className='mt-3'>Total Visit:</p>
                    <p>20,675</p>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='card card--links mt-3 p-3'>
                    <div className="links-tray">
                      <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                      <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                      <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                      <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                      <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                  </div>
                </div>
                <img className='mt-3' src={Logo} alt='logo'/>
              </div>
            </div>
          </div>

          <div className='row' data-aos="fade-up">
            <div className='col-md-12'>
              <p className='header--text mt-3 text-center'>Rate Table</p>
              <div className='table-responsive'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Source</th>
                      <th>KWh Purchase</th>
                      <th>Basic Generation Cost</th>
                      <th>Other Cost Adjustment</th>
                      <th>Discounts</th>
                      <th>Total Generation Cost Month</th>
                      <th>Other Generation Adjustment</th>
                      <th>Average Generation Cost</th>
                      <th>Date Posted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rateData.Rate.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.source}</td>
                        <td>{item.kwhpurchase}</td>
                        <td>{item.basicgenerationcost}</td>
                        <td>{item.othercostadjustment}</td>
                        <td>{item.discounts}</td>
                        <td>{item.totalgenerationcostmonth}</td>
                        <td>{item.othergenerationadjustment}</td>
                        <td>{item.averagegenerationcost}</td>
                        <td>{item.datePosted}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>    
            </div>
          </div>
        </div>
    </div>
    </>
    
  )
}

export default Dashboard