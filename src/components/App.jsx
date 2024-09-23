// ? Екпорт та експорт компонентів
// import Product from "./Product";

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//       <Product />
//     </div>
//   );
// }

// ? Колекції
// const favouriteBooks = [
//   { name: "JS for beginners" },
//   { name: "React basics" },
//   { name: "React Router overview" },
// ];

// const BookList = ({ books }) => (
//   <ul>
//     {books.map((book, index) => {
//       return <li key={index}>{book.name}</li>;
//     })}
//   </ul>
// );

// export default function App() {
//   return (
//     <>
//       <h1>Books of the week</h1>
//       <BookList books={favouriteBooks} />
//     </>
//   );
// }

export default function App() {
  const handleClick = (evt) => {
    console.log(evt);
  };

  return (
    <>
      <button onClick={handleClick}>
        First button
      </button>
      <button onClick={(evt) => console.log(evt)}>
        Second button
      </button>
    </>
  );
}
