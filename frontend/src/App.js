// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import { Routes, Route } from 'react-router-dom';
import Login from "./Components/Admin/Login";
import Landing from "./Components/Landing/Landing";
import Dashboard from './Components/Admin/Dashboard';
import Bod from './Components/Landing/about/Bod';
import Awards from './Components/Landing/about/Awards';
import Job_opportunity from "./Components/Landing/about/Job_opportunity";
import Soa from "./Components/Landing/info/Soa";
import SeniorCitizenAct from "./Components/Landing/info/SeniorCitizenAct";
import MagnaCarta from "./Components/Landing/info/MagnaCarta";
import Powerwatch_Page from "./Components/Landing/powerwatch/Powerwatch_Page";
import ServiceCenter from "./Components/Landing/help/ServiceCenter";
import ElectectronicConnection from "./Components/Landing/help/ElectectronicConnection";
import DownloadForm from "./Components/Landing/help/DownloadForm";
import Rate from "./Components/Landing/Rate";
import Gallery from "./Components/Landing/about/Gallery";
import Events from "./Components/Landing/about/Events";
import FullDetails from "./Components/Landing/fullDetails"

// Admin
import AdminEvents from "./Components/Admin/Event";
import AdminPowerWatch from "./Components/Admin/PowerWatch";
import AdminRates from "./Components/Admin/Rate";
import AdminAnnouncement from "./Components/Admin/Announcement";
import AdminAnnouncementCreate from "./Components/Admin/Announcement/Create";
import AdminProfile from "./Components/Admin/Profile";

import AdminAwards from "./Components/Admin/AboutUs/Award";
import AdminBOD from "./Components/Admin/AboutUs/BOD";
import AdminJobOpportunity from "./Components/Admin/AboutUs/JobOpportunity";
import AdminDownloadForm from "./Components/Admin/Help/DownloadForm";
import AdminElectronicConnection from "./Components/Admin/Help/ElectronicConnection";
import AdminServiceCenter from "./Components/Admin/Help/ServicesCenter";
import AdminUnderstandingSOA from "./Components/Admin/Information/SOA";
import AdminSeniorCitizenAct from "./Components/Admin/Information/SCA";
import AdminMagnaCarta from "./Components/Admin/Information/MagnaCarta";
import AdminContact from "./Components/Admin/Contact";
import Update from "./Components/Admin/Announcement/Update";



function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Landing/>} exact />

          {/* ADMIN */}
          <Route path="/admin/login"  element={<Login/>} />
          
          <Route path="/admin/Dashboard" element={<Dashboard/>}/>
          <Route path="/admin/Events" element={<AdminEvents/>}/>
          <Route path="/admin/aboutus/Awards" element={<AdminAwards/>}/>
          <Route path="/admin/aboutus/BoardOfDirectors" element={<AdminBOD/>}/>
          <Route path="/admin/aboutus/JobOpportunity" element={<AdminJobOpportunity/>}/>
          <Route path="/admin/help/DownloadForm" element={<AdminDownloadForm/>}/>
          <Route path="/admin/help/ElectronicConnection" element={<AdminElectronicConnection/>}/>
          <Route path="/admin/help/ServiceCenter" element={<AdminServiceCenter/>}/>
          <Route path="/admin/Rates" element={<AdminRates/>}/>
          <Route path="/admin/PowerWatch" element={<AdminPowerWatch/>}/>
          <Route path="/admin/Announcement" element={<AdminAnnouncement/>}/>
          <Route path="/admin/Announcement/Create" element={<AdminAnnouncementCreate/>}/>
          <Route path="/admin/information/UnderstandingSOA" element={<AdminUnderstandingSOA/>}/>
          <Route path="/admin/information/SeniorCitizenAct" element={<AdminSeniorCitizenAct/>}/>
          <Route path="/admin/information/MagnaCarta" element={<AdminMagnaCarta/>}/>
          <Route path="/admin/Contact" element={<AdminContact/>}/>
          <Route path="/admin/Profile" element={<AdminProfile/>}/>
          <Route path="/admin/Announcement/Update/:id" element={<Update/>}/>
          <Route path="/admin/logout" element={<Login/>}/>

          {/* USER */}
          <Route path="/awards" element={<Awards/>}/>
          <Route path="/bod" element={<Bod/>}/>
          <Route path="/jobopportunity" element={<Job_opportunity/>}/>
          <Route path="/soa" element={<Soa/>}/>
          <Route path="/seniorcitizenact" element={<SeniorCitizenAct/>}/>
          <Route path="/magnacarta" element={<MagnaCarta/>}/>
          <Route path="/powerwatch" element={<Powerwatch_Page/>}/>
          <Route path="/servicecenter" element={<ServiceCenter/>}/>
          <Route path="/electronicconnection" element={<ElectectronicConnection/>}/>
          <Route path="/downloadform" element={<DownloadForm/>}/>
          <Route path="/rate" element={<Rate/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/fullDetails/:id" element={<FullDetails/>}/>
          {/* <Route path="/fullDetails/:id" component={FullDetails} /> */}

        </Routes>
        {/* fdskdklsfsdkljf */}
       
             </>
  );
}

export default App;
