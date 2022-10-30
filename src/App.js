import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import EditBook from "./components/Book/EditBook/EditBook";
import ListBooks from "./components/Book/ListBooks/ListBooks";
import MyBooks from "./components/Book/MyBooks/MyBooks";
import MyBorrow from "./components/Borrow/MyBorrow/MyBorrow";
import Menu from "./components/Menu/Menu";
import RegisterUser from "./components/User/Register/RegisterUser";
import Login from "./components/User/Login/Login";

import "bootswatch/dist/lumen/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/liste-books" element={<ListBooks />} />
        <Route path="/add-book" element={<EditBook />} />
        <Route path="/edit-book/:bookId" element={<EditBook />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/my-borrows" element={<MyBorrow />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
