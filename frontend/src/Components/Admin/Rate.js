import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import rate from './../../Data/rate.json';

const Rate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(3);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchValue, setSearchValue] = useState('');

 // Update filtered events when searchValue changes
 useEffect(() => {
  const filtered = rate?.Rate?.filter(value =>
    value.datePosted.toLowerCase().includes(searchValue.toLowerCase()) ||
    value.source.toLowerCase().includes(searchValue.toLowerCase())
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

  return (
    <>
    <Sidebar/>
    <div className='container-fluid page-content rate--container'>
      <div className='d-flex justify-content-center'>
        <h3 className='text-danger fw-bold'>Rate</h3>
      </div>
      <div className='d-flex justify-content-center mt-3'>
        <input className='form-control  w-50 text-center' placeholder='Search...' value={searchValue} onChange={handleSearchInputChange}/>
      </div>
      <div className='d-flex justify-content-end'>
        <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">Create New Rate</button>
      </div> 

        <div className='row mt-3' data-aos="fade-up">
            <div className='col-md-12'>
            
              <div className='table-responsive mt-3'>
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
                  {currentEvents.length > 0 ? (
                    currentEvents.map((item) => (
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan={10}>No Data Found</td>
                    </tr>
                  )} 
                  </tbody>
                </table>
              </div>    
            </div>
          </div>
          <div className='pagination d-flex fixed-bottom justify-content-end mb-3'>
            <div className='pagination--container d-flex'>
              <button className='btn btn-danger' onClick={handlePrevPage} disabled={currentPage === 1}>
                Prev
              </button>
              <h5 className='ms-3 mt-2'>Page {currentPage}</h5>
              <button className='btn btn-danger ms-3' onClick={handleNextPage} disabled={indexOfLastEvent >= (rate?.Rate?.length || 0)}>
                Next
              </button>
            </div>
          </div>
                {/* <!-- Add Rates --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add New Rate</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label>Source: </label>
              <input type='text' className='form-control' placeholder='' />
              <label className='mt-3'>KWH Purchase </label>
              <input type='text' className='form-control'  placeholder='' />
              <label className='mt-3'>Basic Generation Cost </label>
              <input type='text' className='form-control' placeholder='' />
              <label>Other Cost and Ajustment: </label>
              <input type='text' className='form-control' placeholder='' />
              <label className='mt-3'>Discounts </label>
              <input type='text' className='form-control'  placeholder='' />
              <label className='mt-3'>Total Generation Cost Month </label>
              <input type='text' className='form-control' placeholder='' />
              <label>Other Generation Adjustment </label>
              <input type='text' className='form-control' placeholder='' />
              <label className='mt-3'>Average Generation Cost </label>
              <input type='text' className='form-control'  placeholder='' />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Rate