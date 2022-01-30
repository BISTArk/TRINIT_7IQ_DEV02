import "./userhome.css";
import { Button } from "react-bootstrap";
import bugImg from "../../assets/bug.png";
import { Link } from "react-router-dom";
function Home() {
  function handleLogout() {
    alert("Do you want to logout?");
  }
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
              <td>cell1_1</td>
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
              <td>cell5_1</td>
              <td>cell5_1</td>
              <td>cell6_1</td>
            </tr>
            <tr>
              <td>cell1_2</td>
              <td>cell2_2</td>
              <td>cell3_2</td>
              <td>cell4_2</td>
              <td>cell5_2</td>
              <td>cell5_1</td>
              <td>cell6_2</td>
            </tr>
            <tr>
              <td>cell1_3</td>
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
              <td>cell1_1</td>
              <td>cell2_1</td>
              <td>cell3_1</td>
              <td>cell4_1</td>
              <td>cell5_1</td>
              <td>cell5_1</td>
              <td>cell6_1</td>
            </tr>
            <tr>
              <td>cell1_2</td>
              <td>cell2_2</td>
              <td>cell3_2</td>
              <td>cell4_2</td>
              <td>cell5_2</td>
              <td>cell5_1</td>
              <td>cell6_2</td>
            </tr>
            <tr>
              <td>cell1_3</td>
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
