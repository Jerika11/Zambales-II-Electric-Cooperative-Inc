import React from 'react';
import Sidebar from './Sidebar';

const Contact = () => {
  return (
    <>
    <Sidebar/>
    <div className='container-fluid contact--container page-content'>
          <h3 className='text-danger fw-bold text-center'>Contact</h3>
          <div className='container' data-aos="fade-up">
            <div className='card p-3 mt-3'>
              <label>Email:</label>
              <input type='email' className='form-control' />
              <label className='mt-3'>Contact Number</label>
              <input type='email' className='form-control' />
              <label className='mt-3'>Facebook:</label>
              <input type='email' className='form-control' />
              <label className='mt-3'>Twitter:</label>
              <input type='email' className='form-control' />
              <label className='mt-3'>Instagram:</label>
              <input type='email' className='form-control' />
              <button className='btn btn-danger p-2 mt-3'>Save Details</button>
            </div>
          </div>
      </div>
    </>
  )
}

export default Contact