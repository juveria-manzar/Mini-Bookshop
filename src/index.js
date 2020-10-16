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
  <article className="book">
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

const Author = () => <h4 style={{color: '#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>Mark Manson</h4>;


ReactDom.render(<BookList/>, document.getElementById('root'))
