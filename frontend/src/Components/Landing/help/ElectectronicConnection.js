import React, {useEffect} from 'react';
import Navibar from '../Navbar';
import Footer from '../Footer';

const ElectectronicConnection = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
        <Navibar/>
         <div className='container'>
            <h3 className='mt-3 fw-bold'>Electric Connections</h3>
            <p><b>Informs requirements for New Connections (CWDC/IO) –</b> applicants will inquire on the requirements, fees, and procedures for their connection. Applicants can visit the coop’s Sub-Office, Collection Office, or Main Office for additional information.</p>
            <p><b>Evaluates and accepts applications with complete required documents (CWDC/IO) –</b> the detailed Customer Welfare Desk Coordinator will evaluate the different requirements submitted by the applicant.</p>
            <p><b>Customer Welfare Desk Coordinator verifies records of applicants –</b> CWDC will verify the record of the applicant for possible negative data record from the system of the coop, or as basis for any possible recommendations.</p>
            <p><b>Customer Welfare Desk Coordinator forwards to Service Center Supervisor for review –</b> CWDC will forward all submitted requirements to the Service Center Supervisor for further review and approval.</p>
            <p><b>Service Center Supervisor approves and direct housewiring inspector for validation –</b> once all requirements were fully evaluated approved, the SCS will instruct the Housewiring Inspector to conduct inspection with the applicant’s housewiring based on the detailed Electrical Plan submitted as reference.</p>
            <p><b>Housewiring Inspector prepares and submits reports to Area Operation Manager for approval –</b> after housewiring inspection has been conducted, a written report will be submitted to the Area Operation Manager for approval.</p>
            <p><b>Customer Welfare Desk Coordinator/Service Center Supervisor prepares Service Contract and Turn-On Order Form for applicant’s signing and Pre-Membership Seminar Schedule –</b> Contract of Service and Turn-On Order Form will be prepared by the CWDC or SCS as part of the procedure. Pre-Membership Seminar will follow after this. Its schedule is either Tuesday or Thursday, 8:30AM at the Main Office of ZAMECO II.</p>
            <p><b>Teller/Cashier accepts payment of service fees –</b> after attending the Pre-Membership Seminar, the applicant can now pay Service Fees at the Teller/Cashier. The following Service Fees are as follows:</p>
            <ul>
                <li className='text-primary'>Inspection Fee – Php168.00</li>
                <li className='text-primary'>Tapping Fee – Php168.00</li>
                <li className='text-primary'>Membership Fee – Php5.00</li>
                <li className='text-primary'>Power Bill Deposit – Php1,000.00 (Ordinary Kilowatt Hour Meter)</li>
            </ul>
            <p><b>Php3, 500.00(Heavy Duty Kilowatt Hour Meter)</b></p>
            <p><b>Customer Welfare Desk Coordinator prepares endorsement for approval by the Service Center</b></p>
            <p><b>Supervisor – </b>CWDC prepares all pertinent papers of the applicant endorsed to the SCS for finality of approval.</p>
            <p><b>Connection Team Executes Turn-On order (Connection Process) –</b> Members of the Connection Team proceed to the applicant’s location for the Connection of Electric Service.</p>
            <p><b>Connection Team submits accomplishment report to CWDC/Concerned office for data recording –</b> after the tapping; the Connection Team Head submits report to the Customer Welfare Desk Coordinator data recording with ZAMECO II’s system for Billing and Mapping purposes.</p>
            <p><b>CWDC informs ISD for inclusion in the Masterlist –</b> the Customer Welfare Desk Coordinator coordinates with Institutional Services Department Head for the inclusion of the newly tapped individual in the Masterlist of Member-Consumers.</p>
            
            
            <hr/>
         </div>
         <Footer/>
    </div>
  )
}

export default ElectectronicConnection