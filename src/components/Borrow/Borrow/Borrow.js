import React from "react";

export default function Borrow(borrow) {
  const { askDate, closeDate, borrower, lender, book } = borrow;

  return (
    <div className="container">
      <div>
        <span>Propriétaire :</span> {lender.firstName} {lender.lastName}
      </div>
      <div>
        <span>Enmprunteur :</span> {borrower.firstName} {borrower.lastName}
      </div>
      <div>
        <span>Date de la demande</span> : {askDate}
      </div>
      <div>
        <span>Livre</span>
        <div>
          <span>titre:</span> {book.title}
        </div>
        <div>
          <span>Catégorie:</span> {book.category}
        </div>
      </div>
    </div>
  );
}
