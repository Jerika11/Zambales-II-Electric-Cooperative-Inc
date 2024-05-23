import React, { useState, useEffect } from 'react';
import Navibar from '../Navbar';
import Foot from '../Footer';
import Image1 from './../../../Assets/Poster1.jpg';

const Job_opportunity = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const [filter, setFilter] = useState('');
  const [selectedJob, setSelectedJob] = useState(null); // State to store selected job


  const jobOpportunities = [
    { id: 1,department: 'Information Technology', title: 'IT Hardware and Network Administrator',description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus.",requirements: "Resume, Diploma (Photo Copy), Barangay Clearance, 2pcs (2X2 picture), Photo Copy of PSA/NSO Birth Certificate, Photocopy of Employment Certificates ",qualification: "Must be a graduate of BS Computer Engineering  / BS ComSci or BS Information Technology;, Must have at least 3 years of Experience in computer networking, Must have knowledge in network services",deadline: "2024-04-19",  datePosted: '2024-03-19' },
    { id: 2,department: 'Information Technology', title: 'Data Scientist',description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus.", requirements: "Resume, Diploma (Photo Copy), Barangay Clearance, 2pcs (2X2 picture), Photo Copy of PSA/NSO Birth Certificate, Photocopy of Employment Certificates ",qualification: "Must be a graduate of BS Computer Engineering  / BS ComSci or BS Information Technology;, Must have at least 3 years of Experience in computer networking, Must have knowledge in network services",deadline: "2024-04-19", datePosted: '2024-03-18' },
    { id: 3,department: 'Information Technology', title: 'UI/UX Designer',description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus.", requirements: "Resume, Diploma (Photo Copy), Barangay Clearance, 2pcs (2X2 picture), Photo Copy of PSA/NSO Birth Certificate, Photocopy of Employment Certificates ",qualification: "Must be a graduate of BS Computer Engineering  / BS ComSci or BS Information Technology;, Must have at least 3 years of Experience in computer networking, Must have knowledge in network services",deadline: "2024-04-19", datePosted: '2024-03-17' },
    { id: 4,department: 'Human Resources', title: 'Product Manager',description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus.", requirements: "Resume, Diploma (Photo Copy), Barangay Clearance, 2pcs (2X2 picture), Photo Copy of PSA/NSO Birth Certificate, Photocopy of Employment Certificates ",qualification: "Must be a graduate of BS Computer Engineering  / BS ComSci or BS Information Technology;, Must have at least 3 years of Experience in computer networking, Must have knowledge in network services",deadline: "2024-04-19", datePosted: '2024-03-16' },
    { id: 5,department: 'Marketing', title: 'Marketing Analyst',description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus.", requirements: "Resume, Diploma (Photo Copy), Barangay Clearance, 2pcs (2X2 picture), Photo Copy of PSA/NSO Birth Certificate, Photocopy of Employment Certificates ",qualification: "Must be a graduate of BS Computer Engineering  / BS ComSci or BS Information Technology;, Must have at least 3 years of Experience in computer networking, Must have knowledge in network services",deadline: "2024-04-19", datePosted: '2024-03-15' },
    { id: 6,department: 'Information Technology', title: 'Quality Assurance Tester',description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus.", requirements: "Resume, Diploma (Photo Copy), Barangay Clearance, 2pcs (2X2 picture), Photo Copy of PSA/NSO Birth Certificate, Photocopy of Employment Certificates ",qualification: "Must be a graduate of BS Computer Engineering  / BS ComSci or BS Information Technology;, Must have at least 3 years of Experience in computer networking, Must have knowledge in network services",deadline: "2024-04-19", datePosted: '2024-03-14' },
  ];
  const filteredJobs = filter ? jobOpportunities.filter(job => job.department.toLowerCase().includes(filter.toLowerCase())) : jobOpportunities;

  const viewJobDetails = (jobId) => {
    const job = jobOpportunities.find(job => job.id === jobId);
    setSelectedJob(job);
  };
  return (
    <div className="job-opportunities-container">
      <Navibar/>
      <div className="job-opportunities-list">
        <div className="opportunities-header" style={{ 
          backgroundImage: `url('https://www.charthop.com/wp-content/uploads/2022/08/workplace-culture.jpg')`, // Enclose url() in backticks and use string interpolation
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
        }}>
          <div style={{ textAlign: 'center', paddingTop: '100px' }}>
            <h2 style={{ 
              color: 'white',
              fontWeight: '900',
              fontSize:'4.1rem',
              fontFamily:'Lato, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
              letterSpacing:'0.2px',
             }}>Join the Team</h2>
             <p  style={{ 
              color: 'white',
              fontWeight: '400',
              fontSize:'1.25rem',
              fontFamily:'Lato, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
             }}>Discover Your Perfect Job: Matching Your Interests and Skills</p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ 
            textAlign: 'center',
            color: '#31363F',
            fontWeight: '800',
            fontSize:'3.00rem',
            fontFamily:'Lato, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
            marginTop: '20px',
          }}>Available Jobs</h2>
          <div className="filter">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="mb-3"
            style={{
              padding: '0.375rem 0.75rem',
              borderRadius: '0.25rem',
              textAlign: 'center',
              textShadow: 'none',
              color: '#4f5457',
              backgroundColor: '#f4f4f4',
              border: '1px solid transparent',
              boxShadow: '0 0 0 1px rgba(43, 45, 80, .2), 0 2px 5px 0 rgba(43, 45, 80, .08), 0 1px 1.5px 0 rgba(0, 0, 0, .07), 0 1px 2px 0 rgba(0, 0, 0, .08)'
            }}
          >
            <option value="">Search by job title...</option>
            {Array.from(new Set(jobOpportunities.map(job => job.department))).map((department) => (
              <option key={department} value={department}>{department}</option>
            ))}
          </select>

          </div>
        </div>
        {/* Job listing grid */}
        <div className='container'>
          {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' ,marginBottom: '20px'}}>
            {filteredJobs.map(job => (
              <div key={job.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
                <h3>{job.title}</h3>
                <p>Date Posted: {job.datePosted}</p>
                <button className='btn btn-danger' onClick={() => viewJobDetails(job.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
              </div>
            ))}
          </div> */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' ,marginBottom: '20px'}}>
          {filteredJobs.map(job => (
            <div class="card mb-3" key={job.id}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Image1} class="img-fluid rounded-start" alt="Image"/>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{job.title}</h5>
                    <p class="card-text">Date Posted: {job.datePosted}</p>
                    <p class="card-text">Deadline: {job.deadline}</p>
                    <button className='btn btn-danger' onClick={() => viewJobDetails(job.id)} data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        
      </div>
      <Foot/>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{selectedJob ? selectedJob.title : ''}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {selectedJob && (
                <>
                  <p><b>Department: </b>{selectedJob.department}</p>
                  <p><b>About the Job:</b></p>
                  <p>{selectedJob.description}</p>
                  
                  <div className='row'>
                    <div className='col-md-6'>
                      <p><b>Requirements:</b></p>
                      <ul>
                        {selectedJob.requirements.split(',').map((requirement, index) => (
                          <li key={index}>{requirement.trim()}</li>
                        ))}
                      </ul>
                    </div>
                    <div className='col-md-6'>
                      <p><b>Qualification:</b></p>
                      <ul>
                        {selectedJob.qualification.split(',').map((qualification, index) => (
                          <li key={index}>{qualification.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <p><b>Date Posted:</b> {selectedJob.datePosted}</p>
                  <p><b>Deadline:</b> {selectedJob.deadline}</p>
                  {/* Add more details as needed */}
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger">Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
function viewJobDetails(jobId) {
  console.log('Viewing job details for job ID:', jobId);
}

export default Job_opportunity