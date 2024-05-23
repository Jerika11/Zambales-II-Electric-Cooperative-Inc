import React, {useEffect} from 'react';
import Navibar from '../Navbar';
import Footer from '../Footer';

const DownloadForm = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <div>
        <Navibar/>
         <div className='container'>
            <h3 className='mt-3 fw-bold'>Download Forms</h3>
            <div className='row'>
                <div className='col-md-12 mt-3'>
                    <div className='card p-3'>
                        <div className='d-flex justify-content-between'>
                            <h3 className='text-danger'>APPLICATION-FOR-ELECTRIC-SERVICE-CONNECTION-V19</h3>
                            <button className='btn btn-danger'>Download</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-12 mt-3'>
                    <div className='card p-3'>
                        <div className='d-flex justify-content-between'>
                            <h3 className='text-danger'>APPLICATION-FOR-HOUSEWIRING-INSPECTION-V19</h3>
                            <button className='btn btn-danger'>Download</button>
                        </div>
                        
                    </div>
                </div>
                <div className='col-md-12 mt-3'>
                    <div className='card p-3'>
                        <div className='d-flex justify-content-between'>
                            <h3 className='text-danger'>Electrical-layout</h3>
                            <button className='btn btn-danger'>Download</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
         </div>
         <Footer/>
    </div>
  )
}

export default DownloadForm