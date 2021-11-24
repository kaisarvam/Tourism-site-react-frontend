import React from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "./Login.css";
import useAllContext from "../../Hooks/useAllContext";
import Slide from "react-reveal/Slide";
import { useState ,useEffect } from "react";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [email, setEmail] = useState([]);
  const [pass, setPass] = useState([]);
  const location = useLocation();
  const history = useHistory();
  const data = useAllContext();
  console.log("all data in login is ",data);
  const { SignInGoogle, SignInWithEmail, error } = data[0]

  const redirect_uri = location.state?.from || "/home";

  const handleSignIn = () => {
    SignInGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value.trim());
  };
  const handlepass = (e) => {
    e.preventDefault();
    setPass(e.target.value);
  };

  const handleSubmit = (e, email, pass) => {
    e.preventDefault();

    SignInWithEmail(email, pass);
  };
  return (
    <div className="mt-5 mt-5 text-light">
      
      <h1>
        <strong>
      
          <span className="text-warning">Login</span> page
        </strong>
      </h1>
      <br/>
      {error}
      <br /> <br />
      <div className="container w-50">
        <div>
          <form
            onSubmit={(e) => {
              handleSubmit(e, email, pass);
            }}
          >
            <div className="input-group">
              <Slide right>
                <input
                  type="email"
                  onBlur={(e) => {
                    handleEmail(e);
                  }}
                  className="form-control"
                  required
                  placeholder="UserEmail"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </Slide>
            </div>
            <br />
            <div className="input-group">
              <Slide left>
                <input
                  type="password"
                  onBlur={(e) => {
                    handlepass(e);
                  }}
                  className="form-control"
                  required
                  placeholder="Password"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </Slide>
            </div>
            <br />
            <Slide top>
              <button className=" btn btn-success w-75" type="Submit">
                LogIn
              </button>
            </Slide>
          </form>
          <br />
          <p>or use</p>
          <button className="facebook">
            {" "}
            <i className="fab fa-facebook-square"></i>{" "}
          </button>
          <button className="google" onClick={handleSignIn}>
            {" "}
            <i className="fab fa-google"></i>{" "}
          </button>
          <button className="facebook">
            {" "}
            <i className="fab fa-github"></i>{" "}
          </button>
          <br />
          <br />
          <NavLink to="/forgotpass"> Forgot Password </NavLink>
          or
          <NavLink to="/signup" className="">
            {" "}
            Signup{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
