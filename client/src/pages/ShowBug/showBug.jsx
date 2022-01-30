import "./showBug.css"
import { Link } from "react-router-dom";
function showBug() {
  function handleUpdate() {
    alert("Your request has been sent to the admin");
  }
    return (
        <div className="showPage">
        <h2 class="pageTitle">Bug report</h2>
<div class="bookDetails">
  <div class="detailsGrid">
    <div class="bookLabel">Bug title :</div>
    <div class="bookLabel1">bug title</div>
    <div class="bookLabel">Content :</div>
    <div class="bookLabel1">Lorem ipsum</div>
    <div class="bookLabel">Date raised :</div>
    <div class="bookLabel1">21-11-2021</div>
    <div class="bookLabel">Organization :</div>
            <div class="bookLabel1">asdasdaded</div>
            <div class="bookLabel">Threat Level :</div>
    <div class="bookLabel1">Danger</div>
    <div class="bookLabel">Deadline :</div>
    <div class="bookLabel1">21-11-2021</div>
  </div>

  <div class="buttonRowShow">
  
    <button class="updateButton" onClick={handleUpdate}>
           Resolve</button>
   <Link to="/home">
              <button class="cancelButton" >Back</button>
    </Link>
  </div>
</div>


    </div>)
}
export default showBug;