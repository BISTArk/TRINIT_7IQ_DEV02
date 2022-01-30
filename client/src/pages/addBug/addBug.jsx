import "./addBug.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import{useState,useEffect} from 'react';
import store from "../../redux-store/store.js";

function AddBug() {
  const userInfo = store.getState().signIn.userInfo;
  console.log(userInfo);
  const [formd, setFormd] = useState({
    title: "",
    content: "",
    organization: null,
  });
  const [orgs, setOrgs] = useState([]);

  useEffect(async() => {
  
      //fetch get
      let info = await fetch("http://localhost:5000/api/bug/getallOrg");
      let data = await info.json();
      console.log(data);
      setOrgs(data.orgs);
  }, []);
  

  const handleClick = (e) => {
    e.preventDefault();
    if(window.confirm('Raise the bug?')){
      window.location.href ="/home";
    };
    console.log(formd); 
    const data = {
      title: formd.title,
      content: formd.content,
      organization: formd.organization,
      authorName: userInfo.name,
      authorIsUser: userInfo.employeeLevel === 0 ? true : false,
    }

    //post fetch 
    fetch("http://localhost:5000/api/bug/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formd),
    })

  }
return(
    <div>
      <div className="headerForm">
        <h1 className="headerFormh1">Raise a Bug</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Bug title</Form.Label>
          <Form.Control type="email" placeholder="Enter a title for your bug" onChange={(e)=>setFormd({...formd,title:e.target.value})}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Bug report</Form.Label>
          <Form.Control
            className="textareaboot"
            as="textarea"
            type="password"
            placeholder="Enter the details about the bug....."
            onChange={(e)=>setFormd({...formd,content:e.target.value})}
          />
          <Form.Text className="text-muted">
            Keep it breif and simple (less than 200 words)
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Organization</Form.Label>
          <Form.Select aria-label="Default select example" onChange={(e)=>setFormd({...formd,organization:e.target.value})}>
            {orgs.map((org) => (
              <option value={org.id}>{org.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <div className="buttonBoot">
          <Button variant="primary" onClick={handleClick}>
            Raise
          </Button>
          <Link to="/home">
            <Button variant="primary">Cancel</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}


export default AddBug;
