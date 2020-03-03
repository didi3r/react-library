import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import reducers from "./reducers/booksReducer";

const initialState = loadState() || {
  fetched: false,
  currentBookId: null,
  books: [],
  loading: false
};

const store = createStore(reducers, initialState);

store.subscribe(() => {
  saveState({
    fetched: true,
    books: store.getState().books
  });
});

export default store;
