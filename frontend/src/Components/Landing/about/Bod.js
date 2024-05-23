import React, {useEffect} from 'react';
import Navibar from '../Navbar';
import Footer from '../Footer';
// images
import Img1 from './../../../Assets/bod/img1.jpg';
import Img2 from './../../../Assets/bod/img2.jpg';
import Img3 from './../../../Assets/bod/img3.jpg';
import Img4 from './../../../Assets/bod/img4.jpg';
import Img5 from './../../../Assets/bod/img5.jpg';
import Img6 from './../../../Assets/bod/img6.jpg';
import Img7 from './../../../Assets/bod/img7.jpg';
import Img8 from './../../../Assets/bod/img8.jpg';

const Bod = () => {
    useEffect(() => {
        document.documentElement.scrollLeft = 0;
        document.documentElement.scrollTop = 0;
        document.body.scrollLeft = 0;
        document.body.scrollTop = 0;
    }, []);
  return (
    <div>
        <Navibar/>
        <div className='container'>
            <h3 className='mt-3 fw-bold'>Board of Directors</h3>
            <div className='row mt-3'>
                <div className='col-md-3'>
                    <div className='card border-0'>
                        <img src={Img1} alt='img1' class="card-img-top" width={100}/>
                        <div className="card-body text-center">
                            <h5 class="card-title">Luther C. Agasa</h5>
                            <p class="card-text">President</p> 
                            <p class="card-text">Board of Director San Antonio</p> 
                            <p class="card-text">November 21, 2015 – Present</p> 
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card border-0'>
                        <img src={Img2} alt='img2' class="card-img-top" width={100}/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Alvin M. Farrales</h5>
                            <p class="card-text">Vice-President</p> 
                            <p class="card-text">Board of Director Castillejos</p> 
                            <p class="card-text">November 19, 2022- Present</p> 
                        </div>
                    </div>
                    
                </div>
                <div className='col-md-3'>
                    <div className='card border-0'>
                        <img src={Img3} alt='img3' class="card-img-top" width={100}/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Evangeline B. Rodriguez</h5>
                            <p class="card-text">Secretary</p> 
                            <p class="card-text">Board of Director San Marcelino</p> 
                            <p class="card-text">November 18, 2017 – Present</p> 
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card border-0'>
                        <img src={Img4} alt='img4' class="card-img-top" width={100}/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Paola Marie A. Rosete</h5>
                            <p class="card-text">Treasurer</p> 
                            <p class="card-text">Board of Director San Felipe</p> 
                            <p class="card-text">November 18, 2017 – Present</p> 
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card border-0'>
                        <img src={Img5} alt='img5' class="card-img-top" width={100}/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Jose S. Borlagdatan</h5>
                            <p class="card-text">Member</p> 
                            <p class="card-text">Board of Director Subic 1A</p> 
                            <p class="card-text">November 19, 2022- Present</p> 
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card border-0'>
                        <img src={Img6} alt='img6' class="card-img-top" width={100}/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Kathy T. Navarro</h5>
                            <p class="card-text">Member</p> 
                            <p class="card-text">Board of Director San Narciso</p> 
                            <p class="card-text">November 19, 2022 – Present</p> 
                        </div>
                    </div>
                    
                </div>
                <div className='col-md-3'>
                    <div className='card border-0'>
                        <img src={Img7} alt='img7' class="card-img-top" width={100}/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Roel M. Mauricio</h5>
                            <p class="card-text">Member</p> 
                            <p class="card-text">Board of Director Cabangan</p> 
                            <p class="card-text">October 8, 2022- Present</p> 
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='card border-0'>
                        <img src={Img8} alt='img8' class="card-img-top" width={100}/>
                        <div class="card-body text-center">
                            <h5 class="card-title">Romwil F. De Jesus</h5>
                            <p class="card-text">General Manager</p> 
                            <p class="card-text">August 7, 2020 – Present</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
        <Footer />
    </div>
  )
}

export default Bod