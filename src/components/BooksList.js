import React from "react";
import { connect } from "react-redux";
import { deleteBook, selectBook } from "../actions/actions";
import Book from "./Book";
import Spinner from "./Spinner";

const BooksList = ({ loading, books, handleEdit, handleDelete }) => {
  return loading ? (
    <Spinner />
  ) : (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {books.map((book, index) => (
          <div key={index} className="col mb-4">
            <Book
              book={book}
              onEdit={id => {
                handleEdit(id);
              }}
              onDelete={id => {
                handleDelete(id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  handleEdit: id => dispatch(selectBook(id)),
  handleDelete: id => dispatch(deleteBook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList);
