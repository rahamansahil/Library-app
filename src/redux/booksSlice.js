import { createSlice } from '@reduxjs/toolkit';

// Initial dummy data
const initialBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    description: "A story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    description: "A brief history of humankind.",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "Epic science fiction novel set in the distant future.",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Becoming",
    author: "Michelle Obama",
    category: "Biography",
    description: "The memoir of former First Lady Michelle Obama.",
    rating: 4.9,
  },
  {
    id: 5,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fiction",
    description: "Fantasy novel about Bilbo Baggins.",
    rating: 4.6,
  },
  {
    id: 6,
    title: "Brief Answers to the Big Questions",
    author: "Stephen Hawking",
    category: "Non-Fiction",
    description: "Stephen Hawking's final thoughts on the universe.",
    rating: 4.7,
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: initialBooks,
  },
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;