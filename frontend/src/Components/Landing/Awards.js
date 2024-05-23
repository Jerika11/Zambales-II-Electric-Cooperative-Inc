import React from 'react';
import Navibar from './Navbar';
import Img1 from './../../Assets/Awards/2012.png';
import Img2 from './../../Assets/Awards/2008.png';
import Img3 from './../../Assets/Awards/2013.png';
import Img4 from './../../Assets/Awards/2007.png';

const Awards = () => {
  return (
    <div>
    <Navibar/>
    <div className='container'>
        <h3 className='mt-3 fw-bold'>Awards</h3>
        <div className='row mt-3'>
            <div className='col-md-3'>
                <div className='card border-0 text-center'>
                    <img src={Img1} alt='img1' width={200}/>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card border-0 text-center'>
                    <img src={Img2} alt='img2' width={170}/>
                </div>
                
            </div>
            <div className='col-md-3'>
                <div className='card border-0 text-center'>
                    <img src={Img3} alt='img3'  width={200}/>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card border-0 text-center'>
                    <img src={Img4} alt='img4' width={300}/>
                </div>
            </div>
        </div>
        <p className='fw-bold'>March 2013</p>
        <p>Prompt Payor Award – Certificate of Appreciation for being a Prompt Payor for the period of May 26, 2011 up to December 25, 2012</p>
        <p className='fw-bold'>April 2012</p>
        <p>Sunshine Region Award for having the biggest number of house connections through the concerted efforts and innovative strategies of all ECs in the region III, thus successful P-not sitios energization in 2011 (April 27, 2012) – NEA</p>
        <p className='fw-bold'>2008</p>
        <p>Special Award for Category A+ Ecs (April 25, 2008) – NEA</p>
        <p className='fw-bold'>2007</p>
        <p>Best in Collection Performance in 2007 & Special Award or Lumia Award</p>
        <p className='fw-bold'>A+ cooperative with a special award for collection efficiency</p>
        <p className='fw-bold'>1987 to 1991</p>
        <p>Best Electric Cooperative in Region</p>
        <p className='fw-bold'>1989 to 1990</p>
        <p>Category A</p>
        <p className='fw-bold'>1984 to 1999</p>
        <p>Category C and classified as Medium Cooperative</p>
        <hr/>
    </div>
</div>
  )
}

export default Awards