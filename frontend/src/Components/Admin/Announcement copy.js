import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import announcements from './../../Data/announcement.json';
const Announcement = () => {
    const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(3);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedTitle, setSelectedTitle] = useState(''); // State to hold selected title


 // Update filtered events when searchValue changes
 useEffect(() => {
  const filtered = announcements?.filter(event =>
    event.type.toLowerCase().includes(searchValue.toLowerCase())
  );
    setFilteredEvents(filtered);
  }, [searchValue]);

  // Update pagination when filteredEvents or eventsPerPage changes
  useEffect(() => {
    setCurrentPage(1); // Reset to first page when filteredEvents change
  }, [filteredEvents, eventsPerPage]);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  
  const uniqueTitles = Array.from(new Set(announcements?.map(event => event.type)));

  // Function to handle change in dropdown selection
  const handleTitleChange = (e) => {
    setSelectedTitle(e.target.value);
    setSearchValue(e.target.value); // Update searchValue to trigger filtering
  };

    const [year, setYear] = useState('');
  
    // Function to handle change in input
    const handleInputChange = (e) => {
      setYear(e.target.value);
    };

    function gotoCal(event) {
        navigate('/admin/Calendar');
    }

     const [announcementType, setAnnouncementType] = useState('Power Interruption');

  const handleTypeChange = (e) => {
    setAnnouncementType(e.target.value);
  }
  return (
    <>
    <Sidebar/>
    <div className='container-fluid page-content announcement--container'>
        <div class="d-flex justify-content-center">
            <h3 className='text-danger fw-bold'>ANNOUNCEMENT</h3>
            
        </div>

        <div className='d-flex justify-content-center mt-3'>
          <input className='form-control  w-50 text-center' placeholder='Search...' value={searchValue} onChange={handleSearchInputChange}/>
          {/* Dropdown menu for titles */}
        </div>
          <div className='d-flex justify-content-center mt-3'>
            <select className='form-select w-50' value={selectedTitle} onChange={handleTitleChange}>
              <option value="">Select Title</option>
              {uniqueTitles.map((title, index) => (
                <option key={index} value={title}>{title}</option>
              ))}
            </select>
          </div>
        <div className='d-flex justify-content-end mt-3'>
          <button className='btn btn-danger me-3' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Announcement</button>
          <button className='btn btn-danger'onClick={gotoCal}>View Calendar</button>
        </div>
        {currentEvents.length > 0 ? (
            currentEvents?.map((item, index) => (
                <div className='card job--card' key={item.id} data-aos="fade-up">
                <div className='card-header bg-danger text-light'>
                    Date Posted: {item.created_at}
                </div>
                <div className='card-body'>
                    <div className='row'>
                    <div className='col-md-2 d-flex justify-content-center align-items-center'>
                        <img src={item.src} alt={item.title}/>
                    </div>
                    <div className='col-md-3'>
                        <p>{item.type}</p>
                        <p>Company:{item.company}</p>
                        <p>Date:{item.date}</p>
                        <p>Time:{item.time}</p>
                    </div>
                    <div className='col-md-5'>
                        {item.type === 'Public Announcement' ? (
                        <>
                            <p>Content: {item.content}</p>
                            {/* Render other fields related to public announcement */}
                        </>
                        ) : (
                        <>
                            <p>Affected Area: {item.affectedArea}</p>
                            <p>Purpose: {item.purpose}</p>
                            <p>Status: {item.status}</p>
                            {/* Render other fields related to power interruption */}
                        </>
                        )}
                    </div>
                    <div className='col-md-2 btn-tray'>
                        {/* <button className='btn btn-danger ms-1' data-bs-toggle="modal" data-bs-target="#viewModal">View</button> */}
                        <button className='btn btn-danger ms-1' data-bs-toggle="modal" data-bs-target="#updateModal"><i class='bx bx-edit-alt' ></i></button>
                        <button className='btn btn-danger ms-1' data-bs-toggle="modal" data-bs-target="#removeModal"><i class='bx bxs-trash-alt' ></i></button>
                    </div>
                    </div>
                </div>
                </div>
            ))
            ) : (
            <p className='text-center'>No events found.</p>
            )}
        <div className='pagination d-flex fixed-bottom justify-content-end mb-3'>
        <div className='pagination--container d-flex'>
          <button className='btn btn-danger' onClick={handlePrevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <h5 className='ms-3 mt-2'>Page {currentPage}</h5>
          <button className='btn btn-danger ms-3' onClick={handleNextPage} disabled={indexOfLastEvent >= (announcements?.length || 0)}>
            Next
          </button>
        </div>
         
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Announcement</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <label>Type: </label>
            <select className='form-select' value={announcementType} onChange={handleTypeChange}>
              <option value="Power Interruption">Power Interruption</option>
              <option value="Public Announcement">Public Announcement</option>
            </select>

            {/* Conditional rendering based on the selected option */}
            {announcementType === 'Power Interruption' ? (
              <>
                <label className='mt-3'>Date: </label>
                <input type='date' className='form-control'/>
                <label className='mt-3'>Time/Duration</label>
                <input type='text' className='form-control'/>
                <label className='mt-3'>Affected Area</label>
                <input type='text' className='form-control'/>
                <label className='mt-3'>Purpose: </label>
                <textarea className='form-control'></textarea>
                <label className='mt-3'>Poster: </label>
                <input type='file' className='form-control' placeholder='' />
              </>
            ) : (
              <>
                <label className='mt-3'>Content: </label>
                <textarea className='form-control'></textarea>
                <label className='mt-3'>Poster: </label>
                <input type='file' className='form-control' placeholder='' />
              </>
            )}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-danger">Save changes</button>
          </div>
        </div>
      </div>
    </div>


      {/* <!-- Update Announcement --> */}
      <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Update Anouncement</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <label>Type: </label>
              <select className='form-select'>
                <option>Power Interruption</option>
                <option>Public Announcement</option>
              </select>
              <label className='mt-3'>Description: </label>
              <textarea className='form-control'></textarea>
              <label className='mt-3'>Poster: </label>
              <input type='file' className='form-control' placeholder='' />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger">Save changes</button>
            </div>
          </div>
        </div>
      </div>

            {/* <!-- Remove Event --> */}
            <div class="modal fade" id="removeModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label>Do you want to remove these Announcement?</label>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
              <button type="button" class="btn btn-danger">Yes</button>
            </div>
          </div>
        </div>

    </div>
    </>
  )
}

export default Announcement