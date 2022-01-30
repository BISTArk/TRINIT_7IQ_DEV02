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
            
                <td className="showbugg"> <Link to="/show" style={{textDecoration: "none", color:"black"}}>cell1_1 </Link> </td>
               
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
              <td>cell5_1</td>
              <td>cell5_1</td>
              <td>cell6_1</td>
              </tr>
              
            <tr>
            <td className="showbugg"> <Link to="/show" style={{textDecoration: "none", color:"black"}}>cell1_1 </Link> </td>
              <td>cell2_2</td>
              <td>cell3_2</td>
              <td>cell4_2</td>
              <td>cell5_2</td>
              <td>cell5_1</td>
              <td>cell6_2</td>
            </tr>
            <tr>
            <td className="showbugg"> <Link to="/show" style={{textDecoration: "none", color:"black"}}>cell1_1 </Link> </td>
              <td>cell2_3</td>
              <td>cell3_3</td>
              <td>cell4_3</td>
              <td>cell5_3</td>
              <td>cell5_1</td>
              <td>cell6_3</td>
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
            <td className="showbugg"> <Link to="/show" style={{textDecoration: "none", color:"black"}}>cell1_1 </Link> </td>
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
              <td>cell5_1</td>
              <td>cell5_1</td>
              <td>cell6_1</td>
            </tr>
            <tr>
            <td className="showbugg"> <Link to="/show" style={{textDecoration: "none", color:"black"}}>cell1_1 </Link> </td>
              <td>cell2_2</td>
              <td>cell3_2</td>
              <td>cell4_2</td>
              <td>cell5_2</td>
              <td>cell5_1</td>
              <td>cell6_2</td>
            </tr>
            <tr>
            <td className="showbugg"> <Link to="/show" style={{textDecoration: "none", color:"black"}}>cell1_1 </Link> </td>
              <td>cell2_3</td>
              <td>cell3_3</td>
              <td>cell4_3</td>
              <td>cell5_3</td>
              <td>cell5_1</td>
              <td>cell6_3</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
