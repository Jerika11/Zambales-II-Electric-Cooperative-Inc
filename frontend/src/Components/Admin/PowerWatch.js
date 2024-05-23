import React, {useEffect} from 'react';
import PdfViewer from '../Landing/PdfViewer';
import Sidebar from './Sidebar';

const PowerWatch = () => {
  const pdfUrl = require('../../Assets/PowerWatch-Jan-2022.pdf');
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, [])
  return (
    <>
    <Sidebar/>
    <div className='container-fluid page-content soa--container'>
      <div className='d-flex justify-content-between'>
        <h3 className='text-danger fw-bold'>PowerWatch</h3>
        <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#updateModal">Update</button>
      </div>  
      <div className='container'>
          <h3 className='mt-3 fw-bold'>January 2022</h3>
          <PdfViewer pdfUrl={pdfUrl} />
          <hr/>
       </div>

       {/* <!-- Update Event --> */}
      <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Update Powerwatch</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <label className=''>Add Pdf File: </label>
              <input type='file' className='form-control'  placeholder='' />
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

export default PowerWatch