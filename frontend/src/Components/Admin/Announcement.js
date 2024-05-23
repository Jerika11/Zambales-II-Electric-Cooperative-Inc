import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './adminstyle.css';
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Announcement = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // For Viewing
  const [announcementsData, setAnnouncementsData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/')
      .then(res => {
        console.log('Fetched data:', res.data); // Debug log
        setAnnouncementsData(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [duration, setDuration] = useState('');

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
    const formattedDate = formatDate(date);
    const announcementsForDate = announcementsData.filter((announcement) => announcement.date === formattedDate);
    setFilteredAnnouncements(announcementsForDate);
  };
  
  const handleUpdateClick = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  useEffect(() => {
    if (fromTime && toTime) {
      const from = new Date(`01/01/2024 ${fromTime}`);
      const to = new Date(`01/01/2024 ${toTime}`);
      const diffInMilliseconds = to - from;
      const hours = diffInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
      const formattedDuration = Number(hours.toFixed(2)); // Format duration to 2 decimal places
      setDuration(formattedDuration);
    }
  }, [fromTime, toTime]);
  
    

  // Function to format date as yyyy-mm-dd
  const formatDate = (date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  // Function to format date as yyyy-mm-dd for input field
  const formatDateForInput = (date) => {
    return date ? `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}` : '';
  };


const [deleteId, setDeleteId] = useState(null);

const handleDelete = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:8080/delete/${id}`);
    console.log("Data Deleted successfully:", response.data);
    location.reload();
    // Add any additional logic here, such as updating the state to remove the deleted item from the UI
  } catch (error) {
    console.error("An error occurred while deleting data:", error.response ? error.response.data : error.message);
  }
};


const tileContent = ({ date }) => {
  const formattedDate = formatDate(date);
  console.log('Formatted date:', formattedDate); // Debug log
  const announcementsForDate = announcementsData.filter((announcement) => announcement.date === formattedDate);

  if (announcementsForDate.length > 0) {
    console.log(`Announcements for ${formattedDate}:`, announcementsForDate); // Debug log

    return (
      <div className="announcement-dots d-flex justify-content-center">
        {announcementsForDate.map((announcement, index) => {
          const backgroundColor = announcement.company === 'NGCP' ? 'green' : 'red';
          console.log(`Announcement from: ${announcement.company}, Color: ${backgroundColor}`); // Debug log

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
    const adjustedHours = hours % 12 || 12; // Convert 0 to 12 for AM/PM format
    return `${adjustedHours}:${minutes.toString().padStart(2, '0')} ${suffix}`;
  };
  function gotoCreate(){
    navigate('/admin/Announcement/Create');
  }
  return (
    <>
      <Sidebar />
      <div className='container-fluid page-content announcement--container'>
        <div className="d-flex justify-content-center">
          <h3 className='text-danger fw-bold'>ANNOUNCEMENT</h3>
        </div>
        <div className='legend-tray d-flex align-items-center'>
          <span className='legend-2'></span> <span className='ms-3'>NGCP</span>
          <span className='legend-1 ms-3'></span> <span className='ms-3'>ZAMECO</span>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Calendar
              onChange={handleDateClick}
              value={selectedDate}
              className="custom-calendar"
              tileContent={tileContent}
            />
          </div>
          
          {filteredAnnouncements.length > 0 ? (
            <div className='mt-3'>
              <div className='d-flex justify-content-between align-items-center'>
                <h3><b>Announcement Details: </b></h3>
                <Link className="btn btn-danger mt-3 p-2 mb-3" style={{width: '200px'}} to={`/admin/Announcement/Create?date=${selectedDate.toLocaleDateString()}`}>Add Announcement</Link>
              </div>
              {filteredAnnouncements.map((announcement, index) => (
                <div key={index} className='card mt-3 job--card mb-3'>
                  <div className='card-header d-flex justify-content-end'>
                    
                    <Link className="btn btn-danger p-0 me-2" style={{width: '40px', height: '30px'}} to={`/admin/Announcement/Update/${announcement.announce_id}`}><i class='bx bxs-edit-alt'></i></Link>
                    <button className="btn btn-danger p-0 " style={{width: '40px', height: '30px'}} data-bs-toggle="modal"
                      data-bs-target="#deleteModal"
                      onClick={() => setDeleteId(announcement.announce_id)}>
                        <i class='bx bxs-trash-alt' ></i>
                    </button>
                    {/* <button className="btn btn-danger p-0 " style={{width: '40px', height: '30px'}} onClick={() => handleDelete(announcement.announce_id)}><i class='bx bxs-trash-alt' ></i></button> */}
                    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Do you want to Remove this Announcement?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => { handleDelete(deleteId); document.querySelector('#deleteModal .btn-close').click(); }}> Remove</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 


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
              ))}
              </div>
              ) : (
                <div className='mt-3 text-center'>
                  {selectedDate && (
                    <p>No added Announcement for {selectedDate.toLocaleDateString()}.</p>
                  )}
                  {/* Show different content if today's date is selected */}
                  {selectedDate && new Date(selectedDate).toLocaleDateString() === new Date().toLocaleDateString() && (
                    <div>
                      {/* Use Link component to navigate to another page */}
                      <Link className="btn btn-danger" to={`/admin/Announcement/Create?date=${selectedDate.toLocaleDateString()}`}>Add Announcement</Link>
                    </div>
                  )}
                  {/* Show regular content if it's not today */}
                  {selectedDate && new Date(selectedDate) > new Date() && (
                    <div>
                      {/* Use Link component to navigate to another page */}
                      <Link className="btn btn-danger" to={`/admin/Announcement/Create?date=${selectedDate.toLocaleDateString()}`}>Add Announcement</Link>
                    </div>
                  )}
                </div>
              )}
        </div>
      </div>

      
    </>
  );
};

export default Announcement;
