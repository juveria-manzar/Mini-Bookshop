import React from 'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';
//setup Vars;
const firstBook = {
  title : "The Subtle Art of Not Giving a F*ck",
  author:"Mark Manson",
  img : "https://images-eu.ssl-images-amazon.com/images/I/71t4GuxLCuL._AC_UL200_SR200,200_.jpg"
}

const secondBook = {
  title: "The Alchemist",
  author: "Paulo Coelho ",
  img:
    "https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg",
};

const BookList = ()=>{
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author.toUpperCase()}</h4>
    </article>
  );
}

// const Image = () => (
//   <img
//     src={firstBook.img}
//     alt=""
//   />
// );

// const Title = () => <h1>The Subtle Art of Not Giving a F*ck</h1>;

// const Author = () => <h4 style={{color: '#617d98', fontSize:'0.75rem', marginTop:'0.25rem'}}>Mark Manson</h4>;


ReactDom.render(<BookList/>, document.getElementById('root'))
