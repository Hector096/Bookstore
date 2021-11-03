import { v4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert',
    genre: 'Business',
    completed: 56,
    id: v4(),
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    completed: 16,
    id: v4(),
  },
  {
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    genre: 'Economy',
    completed: 2,
    id: v4(),
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.payload.title,
          author: action.payload.author,
          genre: action.payload.genre,
          completed: 0,
          id: v4(),
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default reducer;
