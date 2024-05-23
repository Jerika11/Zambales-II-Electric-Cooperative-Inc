import React from 'react';
import Sidebar from './Sidebar';
import userPlaceholder from './../../Assets/placeholder/user.jpg';

const Profile = () => {
  return (
    <>
    <Sidebar/>
    <div className='container-fluid page-content contact--container'>
        <h3 className='text-danger text-center fw-bold'>Profile</h3>
        <div className='container mt-5' data-aos="fade-up">
            <div className='row'>
                <div className='col-lg-4'>
                    <img src={userPlaceholder} alt='Profile Picture'/>
                    <h4 className='mt-3'>Jerika Soriano</h4>
                    <button className='btn btn-danger w-100'>Update Profile</button>
                    <button className='btn btn-danger w-100 mt-3'>Change Password</button>
                </div>
                <div className='col-lg-8'>
                    <div className='card border-0 p-2' data-aos="fade-up">
                        <h4>Profile Information</h4>
                        <input className='form-control mt-3' placeholder='Name: Jerika Soriano'/>
                        <input className='form-control mt-3' placeholder='Address: #123 Sample Only Subic, Zambales'/>
                        <input className='form-control mt-3' placeholder='Age: 22'/>
                        <input className='form-control mt-3' placeholder='Position: Administrator'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Profile