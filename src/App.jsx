import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Details from './pages/Details';
import AddBook from './pages/AddBook';

// Simple 404 component without Navbar
function NotFound() {
  const path = window.location.pathname;
  return (
    <div style={{ textAlign: 'center', padding: '3rem', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
        The URL <code style={{ backgroundColor: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>{path}</code> does not exist.
      </p>
      <a href="/" style={{
        display: 'inline-block',
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '0.5rem 1.5rem',
        textDecoration: 'none',
        borderRadius: '4px'
      }}>
        Go to Home Page
      </a>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
            </>
          } />
          <Route path="/browse" element={
            <>
              <Navbar />
              <Browse />
            </>
          } />
          <Route path="/browse/:category" element={
            <>
              <Navbar />
              <Browse />
            </>
          } />
          <Route path="/book/:id" element={
            <>
              <Navbar />
              <Details />
            </>
          } />
          <Route path="/add-book" element={
            <>
              <Navbar />
              <AddBook />
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;