import React from "react";
import { fireAuth } from "../../Firebase.config";
import "./Login.styles.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    fireAuth
      .signInWithEmailAndPassword("webdev.byndasma@gmail.com", this.state.input)
      .catch(error => {
        const errorCode = error.code;
        if (errorCode === "auth/user-disabled") {
          console.log({ eError: "User is disabled", pError: "" });
        } else if (errorCode === "auth/user-not-found") {
          console.log({ eError: "User not found", pError: "" });
        } else if (errorCode === "auth/wrong-password") {
          alert("Wrong password");
        }
      })
      .then(success => {
        if (success) {
          alert("ADMIN LOGGED IN");
        }
      });
    this.setState({ input: "" });
  }
  render() {
    return (
      <div className="container">
        <div className="login-container">
          <form id="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              ADMINISTRATOR
              <input
                id="password"
                name="password"
                className="form-control"
                type="password"
                placeholder="enter password"
                value={this.state.input}
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <input
                id="submit"
                className="form-btn"
                type="submit"
                value="log in"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
