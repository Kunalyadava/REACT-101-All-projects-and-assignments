import { useState } from "react";

export default function Fiction({books,BookCard}) {
  const[tog,setTog]=useState(false)

  return (
    <div data-testid='books-fiction'>
      <h1 data-testid='books-container-title'> {!tog ? 'Fictional Books' : 'Non-Fiction Books'}</h1>

      <div className="books-container">
        {/* Map all Fictional Books here */}
        {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
      </div>
    </div>
  );
}
