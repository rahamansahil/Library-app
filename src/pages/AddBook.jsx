import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';

function AddBook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: ''
  });
  
  const [errors, setErrors] = useState({});
  const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.rating) {
      newErrors.rating = 'Rating is required';
    } else if (formData.rating < 0 || formData.rating > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    const newBook = {
      id: Date.now(),
      title: formData.title.trim(),
      author: formData.author.trim(),
      category: formData.category,
      description: formData.description.trim(),
      rating: parseFloat(formData.rating)
    };
    
    dispatch(addBook(newBook));
    navigate('/browse');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>Add New Book</h1>
      
      <form onSubmit={handleSubmit} style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '1.5rem'
      }}>
        {/* Title Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: `1px solid ${errors.title ? '#ef4444' : '#d1d5db'}`,
              borderRadius: '4px'
            }}
          />
          {errors.title && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.title}</p>}
        </div>
        
        {/* Author Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Author *</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: `1px solid ${errors.author ? '#ef4444' : '#d1d5db'}`,
              borderRadius: '4px'
            }}
          />
          {errors.author && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.author}</p>}
        </div>
        
        {/* Category Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: `1px solid ${errors.category ? '#ef4444' : '#d1d5db'}`,
              borderRadius: '4px'
            }}
          >
            <option value="">Select a category</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
          {errors.category && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.category}</p>}
        </div>
        
        {/* Rating Field */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Rating (0-5) *</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="5"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: `1px solid ${errors.rating ? '#ef4444' : '#d1d5db'}`,
              borderRadius: '4px'
            }}
          />
          {errors.rating && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.rating}</p>}
        </div>
        
        {/* Description Field */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: `1px solid ${errors.description ? '#ef4444' : '#d1d5db'}`,
              borderRadius: '4px'
            }}
          />
          {errors.description && <p style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{errors.description}</p>}
        </div>
        
        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button type="submit" style={{
            backgroundColor: '#10b981',
            color: 'white',
            padding: '0.5rem 1.5rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Add Book
          </button>
          <button type="button" onClick={() => navigate('/browse')} style={{
            backgroundColor: '#6b7280',
            color: 'white',
            padding: '0.5rem 1.5rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;