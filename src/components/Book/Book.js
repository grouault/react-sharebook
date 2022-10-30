import React from "react";

import "./Book.scss";
import bookImgDefault from "../../assets/images/book.png";
import bookImgBD from "../../assets/images/BD.jpg";

export default function Book(book) {
  const { id, title, author, category } = book;

  const bookImg = category === "BD" ? bookImgBD : bookImgDefault;

  return (
    <div id={id} className="book">
      <div className="image">
        <img src={bookImg} height="50" alt="book" />
      </div>
      <div>
        <span>Titre:</span> {title}
      </div>
      <div>
        <span>Auteur:</span> {author}
      </div>
      <div>Catégorie:{category}</div>
    </div>
  );
}
