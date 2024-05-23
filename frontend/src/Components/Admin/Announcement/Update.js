import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-scroll';

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [announcement, setAnnouncement] = useState({});
    const [values, setValues] = useState({
        company: '',
        date: '',
        from_time: '',
        to_time: '',
        duration: '',
        affected_area: '',
        purpose: '',
        status: '',
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/read/${id}`)
        .then(res => {
            console.log(res);
            setAnnouncement(res.data[0]);
            setValues({
            company: res.data[0].company,
            date: res.data[0].date,
            from_time: res.data[0].from_time,
            to_time: res.data[0].to_time,
            duration: res.data[0].duration,
            affected_area: res.data[0].affected_area,
            purpose: res.data[0].purpose,
            status: res.data[0].status,
            });
        })
        .catch(err => console.log(err));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
        ...prevValues,
        [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/update/${id}`, values)
        .then(res => {
            console.log('Update successful:', res);
            navigate('/admin/Announcement');
        })
        .catch(err => {
            console.log('Error updating:', err);
        });
    };

  return (
    <div>
      <Sidebar />
      <div className='container-fluid page-content announcement--container'>
        <form onSubmit={handleSubmit}>
            <div className='d-flex justify-content-between'>
                <h3>Update Announcement</h3>
                <button to={`/admin/Announcement`} className='btn btn-danger'>Back</button>
            </div>
            
            <div className='row'>
                <div className='col-md-12'>
                    <label className='mt-3'>Company: </label>
                    <select
                        className='form-select'
                        name='company'
                        value={values.company}
                        onChange={handleChange}
                        required
                    >
                        <option value=''>Select Option</option>
                        <option value='Zameco'>ZAMECO</option>
                        <option value='NGCP'>NGCP</option>
                    </select>
                </div>
            
            <div className='col-md-12'>
                <label className='mt-3'>Date: </label>
                <input
                    type='text'
                    className='form-control'
                    name='date'
                    value={values.date}
                    readOnly
                />
            </div>
            <div className='col-md-6'>
                <label className='mt-3'>From: </label>
                <input
                    type='time'
                    className='form-control'
                    name='from_time'
                    value={values.from_time}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='col-md-6'>
                <label className='mt-3'>To: </label>
                <input
                    type='time'
                    className='form-control'
                    name='to_time'
                    value={values.to_time}
                    onChange={handleChange}
                    required
                />
            </div>
          
         
          
          
          <label className='mt-3'>Duration: Hour/s</label>
          <input
            type='text'
            className='form-control'
            name='duration'
            value={values.duration}
            readOnly
          />
          <label className='mt-3'>Affected Area</label>
          <input
            type='text'
            className='form-control'
            name='affected_area'
            value={values.affected_area}
            onChange={handleChange}
            required
          />
          <label className='mt-3'>Purpose: </label>
          <input
            type='text'
            className='form-control'
            name='purpose'
            value={values.purpose}
            onChange={handleChange}
            required
          />
          <label className='mt-3'>Status: </label>
          <input
            type='text'
            className='form-control'
            name='status'
            value={values.status}
            onChange={handleChange}
            required
          />
          </div>
          <button className='btn btn-danger mt-3 w-100 p-2' type='submit'>Publish</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
