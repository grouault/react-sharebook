import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./EditBook.scss";

export default function EditBook() {
  const { bookId } = useParams();
  const [bookForm, setBookForm] = useState({
    title: "",
    author: "",
    category: 2,
  });

  const editBookTitle = bookId ? "Editer un livre" : "Ajouter un livre";

  const categories = [
    { id: 1, name: "Roman" },
    { id: 2, name: "Bande dessinée" },
    { id: 3, name: "Nouvelle" },
    { id: 4, name: "Manga" },
    { id: 5, name: "Livres d'histoire" },
  ];

  const handleBookForm = (e) => {
    console.log("init : bookForm ", bookForm);
    let newData = { ...bookForm };
    newData[e.target.name] = e.target.value;
    setBookForm(newData);
    setTimeout(() => {
      console.log("timetout : bookForm ", bookForm);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleForm validation : TODO");
    console.log("persist new Book : ", bookForm);
  };

  return (
    <div className="container edit-book">
      <h2 className="title mt-4">{editBookTitle} </h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="form-group row mt-2">
            <label htmlFor="title" className="form-label">
              Titre
            </label>
            <div className="col-sm">
              <input
                type="text"
                id="title"
                name="title"
                value={bookForm.title}
                className="form-control"
                onChange={handleBookForm}
              />
            </div>
          </div>

          <div className="form-group row mt-2">
            <label htmlFor="author" className="form-label">
              Auteur
            </label>
            <div className="col-sm">
              <input
                type="text"
                id="author"
                name="author"
                value={bookForm.author}
                className="form-control"
                onChange={handleBookForm}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="category" className="form-label mt-2">
              Catégories
            </label>
            <select
              className="form-select"
              id="category"
              name="category"
              onChange={handleBookForm}
              value={bookForm.category}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <div className="mt-5">
          <input type="submit" className="btn btn-primary" value="valider" />
        </div>
      </form>
    </div>
  );
}
