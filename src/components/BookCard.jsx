import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div style={{
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '1.25rem',
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{book.title}</h3>
      <p style={{ color: '#4b5563', marginBottom: '0.5rem' }}>by {book.author}</p>
      <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.75rem' }}>Category: {book.category}</p>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ color: '#eab308' }}>★</span>
        <span style={{ marginLeft: '0.25rem', color: '#4b5563' }}>{book.rating}</span>
      </div>
      <Link to={`/book/${book.id}`} style={{
        display: 'inline-block',
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '0.5rem 1rem',
        textDecoration: 'none',
        borderRadius: '4px'
      }}>
        View Details
      </Link>
    </div>
  );
}

export default BookCard;