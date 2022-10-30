import React, { useEffect, useState } from "react";
import Book from "../../Book/Book";
import Borrow from "../Borrow/Borrow";

import "./MyBorrow.scss";

export default function MyBorrow() {
  const [myBorrows, setMyBorrows] = useState([]);

  const myBorrowsInit = [
    {
      id: 1,
      askDate: "2022/05/10",
      closeDate: "",
      lender: {
        firstName: "Jack",
        lastName: "Doe",
      },
      borrower: {
        firstName: "Pascal",
        lastName: "Dulin",
      },
      book: {
        id: 1,
        category: "BD",
        title: "tintin en Amérique",
        author: "Hergé",
      },
    },
    {
      id: 2,
      askDate: "2022/05/10",
      closeDate: "",
      lender: {
        firstName: "Joe",
        lastName: "Duc",
      },
      borrower: {
        firstName: "Arthur",
        lastName: "Lopez",
      },
      book: {
        id: 2,
        category: "BD",
        title: "tintin au tibet",
        author: "Hergé",
      },
    },
  ];

  useEffect(() => {
    console.log("[MyBorrow] - mount");
    const id = setTimeout(() => {
      setMyBorrows(myBorrowsInit);
    }, 2000);

    return () => {
      console.log("[MyBorrow] - unmount");
      clearTimeout(id);
    };
  }, []);

  const handleClore = (e) => {
    console.log("clore book : ", e.target.value);
  };

  return (
    <div className="container">
      <h2>Mes emprunts</h2>
      {myBorrows.length > 0 ? (
        <div className="my-borrows">
          {myBorrows.map((borrow, index) => (
            <div key={index} className="borrow-container">
              <Borrow {...borrow} />
              {borrow.closeDate === "" && (
                <div className="btns">
                  <button
                    className="btn btn-primary"
                    onClick={handleClore}
                    value={borrow.book.id}
                  >
                    clore
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>Vous n'avez aucun emprunt.</div>
      )}
    </div>
  );
}
