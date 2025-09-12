import { Link } from "react-router-dom";
import Nav from './Nav'

function Dashboard() {
  return (
    <div className="dashboard">

     <Nav />


      <h1>Who's Watching?</h1>

      <div className="profile-icons">
        <Link to = '/recruiter' style={{ textDecoration: 'none' }}> 
          <div className="profile">
            <img src="/images/recruiter.jpg" alt="Recruiter" width="200" />
            <p>Recruiter 💼</p>
          </div>
        </Link>

        <Link to = '/stalker' style={{ textDecoration: 'none' }}> 
          <div className="profile">
            <img src="/images/stalker.jpg" alt="Tech Stalker" width="200" />
            <p>Stalker 😏</p>
          </div>
        </Link>  

        </div>
    </div>
  );

}





export default Dashboard