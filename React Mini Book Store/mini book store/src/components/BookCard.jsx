export default function BookCard({book}) {
  return (
    <div data-testid='book-card'>
        <img src={book.img} alt={book.title} />
        <b><div data-testid='book-card-title'>{book.title}<span>({book.year})</span></div></b>
        <div data-testid='book-card-author'>{book.author}</div>
        <div data-testid='book-card-price'>{book.price}</div>
    </div>
  )
}

