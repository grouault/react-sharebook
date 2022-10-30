import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./RegisterUser.scss";

export default function RegisterUser() {
  const [messageValidation, setMessageValidation] = useState("");
  const [registerForm, setRegisterForm] = useState({
    email: "",
    nom: "",
    prenom: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    console.log("handleChange");
    const newData = { ...registerForm };
    newData[e.target.name] = e.target.value;
    setRegisterForm(newData);
  };

  const handleSubmit = (e) => {
    console.log("handleSubmit");

    e.preventDefault();

    console.log("Submit : ", registerForm);

    if (
      registerForm.password.length < 6 ||
      registerForm.confirmPassword.length < 6
    ) {
      setMessageValidation("Le mot de passe est trop court");
      return;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      setMessageValidation("Les mots de passes ne sont pas les mêmes");
      return;
    }

    setMessageValidation("");
  };

  return (
    <div className="container register-form">
      {console.log("render")}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={registerForm.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="firstname">
            Prénom
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="form-control"
            value={registerForm.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="lastname">
            Nom
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="form-control"
            value={registerForm.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="form-label" htmlFor="password">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={registerForm.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label" htmlFor="confirmPassword">
            Confirmer le mot de passe
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="form-control"
            value={registerForm.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <p className="text-danger">{messageValidation}</p>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          S'inscire
        </button>

        <div className="text-center">
          <p>
            Déjà membre? <Link to="/login">S'authentifier</Link>
          </p>
        </div>
      </form>
    </div>
  );
}
