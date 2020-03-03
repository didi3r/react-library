import React from "react";
import styled from "styled-components";

const BookContainer = styled.div``;

const Book = ({ book, onEdit, onDelete }) => {
  const { name, author, desc, link } = book;

  return (
    <BookContainer className="card">
      <img
        src={"https://place-hold.it/300x150?text=" + name}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
        <p className="card-text">{desc}</p>
        <a
          href={link}
          className="btn btn-primary btn-block"
          rel="noopener noreferrer"
          target="_blank"
        >
          View on Amazon
        </a>

        <div className="mt-3 text-center">
          <span
            className="card-link text-info cursor-pointer"
            onClick={e => onEdit(book.id)}
          >
            Update
          </span>
          <span
            className="card-link text-danger cursor-pointer"
            onClick={e => onDelete(book.id)}
          >
            Delete
          </span>
        </div>
      </div>
    </BookContainer>
  );
};

export default Book;
