import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>Book not found</h2>
        <button onClick={() => navigate('/browse')} style={{
          marginTop: '1rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '0.5rem 1.5rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>{book.title}</h1>
        
        <p style={{ fontSize: '1.125rem', color: '#4b5563', marginBottom: '1rem' }}>
          <strong>Author:</strong> {book.author}
        </p>
        
        <p style={{ color: '#4b5563', marginBottom: '1rem' }}>
          <strong>Category:</strong> {book.category}
        </p>
        
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
          <strong style={{ marginRight: '0.5rem' }}>Rating:</strong>
          <span style={{ color: '#eab308' }}>★</span>
          <span style={{ marginLeft: '0.25rem' }}>{book.rating}</span>
        </div>
        
        <div style={{ marginBottom: '1.5rem' }}>
          <strong>Description:</strong>
          <p style={{ color: '#4b5563', marginTop: '0.5rem', lineHeight: '1.5' }}>{book.description}</p>
        </div>
        
        <button onClick={() => navigate('/browse')} style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '0.5rem 1.5rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          ← Back to Browse
        </button>
      </div>
    </div>
  );
}

export default Details;