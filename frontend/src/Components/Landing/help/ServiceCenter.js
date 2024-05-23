import React, {useEffect} from 'react';
import Navibar from '../Navbar';
import Footer from '../Footer';
import './help.css';

const ServiceCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
        <Navibar/>
         <div className='container'>
            <h3 className='mt-3 fw-bold'>Service Center</h3>
            <div className='card-container'>
            <div className='row mb-3'>
              <div className='col-md-4'>
                <div className='card card--sc '>
                  <h6 className='fw-bold'>Subic Collection Office 1</h6>
                  <h6>Matain, Subic, Zambales</h6>
                  <h6>Tel no. 047-232-2414</h6>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card card--sc'>
                  <h6 className='fw-bold'>Subic Collection office and Service Center</h6>
                  <h6>Mangahan, Mangan-Vaca Subic, Zambales</h6>
                  <h6>Tel no. 047-232-3060</h6>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='card card--sc'>
                  <h6 className='fw-bold'>Castillejos Collection Office</h6>
                  <h6>Sta. Maria, Castillejos, Zambales</h6>
                  <h6>Tel no. 047-602-1181</h6>
                </div>
              </div>
              <div className='col-md-4'>
              <div className='card card--sc'>
                <h6 className='fw-bold'>Main Office</h6>
                <h6>National Road, Brgy. Nagbunga, Castillejos, Zambales</h6>
                <ul>
                    <li><b>Landline</b></li>
                    <li>047-602-2401</li>
                    <li>047-602-2402</li>
                    <li><b>Smart</b></li>
                    <li>0947-892-7764</li>
                    <li>0939-938-9794</li>
                    <li><b>Sun</b></li>
                    <li>0933-877-3558</li>
                    <li><b>Globe</b></li>
                    <li>0917-138-1679</li>
                    <li>0917-137-3283</li>

                </ul>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card card--sc'>
                <h6 className='fw-bold'>San Marcelino Collection Office</h6>
                <h6>Central, San Marcelino, Zambales</h6>
                <h6>Tel no. 047-602-2451</h6>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card card--sc'>
                <h6 className='fw-bold'>San Antonio Collection Office and Service Center</h6>
                <h6>Antipolo, San Antonio, Zambales</h6>
                <h6>Tel no. 913-4612</h6>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='card card--sc'>
                <h6 className='fw-bold'>San Narciso Collection Office</h6>
                <h6>Libertad, San Narciso, Zambales</h6>
                <h6>Tel no. 047-913-3902</h6>
              </div>
            </div>
            <div className='col-md-4'>
            <div className='card card--sc'>
                <h6 className='fw-bold'>San Felipe Collection Office</h6>
                <h6>Brgy. Rosete, San Felipe, Zambales</h6>
                <h6>Tel no. 047-913-4512</h6>
              </div>
            </div>
              
              
            <div className='col-md-4'>
              <div className='card card--sc'>
                <h6 className='fw-bold'>Cabangan Collection Office</h6>
                <h6>Dolores, Cabangan, Zambales</h6>
              </div>
            </div>
            </div>

            </div>
         </div>
         <Footer/>
    </div>
  )
}

export default ServiceCenter