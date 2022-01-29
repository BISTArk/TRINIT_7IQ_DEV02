import "./Landing.css"
import bugImg from '../../assets/bug.png'
import orgImg from '../../assets/bugSvg2.svg'
import userImg from '../../assets/bugSvg.svg'
<<<<<<< HEAD
import { Link } from "react-router-dom"

=======
import { NavLink as Link } from "react-router-dom";
>>>>>>> f850917b25187bfd8aeca42eaf51f4483d9a07a8

function Landing() {
  return <div className='mainland'>
    <div className="glass">
    <div className="title">
      <img src={bugImg} alt="" className="bugimg"/>
      <div className="text">
        <h1 className="LandingHeader">
          Bug Tracker
        </h1>
        <h3 className="headerSmol">
          Raise and Resolve
        </h3>
      </div>
    </div>
    <div className="sections">
      <section className="org">
          <img src={orgImg} className="orgImg"></img>
          <Link to="/regorg">
            <button className="create-btn">Create Organization</button>
            </Link>
        <p>
        Register your Organization <br/> on the Bug tracking system and<br/> add employees
<<<<<<< HEAD
        </p>
        <Link to='/logorg'><button className="login-btn">Admin Login</button></Link>
=======
          </p>
          <Link to="/logorg">
            <button className="login-btn">Admin Login</button>
            </Link>
>>>>>>> f850917b25187bfd8aeca42eaf51f4483d9a07a8
      </section>
      <section className="user">
          <img src={userImg} className="userImg"></img>
          <Link to="/reguser">
            
            <button className="create-btn2"> Register as User </button>
            </Link>
        <p >
            Register as user/employee,<br /> get added by an organization<br /> and raise a bug</p>
            <Link to="/loguser">
            <button className="login-btn">User Login</button>
            </Link>
        </section>
        </div>
    </div>
  </div>;
}

export default Landing;
