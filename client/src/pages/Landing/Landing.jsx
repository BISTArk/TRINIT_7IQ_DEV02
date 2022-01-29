import "./Landing.scss"
import orgimg from '../../assets/index.png'

function Landing() {
  return <div className='mainland'>
    <div className="title">
      <img src={orgimg} alt="" className="bugimg"/>
      <div className="text">
        <h1>
          Bug Tracker
        </h1>
        <h3>
          Raise and Resolve
        </h3>
      </div>
    </div>
    <div className="sections">
      <section className="org">
        <img className="icon" src={orgimg}></img>
        <button className="create-btn">Create Organization</button>
        <p>
        Register your Organization <br/> on the Bug tracking system and<br/> add employees
        </p>
        <button className="login-btn">Admin Login</button>
      </section>
      <section className="user">
      <img className="icon" src={orgimg}></img>
        <button className="create-btn"> Register as User </button>
        <p >
        Register as user/employee,<br/> get added by an organization<br/> and raise a bug</p>
        <button className="login-btn">User Login</button>
      </section>
    </div>
  </div>;
}

export default Landing;
