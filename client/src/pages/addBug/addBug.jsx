import "./addBug.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
function addBug() {
  return (
    <div>
      <div className="headerForm">
        <h1 className="headerFormh1">Raise a Bug</h1>
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Bug title</Form.Label>
          <Form.Control type="email" placeholder="Enter a title for your bug" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Bug report</Form.Label>
          <Form.Control
            className="textareaboot"
            as="textarea"
            type="password"
            placeholder="Enter the details about the bug....."
          />
          <Form.Text className="text-muted">
            Keep it breif and simple (less than 200 words)
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Organization</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Organization list</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">

              </Form.Group>
              <div className="buttonBoot">
                  <Button variant="primary" type="submit" >
                      
          Raise
                  </Button>
                  <Button variant="primary"  >
                      
                      Cancel
                              </Button>
                  </div>
      </Form>
    </div>
  );
}

export default addBug;
