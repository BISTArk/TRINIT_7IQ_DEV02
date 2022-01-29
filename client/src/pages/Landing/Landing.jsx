import "./Landing.scss"

function Landing() {
  return <div className='mainland'>
    <div className="title">
      <img src="" alt="" className="bugimg"/>
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
        <img className="icon"></img>
        <button className="create-btn">Create Organization</button>
        <p>
        Register your Organization on the Bug tracking system and add employees
        </p>
        <button className="login-btn">Admin Login</button>
      </section>
      <section className="user">
      <img className="icon"></img>
        <button className="create-btn"> Register as User </button>
        <p>
        Register as user/employee, get added by an organization and raise a bug</p>
        <button className="login-btn">User Login</button>
      </section>
    </div>
  </div>;
}

export default Landing;
