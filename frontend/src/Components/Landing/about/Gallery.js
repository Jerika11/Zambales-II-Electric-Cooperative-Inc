import React, {useEffect} from 'react';
import Navibar from '../Navbar';
import Footer from '../Footer';
import gallery from '../data/data.json';
import './style.css';

const Gallery = () => {

    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

  return (
    <div>
        <Navibar/>
         <div className='container container--gallery'>
            <h3 className='mt-3 fw-bold'>Gallery</h3>
            {/* <div className='row'>
            {gallery?.Gallery?.map((item, index)=>(
                <img src={item.src} className="img-fluid card-img" alt={item.title} />
            ))}
            </div> */}
            <div className='grid-wrapper'>
                 {gallery?.Gallery?.map((item, index)=>(
                    <div>
                        <img src={item.src}/>
                    </div>
                ))}
            </div>
           
            <hr/>

            
         </div>
         <Footer/>
    </div>
  )
}

export default Gallery