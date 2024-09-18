import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      
      <div className="bg-purple">
        <footer
          className="container d-flex flex-wrap 
          justify-content-between align-items-center py-4 "
        >
          <p className="col-md-6 mb-0 text-white ">© 2024 Community Health Center. All Rights Reserved.</p>
          <Link className='btn btn-outline-light' to="/addappointment">Add Appointment</Link>

        </footer>
      </div>
    </div>
    
  );
};