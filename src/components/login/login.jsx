import React from "react";
import { Link } from "react-router-dom";
import Back from "../common/back/Back";
import "./login.css";

const Login = () => {
  return (
    <>
      <Back title="Login" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row"></div>
          <div className="right row">
            <h1>Login</h1>
            <form action="">
              <input className="flexSB" type="text" placeholder="Username" />
              <input
                className="flexSB"
                type="password"
                placeholder="Password"
              />
              <button className="primary-btn">Login</button>
            </form>
            <span>
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
