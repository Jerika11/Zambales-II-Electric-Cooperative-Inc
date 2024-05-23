// import React, { useState } from 'react';
// import './adminstyle.css'
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     function gotoHome() {
//         if (!email || !password) {
//             setError('Email and password are required.');
//             return;
//         }
    
//         fetch('http://your-laravel-api.com/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//         })
//         .then(response => {
//             if (response.ok) {
//                 // Redirect to home page upon successful login
//                 navigate('/home');
//             } else {
//                 throw new Error('Invalid email or password');
//             }
//         })
//         .catch(error => setError(error.message));
//     }

//     return (
//         <div>
//             <section id="herosec">
//                 <div className='container-fluid'>
//                     <div className='card card-login m-auto p-3 border-0 shadow'>
//                         <h3>Login</h3>
//                         <form>
//                             <Row>
//                                 <Col lg={12} md={12} className='mt-3'>
//                                     <label>Email</label>
//                                     <input
//                                         type="email"
//                                         className='form-control'
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                 </Col>
//                                 <Col lg={12} md={12} className='mt-3'>
//                                     <label>Password</label>
//                                     <input
//                                         type="password"
//                                         className='form-control'
//                                         value={password}
//                                         onChange={(e) => setPassword(e.target.value)}
//                                     />
//                                 </Col>
//                             </Row>
//                             <button type="button" onClick={gotoHome} className='btn btn-danger mt-3 w-100'>Login</button>
//                             {error && <p className="text-danger mt-2">{error}</p>}
//                         </form>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Login;

import React from 'react';
import './adminstyle.css'
import Logo from '../../Assets/zamecoLOGO.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    function gotoHome(event) {
        navigate('/admin/dashboard');
    }
  return (
    <>
    <div className='login--container'>
        <div className='login--container-holder'>
            <div className='herosec'></div>
            <div className='card card--login ' data-aos="fade-left">
                <div className='login--logo'>
                    <img src={Logo} alt='Logo'/>
                </div>
                <h4 className='text-danger text-center fw-bold'>Login in your Account!</h4>
                <label className='mt-3'>Email:</label>
                <input className='form-control p-2'/>
                <label className='mt-3'>Password:</label>
                <input type="password" className='form-control p-2'/>
                <button className='btn btn-danger mt-3 p-2' onClick={gotoHome}>Login</button>

                <div className="links-tray">
                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                    <a href="#" class="linkedin me-4"><i class="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </div>
       
    </div>
    
    </>
  )
}

export default Login