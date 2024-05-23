import React, {useEffect, useState,} from 'react';
import Navibar from '../Navbar';
import Footer from '../Footer';
import events from '../data/data.json';
import './style.css';

const Events = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
      const [modalData, setModalData] = useState(null);
      const eventGallery = [
        { event_id: 1, caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", event_name: "Ground Breaking Ceremony 2019", src1: './uploads/brighten_up_project/img-1.jpg', datePosted: '2024-03-19' },
        { event_id: 2, caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", event_name: "Ground Breaking Ceremony 2019", src1: './uploads/brighten_up_project/img2.jpg', datePosted: '2024-03-19' },
        { event_id: 3, caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", event_name: "Ground Breaking Ceremony 2019", src1: './uploads/brighten_up_project/img3.jpg', datePosted: '2024-03-19' },
        { event_id: 4, caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", event_name: "Ground Breaking Ceremony 2019", src1: './uploads/brighten_up_project/img4.jpg', datePosted: '2024-03-19' },
        { event_id: 5, caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", event_name: "Ground Breaking Ceremony 2019", src1: './uploads/brighten_up_project/img5.jpg', datePosted: '2024-03-19' },
        { event_id: 6, caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", event_name: "Ground Breaking Ceremony 2019", src1: './uploads/brighten_up_project/img6.jpg', datePosted: '2024-03-19' },

        { event_id: 1,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Run For Light 2019", src1: './uploads/run_for_light/img1.jpg', datePosted: '2024-03-19' },
        { event_id: 2,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Run For Light 2019", src1: './uploads/run_for_light/img2.jpg', datePosted: '2024-03-19' },
        { event_id: 3,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Run For Light 2019", src1: './uploads/run_for_light/img3.jpg', datePosted: '2024-03-19' },
        { event_id: 4,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Run For Light 2019", src1: './uploads/run_for_light/img4.jpg', datePosted: '2024-03-19' },
        { event_id: 5,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Run For Light 2019", src1: './uploads/run_for_light/img5.jpg', datePosted: '2024-03-19' },
        { event_id: 6,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Run For Light 2019", src1: './uploads/run_for_light/img6.jpg', datePosted: '2024-03-19' },

        { event_id: 1,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Tree Planting 2019", src1: './uploads/tree_planting/img1.jpg', datePosted: '2024-03-19' },
        { event_id: 2,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Tree Planting 2019", src1: './uploads/tree_planting/img2.jpg', datePosted: '2024-03-19' },
        { event_id: 3,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Tree Planting 2019", src1: './uploads/tree_planting/img3.jpg', datePosted: '2024-03-19' },
        { event_id: 4,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Tree Planting 2019", src1: './uploads/tree_planting/img4.jpg', datePosted: '2024-03-19' },
        { event_id: 5,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Tree Planting 2019", src1: './uploads/tree_planting/img5.jpg', datePosted: '2024-03-19' },
        { event_id: 6,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Tree Planting 2019", src1: './uploads/tree_planting/img6.jpg', datePosted: '2024-03-19' },

        { event_id: 1,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Outreach Program 2020", src1: './uploads/outreach_program/img1.jpg', datePosted: '2024-03-19' },
        { event_id: 2,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Outreach Program 2020", src1: './uploads/outreach_program/img2.jpg', datePosted: '2024-03-19' },
        { event_id: 3,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Outreach Program 2020", src1: './uploads/outreach_program/img3.jpg', datePosted: '2024-03-19' },
        { event_id: 4,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Outreach Program 2020", src1: './uploads/outreach_program/img4.jpg', datePosted: '2024-03-19' },
        { event_id: 5,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Outreach Program 2020", src1: './uploads/outreach_program/img5.jpg', datePosted: '2024-03-19' },
        { event_id: 6,caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",event_name: "Outreach Program 2020", src1: './uploads/outreach_program/img6.jpg', datePosted: '2024-03-19' },
      ];

      const handleSeeMore = (event_name) => {
        const data = eventGallery.find(event => event.event_name === event_name);
        
        setModalData(data);
    };

    const closeModal = () => {
        setModalData(null);
    };
  return (
    <div>
        <Navibar/>
         <div className='container event--container'>
            <h3 className='mt-3 fw-bold'>Events</h3>
            <div className='row'>
            {events?.Events?.map((item, index)=>(
                <div className="col-md-3" key={item.id}>
                    <div className="card border-0 mb-3  position-relative">
                        <img src={item.src} className="card-img-top" alt={item.title} />
                        <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">
                            <span className="text-body-secondary">Year: {item.year}</span>
                        </p>
                        <div className="mt-auto position-absolute bottom-0 start-0 end-0"> {/* This div positions the button at the bottom */}
                            <button className="btn btn-danger w-100" onClick={() => handleSeeMore(item.title)}>See More</button>
                        </div>
                        
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <hr/>
         </div>
         <Footer/>

         {/* Modal */}
         {modalData && (
                <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-fullscreen" role="document">
                        <div className="modal-content">
                            <div className="modal-header px-3 py-2">
                                <div className='d-inline'>
                                    <h5 className="modal-title fw-bold">{modalData.event_name}</h5>
                                    <h6>Date Posted: {modalData.datePosted}</h6>
                                </div>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                           
                            <div className="modal-body">
                            <h5 className="card-title">{modalData.caption}</h5>
                                
                                <div className='grid-wrapper--events mt-3'>
                                    {eventGallery
                                        .filter(event => event.event_name === modalData.event_name)
                                        .map((event, index) => (
                                            <div key={index}>
                                                <img src={event.src1} alt={`Event ${index + 1}`} />
                                            </div>
                                    ))}
                                </div>
                            </div>
                            <div class="modal-footer d-flex">
                            
                                <button type="button" class="btn btn-secondary" onClick={closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}

export default Events