import React from "react";
import { Link } from "react-router-dom";
import Back from "../common/back/Back";
import "./register.css";

const Register = () => {
  return (
    <>
      <Back title="Register" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row"></div>
          <div className="right row">
            <h1>Create Account</h1>
            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button className="primary-btn">Create Account</button>
            </form>
            <div className="account-message">
              <span>
                Already have an account? <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
