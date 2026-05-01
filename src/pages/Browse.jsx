import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

function Browse() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    let filtered = [...books];

    if (category) {
      const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
      filtered = filtered.filter(book => book.category === categoryName);
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter(
        book =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBooks(filtered);
  }, [category, books, searchTerm]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Books` : 'All Books'}
      </h1>
      
      {/* Search Bar */}
      <div style={{ marginBottom: '1.5rem' }}>
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '0.5rem 1rem',
            border: '1px solid #d1d5db',
            borderRadius: '8px',
            fontSize: '1rem'
          }}
        />
      </div>

      {/* Category Links */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Link to="/browse" style={{ padding: '0.5rem 1rem', backgroundColor: '#e5e7eb', textDecoration: 'none', color: '#1f2937', borderRadius: '4px' }}>All</Link>
        <Link to="/browse/fiction" style={{ padding: '0.5rem 1rem', backgroundColor: '#e5e7eb', textDecoration: 'none', color: '#1f2937', borderRadius: '4px' }}>Fiction</Link>
        <Link to="/browse/non-fiction" style={{ padding: '0.5rem 1rem', backgroundColor: '#e5e7eb', textDecoration: 'none', color: '#1f2937', borderRadius: '4px' }}>Non-Fiction</Link>
        <Link to="/browse/sci-fi" style={{ padding: '0.5rem 1rem', backgroundColor: '#e5e7eb', textDecoration: 'none', color: '#1f2937', borderRadius: '4px' }}>Sci-Fi</Link>
        <Link to="/browse/biography" style={{ padding: '0.5rem 1rem', backgroundColor: '#e5e7eb', textDecoration: 'none', color: '#1f2937', borderRadius: '4px' }}>Biography</Link>
      </div>

      {/* Books Grid */}
      {filteredBooks.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>No books found matching your criteria.</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Browse;