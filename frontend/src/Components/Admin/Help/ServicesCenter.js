import React, {useState} from 'react';
import Sidebar from '../Sidebar';
import sc from './../../../Data/sc.json';
const ServicesCenter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = sc?.ServiceCenter?.slice(indexOfFirstEvent, indexOfLastEvent);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const [year, setYear] = useState('');

  // Function to handle change in input
  const handleInputChange = (e) => {
    setYear(e.target.value);
  };
  return (
    <>
    <Sidebar/>
    <div className='container-fluid page-content sc--container'>
      <div className='d-flex justify-content-center'>
        <h3 className='text-danger fw-bold'>Service Center</h3>
      </div> 
      <div className='d-flex justify-content-end'>
        <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">Add New</button>
      </div>  

        <div className='row' >
        {currentEvents?.map((item, index) => (
          <div className='col-md-4' key={item.id} data-aos="fade-up">
            <div className='card sc--card'>
              <div className='card-header bg-white'>
                <div className='btn-tray'>
                    <button className='btn btn-danger ms-1' data-bs-toggle="modal" data-bs-target="#updateModal"><i class='bx bx-edit-alt'></i></button>
                    <button className='btn btn-danger ms-1' data-bs-toggle="modal" data-bs-target="#removeModal"><i class='bx bxs-trash-alt'></i></button>
                  </div>
              </div>
              <div className='card-body'>
                <div className='row'>
                  <div>
                    <p>{item.name}</p>
                    <p>{item.address}</p>
                    {/* Check if there are contact numbers */}
                    {item.tel_no && <p>Tel no.: {item.tel_no}</p>}
                    {item.contact_numbers && (
                      <div>
                        {/* Render each contact number */}
                        {Object.entries(item.contact_numbers).map(([type, numbers]) => (
                          <div key={type}>
                            <p>{type}</p>
                            <ul>
                              {/* Render each number for the type */}
                              {numbers.map((number, index) => (
                                <li key={index}>{number}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        ))}

          <div className='pagination d-flex fixed-bottom justify-content-end mb-3 me-3'>
            <button className='btn btn-danger' onClick={handlePrevPage} disabled={currentPage === 1}>
              Prev
            </button>
            <h5 className='ms-3 mt-2'>Page {currentPage}</h5>
            <button className='btn btn-danger ms-3' onClick={handleNextPage} disabled={indexOfLastEvent >= (sc?.ServiceCenter?.length || 0)}>
              Next
            </button>
          </div>
        </div>

        {/* <!-- Add Board of Director --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Board of Director</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <label>Department: </label>
              <input type='text' className='form-control' placeholder='' />
              <label className='mt-3'>Location: </label>
              <input type='text' className='form-control'  placeholder='' />
              <label className='mt-3'>Tel. Number: </label>
              <input type='text' className='form-control' placeholder='' />
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
              <h1 class="modal-title fs-5" id="exampleModalLabel">Title:</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label> </label>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Update Event --> */}
      <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Update Data</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label>Department: </label>
              <input type='text' className='form-control' placeholder='' />
              <label className='mt-3'>Location: </label>
              <input type='text' className='form-control'  placeholder='' />
              <label className='mt-3'>Tel. Number: </label>
              <input type='text' className='form-control' placeholder='' />
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
              <label>Do you want to remove these data?</label>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
              <button type="button" class="btn btn-danger">Yes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ServicesCenter