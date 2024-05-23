import React, { useState ,useEffect}  from 'react';
import Sidebar from '../Sidebar';
import jobs from './../../../Data/jobs.json';

const JobOpportunity = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(3);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedTitle, setSelectedTitle] = useState(''); // State to hold selected title

 // Update filtered events when searchValue changes
 useEffect(() => {
  const filtered = jobs?.Jobs?.filter(value =>
    value.title.toLowerCase().includes(searchValue.toLowerCase()) ||
    value.department.toLowerCase().includes(searchValue.toLowerCase())
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

  const uniqueTitles = Array.from(new Set(jobs?.Jobs?.map(event => event.department)));

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
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (item) => {
    setSelectedEvent(item);
  };
  return (
    <>
    <Sidebar/>
    <div className='container-fluid page-content job--container'>
      <div className='d-flex justify-content-center'>
        <h3 className='text-danger fw-bold'>Job Opportunity</h3>
        
      </div>  
        
      <div className='d-flex justify-content-center mt-3'>
        <input className='form-control  w-50 text-center' placeholder='Search...'  value={searchValue} onChange={handleSearchInputChange}/>
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
        <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Jobs</button>
      </div>
      {currentEvents.length > 0 ? (
        currentEvents?.map((item, index) => (
          <div className='card job--card' key={item.id} data-aos="fade-up">
            <div className='card-header bg-danger text-light'>Date Posted: {item.date_posted}</div>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-2 d-flex justify-content-center align-items-center p-0'>
                  <img src={item.src} alt={item.title}/>
                </div>
                <div className='col-md-8'>
                  <p>Job Name: {item.title}</p>
                  <p>Department: {item.department}</p>
                  <p>Deadline: {item.deadline}</p>
                </div>
                <div className='col-md-2 btn-tray'>
                <button className='btn btn-danger ms-1' onClick={() => openModal(item)} data-bs-toggle="modal" data-bs-target="#viewModal">View</button>
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
          <button className='btn btn-danger ms-3' onClick={handleNextPage} disabled={indexOfLastEvent >= (jobs?.Jobs?.length || 0)}>
            Next
          </button>
        </div>
          
        </div>
      </div>

      {/* <!-- Add Jobs --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Job</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className='row'>
                <div className='col-md-6'>
                  <label>Job Title: </label>
                  <input type='text' className='form-control' placeholder='' />
                  <label className='mt-3'>Department: </label>
                  <input type='text' className='form-control' placeholder='' />
                  <label className='mt-3'>Year: </label>
                  <input type='date' className='form-control'  placeholder='' />
                  <label className='mt-3'>Pictures: </label>
                  <input type='file' className='form-control' placeholder='' />
                </div>
                <div className='col-md-6'>
                  <label>Description: </label>
                  <textarea className='form-control'></textarea>
                  <label className='mt-3'>Requirements: </label>
                  <textarea className='form-control'></textarea>
                  <label className='mt-3'>Qualifications: </label>
                  <textarea className='form-control'></textarea>
                </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- View Event --> */}
      <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">{selectedEvent ? selectedEvent.department : 'Job Title'}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {selectedEvent && (
                
                <div className='row'>
                  <div className='col-md-4'>
                    <img src={selectedEvent.src}/>
                  </div>
                  <div className='col-md-8'>
                    <p>Job Title: {selectedEvent.title}</p>
                    <p>Description: {selectedEvent.description}</p>
                    <p>Requirements:</p>
                    <ul>
                        {selectedEvent.requirement.split(',').map((requirement, index) => (
                          <li key={index}>{requirement.trim()}</li>
                        ))}
                      </ul>
                    <p>Qualifications: {selectedEvent.qualification}</p>
                    <p>Deadline: {selectedEvent.deadline}</p>
                  </div>
                  
                  
                  {/* Add other event details here as needed */}
                </div>
              )}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Update Event --> */}
      <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Update Event</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div className='row'>
                <div className='col-md-6'>
                  <label>Job Title: </label>
                  <input type='text' className='form-control' placeholder='' />
                  <label className='mt-3'>Department: </label>
                  <input type='text' className='form-control' placeholder='' />
                  <label className='mt-3'>Year: </label>
                  <input type='date' className='form-control'  placeholder='' />
                  <label className='mt-3'>Pictures: </label>
                  <input type='file' className='form-control' placeholder='' />
                </div>
                <div className='col-md-6'>
                  <label>Description: </label>
                  <textarea className='form-control'></textarea>
                  <label className='mt-3'>Requirements: </label>
                  <textarea className='form-control'></textarea>
                  <label className='mt-3'>Qualifications: </label>
                  <textarea className='form-control'></textarea>
                </div>
              </div>
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

export default JobOpportunity