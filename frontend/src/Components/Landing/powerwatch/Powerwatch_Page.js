import React, {useEffect} from 'react'
import PdfViewer from '../PdfViewer';
import Navibar from '../Navbar';
import Footer from '../Footer';

const Powerwatch_Page = () => {
    const pdfUrl = require('../../../Assets/PowerWatch-Jan-2022.pdf');
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, [])

  return (
    <div>
        <Navibar/>
        
        <div className='container'>
            <h3 className='mt-3 fw-bold'>January 2022</h3>
            <PdfViewer pdfUrl={pdfUrl} />
            <hr/>
         </div>
         <Footer/>
    </div>
  )
}

export default Powerwatch_Page