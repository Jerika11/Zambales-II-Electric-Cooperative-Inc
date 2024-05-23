import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../Sidebar';

const Create = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // For Adding in Database
  const [company, setCompany] = useState('');
  const [date, setDate] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [toTime, setToTime] = useState('');
  const [duration, setDuration] = useState('');
  const [affectedArea, setAffectedArea] = useState('');
  const [purpose, setPurpose] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const dateString = searchParams.get('date');
    console.log("Date string from URL:", dateString); // Log the date string from the URL
    if (dateString) {
      // Parse the date string into a JavaScript Date object
      const [month, day, year] = dateString.split('/').map(Number);
      const parsedDate = new Date(year, month - 1, day); // Months are 0-based in JavaScript Dates
      console.log("Parsed Date:", parsedDate); // Log the parsed date
      setDate(parsedDate);
    }
  }, [location.search]);



  // Function to calculate duration
  useEffect(() => {
    if (fromTime && toTime) {
      const from = new Date(`01/01/2024 ${fromTime}`);
      const to = new Date(`01/01/2024 ${toTime}`);
      const diffInMilliseconds = to - from;
      const hours = diffInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
      setDuration(hours); // Set duration in hours with 2 decimal places
    }
  }, [fromTime, toTime]);

// Format date as YYYY-MM-DD with leading zeros for month and day
const formatDate = (date) => {
  if (!date) return '';
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based, pad with leading zero
  const day = String(date.getDate()).padStart(2, '0'); // Pad day with leading zero
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};


  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/create', {
        company,
        date: formatDate(date),
        fromTime,
        toTime,
        duration,
        affectedArea,
        purpose,
      })
      .then((res) => {
        console.log(res);
        navigate('/admin/Announcement');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Sidebar />
      <div className='container-fluid page-content announcement--container'>
        <form onSubmit={handleSubmit}>
          <h3>Add Announcement</h3>
          <label className='mt-3'>Company: </label>
          <select className='form-select' onChange={(e) => setCompany(e.target.value)} required>
            <option value=''>Select Option</option>
            <option value='Zameco'>ZAMECO</option>
            <option value='NGCP'>NGCP</option>
          </select>
          <label className='mt-3'>Date: </label>
          {/* <input type='date' className='form-control' value={date} onChange={(e) => setDate(e.target.value)} required /> */}
          <input 
              type='text' 
              className='form-control' 
              value={date ? date.toLocaleDateString().split('T')[0] : ''} 
              onChange={(e) => setDate(new Date(e.target.value))} 
              readOnly 
            />

          <label className='mt-3'>From: </label>
          <input type='time' className='form-control' value={fromTime} onChange={(e) => setFromTime(e.target.value)} required />
          <label className='mt-3'>To: </label>
          <input type='time' className='form-control' value={toTime} onChange={(e) => setToTime(e.target.value)} required />
          <label className='mt-3'>Duration: Hour/s</label>
          <input type='text' className='form-control' value={duration} onChange={(e) => setDuration(e.target.value)} readOnly />
          <label className='mt-3'>Affected Area</label>
          <input type='text' className='form-control' onChange={(e) => setAffectedArea(e.target.value)} required />
          <label className='mt-3'>Purpose: </label>
          <input type='text' className='form-control' onChange={(e) => setPurpose(e.target.value)} required />

          <button className='btn btn-danger mt-3 w-100 p-2'>Publish</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
