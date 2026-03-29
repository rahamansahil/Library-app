import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/books/Fiction">Browse Books</Link>
      <Link to="/add">Add Book</Link>
    </nav>
  );
}
