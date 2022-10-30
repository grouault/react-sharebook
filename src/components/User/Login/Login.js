import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.scss";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log("handleChange");
    const newData = { ...loginForm };
    newData[e.target.name] = e.target.value;
    setLoginForm(newData);
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit");
    console.log("loginForm = ", loginForm);
    e.preventDefault();
  };

  return (
    <div className="container login-form">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={loginForm.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={loginForm.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Se connecter
        </button>

        <div className="text-center">
          <p>
            Pas encore membre? <Link to="/register">S'inscrire</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
