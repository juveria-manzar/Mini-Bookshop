import React from 'react'

const Book = (props) => {
  const { title, author, img } = props;

  //attribute eventHandler
  //onClick, onMouseOver
  const clickHandler = () => {
    console.log("hello")
  };
  const moreComplex = (author) => {
    alert(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => moreComplex(author)}>
        More Complex
      </button>
    </article>
  );
};

export default Book
