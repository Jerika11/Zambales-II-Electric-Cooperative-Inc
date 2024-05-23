import React from 'react';
import Sidebar from '../Sidebar';

const DownloadForm = () => {
  return (
    <>
    <Sidebar/>
    <div className='container-fluid page-content df--container'>
      <div className='d-flex justify-content-center'>
        <h3 className='text-danger fw-bold'>Download Forms</h3>
      </div>  
      <div className='d-flex justify-content-end'>
        <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#exampleModal">Add New</button>
      </div> 
      <div className='container' data-aos="fade-up">
        <div className='row'>
          <div className='col-md-12 mt-3'>
              <div className='card p-3'>
                  <div className='d-flex justify-content-between'>
                      <h5 className='text-danger'>APPLICATION-FOR-ELECTRIC-SERVICE-CONNECTION-V19</h5>
                      <div className=''>
                        <button className='btn btn-danger me-3'>Download</button>
                        <button className='btn btn-danger'>Remove</button>
                      </div>
                  </div>
              </div>
          </div>
          <div className='col-md-12 mt-3'>
              <div className='card p-3'>
                  <div className='d-flex justify-content-between'>
                      <h5 className='text-danger'>APPLICATION-FOR-HOUSEWIRING-INSPECTION-V19</h5>
                      <div className=''>
                        <button className='btn btn-danger me-3'>Download</button>
                        <button className='btn btn-danger'>Remove</button>
                      </div>
                      
                  </div>
                  
              </div>
          </div>
          <div className='col-md-12 mt-3'>
              <div className='card p-3'>
                  <div className='d-flex justify-content-between'>
                      <h5 className='text-danger'>Electrical-layout</h5>
                      <div className=''>
                        <button className='btn btn-danger me-3'>Download</button>
                        <button className='btn btn-danger'>Remove</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>


        {/* <!-- Add Board of Director --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Add Form</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label>Title: </label>
              <input type='text' className='form-control' placeholder='' />
              <label className='mt-3'>Upload pdf: </label>
              <input type='file' className='form-control'  placeholder='' />
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
              <label>Do you want to remove this form?</label>
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

export default DownloadForm