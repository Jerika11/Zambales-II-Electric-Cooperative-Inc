import React , {useState} from 'react';
import './adminstyle.css'
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Assets/zamecoLOGO.png'

const Sidebar = ({ onLinkClick }) => {    
    const navigate = useNavigate();

    function gotoLogin(event) {
        navigate('/admin/login');
    }
    // Set Active Link
    // const [activeLink, setActiveLink] = useState('');

    const [showOptions, setShowOptions] = useState(false);
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const [showOptionsInformation, setShowOptions1] = useState(false);
    const toggleOptionsInformation = () => {
        setShowOptions1(!showOptionsInformation);
    };

    const [showOptionsHelp, setShowOptions2] = useState(false);
    const toggleOptionsHelp = () => {
        setShowOptions2(!showOptionsHelp);
    };

    const handleOptionClick = () => {
        // Handle option click here
    };

    // Links
    function gotoDashboard(event) {
        navigate('/admin/Dashboard');
    }
    function gotoEvent(event) {
        navigate('/admin/Events');
    }
    function gotoAwards(event) {
        navigate('/admin/aboutus/Awards');
    }
    function gotoBOD(event) {
        navigate('/admin/aboutus/BoardOfDirectors');
    }
    function gotoJO(event) {
        navigate('/admin/aboutus/JobOpportunity');
    }
    function gotoSOA(event) {
        navigate('/admin/information/UnderstandingSOA');
    }
    function gotoSCA(event) {
        navigate('/admin/information/SeniorCitizenAct');
    }
    function gotoMC(event) {
        navigate('/admin/information/MagnaCarta');
    }

    function gotoPowerWatch(event) {
        navigate('/admin/PowerWatch');
    }
    function gotoAnnouncement(event) {
        navigate('/admin/Announcement');
    }

    function gotoEC(event) {
        navigate('/admin/help/ElectronicConnection');
    }
    function gotoSC(event) {
        navigate('/admin/help/ServiceCenter');
    }
    function gotoDF(event) {
        navigate('/admin/help/DownloadForm');
    }
    function gotoRate(event) {
        navigate('/admin/Rates');
    }
    function gotoContact(event) {
        navigate('/admin/Contact');
    }
    function gotoProfile(event) {
        navigate('/admin/Profile');
    }
  return (
    <>
    <div class="vertical-nav" id="sidebar">
        <div class="card py-3 px-3 ">
            {/* <h4 className='text-danger text-center'>System Administrator</h4> */}
            <img src={Logo} alt='logo'/>
        </div>
        <p class="text-light font-weight-bold text-uppercase px-3 small pb-4 mb-0"></p>

        <ul className="nav flex-column mb-0">
            <li className="nav-item">
                <Link className="nav-link text-light" onClick={gotoDashboard} smooth={true} duration={500}>Dashboard</Link>
            </li>
            
            <hr className="text-light"/>
            
            <p className="text-light font-weight-bold">Menu</p>
            <li className="nav-item">
                <Link className="nav-link text-light" onClick={gotoEvent} smooth={true} duration={500}>Events</Link>
            </li>
            <li className="nav-item">
                <div className="dropdown">
                    <Link className="nav-link text-light d-flex justify-content-between" onClick={toggleOptions} >About Us <i class='bx bx-chevron-down'></i></Link>
                    {showOptions && (
                        <div className={`dropdown-content ${showOptions ? 'show' : ''}`}>
                            <button className="nav-link text-light option" onClick={gotoAwards}>Awards</button>
                            <button className="nav-link text-light option" onClick={gotoBOD}>Board of Director</button>
                            <button className="nav-link text-light option" onClick={gotoJO}>Job Opportunity</button>
                        </div>
                    )}
                </div>
            </li>
            {/* <li className="nav-item">
                <div className="dropdown">
                    <Link className="nav-link text-light d-flex justify-content-between" onClick={toggleOptionsInformation} >Information <i class='bx bx-chevron-down'></i></Link>
                    {showOptionsInformation && (
                        <div className={`dropdown-content ${showOptionsInformation ? 'show' : ''}`}>
                            <button className="nav-link text-light option" onClick={gotoSOA}>Understanding SOA</button>
                            <button className="nav-link text-light option" onClick={gotoSCA}>Senior Citizen Act</button>
                            <button className="nav-link text-light option" onClick={gotoMC}>Magna Carta</button>
                        </div>
                    )}
                </div>
            </li> */}
            <li className="nav-item">
                <Link className="nav-link text-light" onClick={gotoPowerWatch} smooth={true} duration={500}>PowerWatch</Link>
                {/* <a className='nav-link hover-dark text-light'>
                    Rate
                </a> */}
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" onClick={gotoAnnouncement} smooth={true} duration={500}>Announcements</Link>
                {/* <a className='nav-link hover-dark text-light'>
                    Announcements
                </a> */}
            </li>
            <li className="nav-item">
            <div className="dropdown">
                    <Link className="nav-link text-light d-flex justify-content-between" onClick={toggleOptionsHelp} >Help & Support <i class='bx bx-chevron-down'></i></Link>
                    {showOptionsHelp && (
                        <div className={`dropdown-content ${showOptionsHelp ? 'show' : ''}`}>
                            {/* <button className="nav-link text-light option" onClick={gotoEC}>Electronic Connections</button> */}
                            <button className="nav-link text-light option" onClick={gotoSC}>Service Center</button>
                            <button className="nav-link text-light option" onClick={gotoDF}>Download Forms</button>
                            {/* Add more options as needed */}
                        </div>
                    )}
                </div>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link text-light" onClick={gotoRate} smooth={true} duration={500}>Rate</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-light" onClick={gotoContact} smooth={true} duration={500}>Contact</Link>
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link text-light" onClick={gotoProfile} smooth={true} duration={500}>Jerika Soriano</Link>
            </li> */}
            
            <hr className="text-light"/>
            <li className="nav-item">
                <a onClick={gotoProfile} className="nav-link nav-link1 text-center bg-danger text-light d-flex justify-content-center align-items-center">
                    <i class='bx bx-user me-2'></i>
                    <span>Jerika Soriano</span>
                </a>
            </li>
            <li className="nav-item">
                <a onClick={gotoLogin} className="nav-link nav-link1 text-center bg-danger mt-3 text-light">
                    Logout
                </a>
            </li>
        </ul>
    </div>

    {/* <div class="page-content fixed-top bg-1" id="content">
        <div className="d-flex justify-content-between px-2 py-2">
            <a class="user-style ms-auto" href="#"><i class='bx bxs-user-circle user--icon'></i> Jerika Soriano</a> 
        </div>
    </div> */}
    </>
   
   
  )
}

export default Sidebar