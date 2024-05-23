import React, {useEffect, useState,} from 'react';
import Navibar from '../Navbar';
import Footer from '../Footer';
import './style.css';
import events from './../../../Data/events.json';

const Events = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
      const [currentPage, setCurrentPage] = useState(1);
      const [eventsPerPage] = useState(8);
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
    <div>
        <Navibar/>
        <div className='container event--container'>
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <h3 className='fw-bold'>Events</h3>
                <div className='pagination d-flex justify-content-end'>
                    <div className='pagination--container d-flex'>
                        <button className='btn btn-danger' onClick={handlePrevPage} disabled={currentPage === 1}>
                        <i class='bx bxs-chevron-left'></i>
                        </button>
                        <button className='btn btn-danger ms-3' onClick={handleNextPage} disabled={indexOfLastEvent >= (filteredEvents.length || 0)}>
                        <i class='bx bxs-chevron-right'></i>
                        </button>
                    </div>
                </div>
            </div>
           

            <div className='row'>
                {currentEvents.length > 0 ? (
                            currentEvents.map((item, index) => (
                                <div className='col-md-3' key={item.id}>
                                    <div className='card mt-3 border-0 mb-3 position-relative'  data-aos="fade-up">
                                        <div className='card-body d-flex flex-column'>
                                            <img src={item.src} className="card-img-top" alt={item.title} />
                                            <p>Event Name: {item.title}</p>
                                            <p>Date Posted: {item.created_at}</p>
                                            {/* <p>Last Modified: {item.year}</p> */}
                                            <div className="mt-auto position-absolute bottom-0 start-0 end-0 p-2"> {/* This div positions the button at the bottom */}
                                                {/* <button className="btn btn-danger w-100" onClick={() => handleSeeMore(item.title)}>See More</button> */}
                                                <button className='btn btn-danger w-100 ms-1' onClick={() => openModal(item)}  data-bs-toggle="modal" data-bs-target="#viewModal">See Details</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                        ))
                        ) : (
                        <p className='text-center'>No events found.</p>
                        )}
                </div>
            <hr/>
        </div>
         <Footer/>

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

    
    </div>
  )
}

export default Events