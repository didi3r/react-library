import React, { useEffect } from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "./store";
import BooksList from "./components/BooksList";
import { loadBooks, setLoader } from "./actions/actions";
import mockBooks from "./mockBooks";
import EditModal from "./components/EditModal";

const TitleContainer = styled.h1`
  text-align: center;
  margin: 30px 0;
`;

export default function App() {
  useEffect(() => {
    // Only fetches the initial state if there is
    // no previous state saved
    if (!store.getState().fetched) {
      store.dispatch(setLoader(true));
      // Fakes async call like an HTTP Request
      setTimeout(() => {
        store.dispatch(loadBooks(mockBooks));
        store.dispatch(setLoader(false));
      }, 1500);
    }
  }, []);

  return (
    <Provider store={store}>
      <TitleContainer>Lorem Ipsum Library</TitleContainer>
      <BooksList />
      <EditModal />
    </Provider>
  );
}
