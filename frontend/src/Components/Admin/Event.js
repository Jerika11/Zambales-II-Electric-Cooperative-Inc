import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import events from './../../Data/events.json';

const Event = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(3);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchValue, setSearchValue] = useState('');

 // Update filtered events when searchValue changes
 useEffect(() => {
  const filtered = events?.Events?.filter(event =>
    event.title.toLowerCase().includes(searchValue.toLowerCase())
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

  const [year, setYear] = useState('');

  // Function to handle change in input
  const handleInputChange = (e) => {
    setYear(e.target.value);
  };
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (item) => {
    setSelectedEvent(item);
  };


  return (
    <>
    <Sidebar/>
    <div className='container-fluid page-content event---container'>
      <div className='d-flex justify-content-center'>
        <h3 className='text-danger fw-bold'>Events</h3>
        
      </div>  
        <div className='d-flex justify-content-center'>
           <input className='form-control w-50 text-center' placeholder='Search...' value={searchValue} onChange={handleSearchInputChange}/>
        </div>
       
        <div className='d-flex justify-content-end mt-3'><button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">Create Event</button></div>
        
        {currentEvents.length > 0 ? (
          currentEvents.map((item, index) => (
            <div className='card event---card mt-3' key={item.id} data-aos="fade-up">
              <div className='card-header bg-danger text-light'>Event Name: {item.title}</div>
              <div className='card-body d-flex justify-content-between'>
                <div>
                  <p>Date Posted: {item.created_at}</p>
                  <p>Last Modified: {item.year}</p>
                </div>
                <div className='btn-tray'>
                <button className='btn btn-danger ms-1' onClick={() => openModal(item)}  data-bs-toggle="modal" data-bs-target="#viewModal"><i class='bx bx-file-find'></i></button> 
                <button className='btn btn-danger ms-1' data-bs-toggle="modal" data-bs-target="#updateModal"><i class='bx bx-edit-alt' ></i></button>
                <button className='btn btn-danger ms-1' data-bs-toggle="modal" data-bs-target="#removeModal"><i class='bx bxs-trash-alt' ></i></button>
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
            <button className='btn btn-danger ms-3' onClick={handleNextPage} disabled={indexOfLastEvent >= (filteredEvents.length || 0)}>
              Next
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Add Event --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Event</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label>Title: </label>
              <input type='text' className='form-control' placeholder='' />
              <label className='mt-3'>Year: </label>
              <input type='date' className='form-control'  placeholder='' />
              <label className='mt-3'>Pictures: </label>
              <input type='file' className='form-control' placeholder='' />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header py-1 px-3">
              <div className='d-inline'>
                <h4 className="modal-title" id="exampleModalLabel">{selectedEvent ? selectedEvent.title : 'Event Title'}</h4>
                <h6 className="modal-title" id="exampleModalLabel">{selectedEvent ? selectedEvent.title : 'Event Title'}</h6>
              </div>
              
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            {/*  */}
              {selectedEvent && (
                
                <div>
                 <p>{selectedEvent.caption}</p>
                  <div className='grid-wrapper--events'>
                    {selectedEvent.picture.map((pic, index) => (
                      <div key={index}><img  src={pic} alt={`Image ${index + 1}`} /></div>
                      
                    ))}
                  </div>
                  {/* Add other event details here as needed */}
                </div>
              )}
            </div>
            <div className="modal-footer">
              
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Update Event --> */}
      <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Update Event</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label>Title: </label>
              <input type='text' className='form-control' placeholder='' />
              <label className='mt-3'>Year: </label>
              <input type='date' className='form-control'  placeholder='' />
              <label className='mt-3'>Pictures: </label>
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
              <label>Do you want to remove these Event?</label>
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

export default Event