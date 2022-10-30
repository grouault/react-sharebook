import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Book from "../Book";
import "./MyBooks.scss";
import "../ListBook.scss";

export default function MyBooks() {
  const myBooks = [
    { id: 1, category: "BD", title: "tintin en Amérique", author: "Hergé" },
    { id: 3, category: "BD", title: "tintin au Congo", author: "Hergé" },
  ];

  const [books, setBooks] = useState([]);

  const nav = useNavigate();

  const updateBook = (e) => {
    nav(`/edit-book/${e.target.id}`);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setBooks(myBooks);
    }, 500);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="container">
      <h1>My books</h1>
      {books && books.length > 0 ? (
        <div className="list-container">
          {books.map((book) => (
            <div key={book.id} className="book-container">
              <Book {...book} />
              <div className="btns">
                <button
                  className="btn btn-primary btn-sm"
                  id={book.id}
                  onClick={updateBook}
                >
                  Modifier
                </button>
                <button className="btn btn-primary btn-sm">Supprimer</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div>Vous n'avez pas déclaré de livres</div>
        </div>
      )}
      <div className="add-btn">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => nav("/add-book")}
        >
          Nouveau
        </button>
      </div>
    </div>
  );
}
