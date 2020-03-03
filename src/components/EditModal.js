import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { editBook, selectBook } from "../actions/actions";
import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  height: 300px;
  overflow: hidden;
  overflow-y: auto;
`;

const EditModal = ({ currentBookId, books, handleEdit, handleClose }) => {
  const [book, setBook] = useState({
    id: "",
    name: "",
    desc: "",
    link: ""
  });

  const { id, name, author, desc, link } = book;

  const handleChange = e => {
    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if (!!currentBookId) {
      const book = books.find(b => b.id === currentBookId);
      setBook(book);
    }
  }, [currentBookId, books]);

  return (
    <ModalContainer
      className="modal fade show"
      role="dialog"
      style={{ display: !!currentBookId ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Book</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => handleClose(null)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <ModalContent className="modal-body">
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                className="form-control"
                type="text"
                name="id"
                value={id}
                onChange={handleChange}
                disabled
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                className="form-control"
                type="text"
                name="author"
                value={author}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <textarea
                className="form-control"
                name="desc"
                value={desc}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="link">Link</label>
              <input
                className="form-control"
                type="text"
                name="link"
                value={link}
                onChange={handleChange}
              />
            </div>
          </ModalContent>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => handleClose(null)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleEdit(book);
                handleClose(null);
              }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

const mapStateToProps = state => ({
  currentBookId: state.currentBookId,
  books: state.books
});

const mapDispatchToProps = dispatch => ({
  handleEdit: book => dispatch(editBook(book)),
  handleClose: id => dispatch(selectBook(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModal);
