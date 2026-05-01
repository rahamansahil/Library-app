import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import BookCard from '../components/BookCard';

function Home() {
  const books = useSelector((state) => state.books.books);
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'];
  const popularBooks = books.slice(0, 4);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
      {/* Welcome Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
          Welcome to Online Library
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#4b5563' }}>
          Discover thousands of books from your favorite categories
        </p>
      </div>

      {/* Categories Section */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
          Book Categories
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {categories.map((category) => (
            <Link
              key={category}
              to={`/browse/${category.toLowerCase()}`}
              style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '1.5rem',
                textAlign: 'center',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 'bold'
              }}
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Books Section */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>
          Popular Books
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;