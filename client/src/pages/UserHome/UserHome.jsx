import "./userhome.css";
import { Button } from "react-bootstrap";
import bugImg from "../../assets/bug.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import store from "../../redux-store/store.js";

function Home() {
  const userInfo = store.getState().signIn.userInfo;
  console.log(userInfo)
  function handleLogout() {
    if (window.confirm("Do you want to logout?")) {
      window.location.href = "/loguser";
    }
  }

  const [bugs, setBugs] = useState([]);

  useEffect(async () => {
    let x = { bugs: userInfo.bugs };

    //fetch post
    let info = await fetch("http://localhost:5000/api/bug/getsomeBug", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(x),
    });
    let data = await info.json();
    console.log(data);
    setBugs(data);
  }, []);

  return (
    <div className="homePage">
      <div className="headerHome">
        <img src={bugImg} alt="" className="bugImgHome" />
        <h1 className="homeh1">Bug Tracker</h1>
      </div>
      <div className="buttonHome">
        <Link to="/addbug">
          <Button variant="primary" type="submit">
            Raise a bug!
          </Button>
        </Link>
        <Button variant="outline-danger" type="submit" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="assignedTable">
        <h1 className="assigned">Assigned Bugs</h1>
        <table class="unstyledTable">
          <thead>
            <tr>
              <th>Bug Title</th>
              <th>Content</th>
              <th>Organization</th>
              <th>Date raised</th>
              <th>Threat Level</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
           
            <tr>
            
                <td className="showbugg"> <Link to="/show" style={{textDecoration: "none", color:"black"}}>Add responsiveness </Link> </td>
               
              <td className="lessBold">Make the login page responsive, the input tags are out of place</td>
              <td>Sprinklr</td>
              <td>21-2-2022</td>
              <td>High</td>
              <td>24-2-2022</td>
              <td>Pending</td>
              </tr>
              
            <tr>
            <td className="showbugg"> <Link to="/show" style={{textDecoration: "none", color:"black"}}>APIs are not working </Link> </td>
              <td className="lessBold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</td>
              <td>TCS</td>
              <td>12-12-2021</td>
              <td>Low</td>
              <td>2-3-2022</td>
              <td>Resolved</td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="allBugs">
        <h1 className="assigned">All Bugs</h1>
        <table class="unstyledTable">
          <thead>
            <tr>
              <th>Bug Title</th>
              <th>Content</th>
              <th>Organization</th>
              <th>Date raised</th>
              <th>Threat Level</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td className="showbugg"> <Link to="/show" style={{textDecoration: "none", color:"black"}}>Docker Issue</Link> </td>
              <td>The div is not working pls help</td>
              <td>Micro</td>
              <td>13-01-2022</td>
              <td>TBD</td>
              <td>Yet to assign</td>
              <td>Pending</td>
            </tr>
            <tr>
            <td className="showbugg"> <Link to="/show" style={{textDecoration: "none", color:"black"}}>Bug 5</Link> </td>
              <td>Docker container issues</td>
              <td>Micro</td>
              <td>13-01-2022</td>
              <td>Low</td>
              <td>14-01-2022</td>
              <td>Resolved</td>
            </tr>
          
            <tr>
            <td className="showbugg"> <Link to="/show" style={{textDecoration: "none", color:"black"}}>APIs are not working </Link> </td>
              <td className="lessBold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</td>
              <td>TCS</td>
              <td>12-12-2021</td>
              <td>Low</td>
              <td>2-3-2022</td>
              <td>Resolved</td>
            </tr>
            
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
