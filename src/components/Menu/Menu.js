import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Menu() {
  const nav = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Accueil
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/my-books">
                Mes livres
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/liste-books">
                Livres disponibles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/my-borrows">
                Mes emprunts
              </Link>
            </li>
          </ul>
          <div>Bienvenue ...</div>
          <div>
            <Link className="nav-link" to="/">
              Se déconnecter
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
