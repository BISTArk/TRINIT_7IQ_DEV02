import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../redux-store/actions/authAction";

const Register = () => {
  const dispatch = useDispatch();
  const initialState = {
    username: "",
    email: "",
    name: "",
    password: "",
  };
  const [newEntry, setNewEntry] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newEntry);
    dispatch(signUpUser(newEntry));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          username
        </label>
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          onChange={(e) =>
            setNewEntry({ ...newEntry, username: e.target.value })
          }
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          aria-describedby="emailHelp"
          onChange={(e) => setNewEntry({ ...newEntry, email: e.target.value })}
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          onChange={(e) =>
            setNewEntry({ ...newEntry, password: e.target.value })
          }
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Register;
