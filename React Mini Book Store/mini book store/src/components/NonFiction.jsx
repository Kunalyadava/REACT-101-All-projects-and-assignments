import { useState } from "react";

export default function NonFiction({ books, BookCard }) {
  const[tog,setTog]=useState(false)
  return (
    <div data-testid='books-nonfiction'>
      <h1 data-testid='books-container-title'> {tog ? 'Fictional Books' : 'Non-Fiction Books'}</h1>

      <div className="books-container">
        {/* Display all Non-Fiction books here */}
        {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
      </div>
    </div>
  );
}
