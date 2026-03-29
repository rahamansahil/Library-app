import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === Number(id))
  );

  if (!book) return <h2>Book not found</h2>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>Rating: {book.rating}</p>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}
