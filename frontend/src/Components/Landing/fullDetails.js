import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnnouncementData from './../../Data/announcement.json';
import Navibar from './Navbar';
import Footer from './Footer'
import './about.css'
const FullDetails = () => {
    const { id } = useParams(); // Get the id from URL parameters
    const [itemDetails, setItemDetails] = useState(null);
  
    useEffect(() => {
      // Find the item details based on the id
      const selectedItem = AnnouncementData.Announcements.find(item => item.id === parseInt(id));
      setItemDetails(selectedItem);
    }, [id]);
    
    // Render loading state while fetching data
    if (!itemDetails) {
      return <div>Loading...</div>;
    }
  

  

  
    return (
        <> 
        <Navibar/>
        <div className='container-fluid'>
        <h2 className='text-center mt-3'>Full Details of Announcement {id}</h2>
        <div className='d-flex'>
            <img src={itemDetails.src} className="full--image" alt="" />
            <h3>{itemDetails.title}</h3>
            <p>{itemDetails.description}</p>
          {/* Render other details of the announcement item */}
        </div>
      </div>
      <Footer/>
      </>
       
    )
}

export default FullDetails