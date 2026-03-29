import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

export default function Home() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h1>Welcome to Library</h1>

      <h2>Categories</h2>
      <ul>
        <li>Fiction</li>
        <li>Non-Fiction</li>
        <li>Sci-Fi</li>
      </ul>

      <h2>Popular Books</h2>
      <div className="grid grid-cols-3 gap-4">
        {books.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </div>
  );
}
