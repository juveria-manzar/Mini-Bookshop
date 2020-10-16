import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const BookList = ()=>{
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => (
  <article>
    <Image/>
    <Title/>
    <Author/>
  </article>
)

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/71t4GuxLCuL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const Title = () => <h1>The Subtle Art of Not Giving a F*ck</h1>;

const Author = () => <h4>Mark Manson</h4>;


ReactDom.render(<BookList/>, document.getElementById('root'))
