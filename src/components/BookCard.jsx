import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}
