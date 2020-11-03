import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';


const books=[
  {
    title : "The Subtle Art of Not Giving a F*ck",
    author:"Mark Manson",
    img : 'https://images-eu.ssl-images-amazon.com/images/I/71t4GuxLCuL._AC_UL200_SR200,200_.jpg'
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho ",
    img:
      'https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg',
  }
];



const BookList = ()=>{
  return (
    <section className="booklist">
      {books.map((book)=>{
        // const { title, author, img } = book
        return <Book
        book={book}
      />
      })}
    </section>
  );
}

const Book = (props) => {
  const {title,author,img}=props.book
  console.log(props)
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};


ReactDom.render(<BookList/>, document.getElementById('root'))
