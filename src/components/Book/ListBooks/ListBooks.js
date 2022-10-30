import React, { useState, useEffect } from "react";
import Book from "../Book";

import "../ListBook.scss";

export default function ListBooks() {
  const allBooks = [
    { id: 1, category: "BD", title: "tintin en Amérique", author: "Hergé" },
    { id: 2, category: "BD", title: "tintin au tibet", author: "Hergé" },
    { id: 3, category: "BD", title: "tintin au Congo", author: "Hergé" },
    {
      id: 4,
      category: "BD",
      title: "Astérix chez les Bretons",
      author: "Uderzo",
    },
    {
      id: 5,
      category: "Roman",
      title: "Au bonheur des dames",
      author: "Emile Zola",
    },
  ];

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const id = setTimeout(() => {
      setBooks(allBooks);
    }, 2000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="container">
      <h1>Livres disponibles</h1>
      <div className="list-container">
        {books.length > 0 ? (
          books.map((book) => (
            <div key={book.id} className="book-container">
              <Book {...book} />
              <div className="btns">
                <button className="btn btn-primary btn-sm">Emprunter</button>
              </div>
            </div>
          ))
        ) : (
          <div>Aucun livre n'est disponible</div>
        )}
      </div>
    </div>
  );
}
