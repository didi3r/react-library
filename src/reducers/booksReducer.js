function booksReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "LOAD_BOOKS":
      return { ...state, books: action.payload.books };
    case "SELECT_BOOK":
      return {
        ...state,
        currentBookId: action.payload.id
      };
    case "DELETE_BOOK":
      return {
        ...state,
        books: state.books.filter(b => b.id !== action.payload.id)
      };
    case "EDIT_BOOK":
      const books = [...state.books];
      for (let i = 0; i < books.length; i++) {
        if (books[i].id === action.payload.book.id) {
          books[i] = { ...action.payload.book };
        }
      }
      return {
        ...state,
        books
      };
    default:
      return state;
  }
}

export default booksReducer;
