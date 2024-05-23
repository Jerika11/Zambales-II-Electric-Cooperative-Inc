import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const AnnouncementPage = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [announcementsData, setAnnouncementsData] = useState([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 1;

  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(res => {
        setAnnouncementsData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const formattedDate = formatDate(date);
    const announcementsForDate = announcementsData.filter((announcement) => announcement.date === formattedDate);
    setFilteredAnnouncements(announcementsForDate);
    setCurrentPage(1); // Reset to the first page whenever a new date is selected
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  const tileContent = ({ date }) => {
    const formattedDate = formatDate(date);
    const announcementsForDate = announcementsData.filter((announcement) => announcement.date === formattedDate);

    if (announcementsForDate.length > 0) {
      return (
        <div className="announcement-dots d-flex justify-content-center">
          {announcementsForDate.map((announcement, index) => {
            const backgroundColor = announcement.company === 'NGCP' ? 'green' : 'red';
            return (
              <div
                key={index}
                style={{ backgroundColor, width: '10px', height: '10px', borderRadius: '50%', margin: '2px' }}
                className="announcement-dot"
              ></div>
            );
          })}
        </div>
      );
    }
    return null;
  };

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const suffix = hours >= 12 ? 'PM' : 'AM';
    const adjustedHours = hours % 12 || 12;
    return `${adjustedHours}:${minutes.toString().padStart(2, '0')} ${suffix}`;
  };

  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = filteredAnnouncements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredAnnouncements.length / announcementsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="announcement-page-container" id='portfolio'>
      <div className="section-title">
        <span>Announcement</span>
        <h2>Announcement</h2>
        <p>Track power interruptions with red dots from Zameco II Electric Cooperative Inc. and green dots from National Grid Corporation of the Philippines on the calendar.</p>
      </div>
      <div className='container-fluid announcement---container'>
        <div className='legend-tray d-flex align-items-center'>
          <span className='legend-1'></span> <span className='ms-3'>Zameco II Electric Cooperative Inc.</span>
          <span className='legend-2 ms-3'></span> <span className='ms-3'>National Grid Corporation of the Philippines </span> 
        </div>

        <div className="row">
          <div className="col-md-6">
            <Calendar
              onChange={handleDateClick}
              value={selectedDate}
              className="custom-calendar"
              tileContent={tileContent}
            />
          </div>

          {filteredAnnouncements.length > 0 ? (
            <div className='col-md-6'>
              <div className='d-flex justify-content-between align-items-center'>
                <h3><b>Announcement Details: </b></h3>
              </div>
              {currentAnnouncements.map((announcement, index) => (
                <div key={index} style={{ backgroundColor: announcement.company === 'Zameco' ? '#e03444' :  (announcement.company === 'NGCP' ? '#208454' : '')  }} className='card mt-3 job--card mb-3 text-light'>
                  <div className='card-header d-flex justify-content-end'>
                    <div className='card-body p-3'>
                      <div className='row'>
                        <div className='col-md-6'>
                          <p><strong>Announcement From:</strong> {announcement.company}</p>
                          <p><strong>Date:</strong> {announcement.date}</p>
                          <p><strong>Time:</strong> From: {formatTime(announcement.from_time)} To: {formatTime(announcement.to_time)}</p>
                          <p>
                            <strong>Duration:</strong>{" "}
                            {announcement.duration % 1 !== 0
                              ? parseFloat(announcement.duration).toFixed(2)
                              : parseInt(announcement.duration)}{" "}
                            Hour/s
                          </p>
                        </div>
                        <div className='col-md-6'>
                          <p><strong>Affected Areas:</strong> {announcement.affected_area}</p>
                          <p><strong>Purpose:</strong> {announcement.purpose}</p>
                          <p><strong>Status:</strong> {announcement.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <nav className='d-flex justify-content-center'>
                <ul className='pagination'>
                  {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                      <a onClick={(e) => { e.preventDefault(); paginate(number); }} href='!#' className={`page-link ${number === currentPage ? 'bg-success' : ''}`}>
                        {number}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ) : (
            <p>No announcements for the selected date.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPage;
