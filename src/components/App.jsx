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

// ?
// export default function App() {
//   const handleClick = (evt) => {
//     console.log(evt);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>
//         First button
//       </button>
//       <button onClick={(evt) => console.log(evt)}>
//         Second button
//       </button>
//     </>
//   );
// }

// ?
// const CustomButton = ({ message, children }) => {
//   return (
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// };

// export default function App() {
//   return (
//     <>
//       <CustomButton message="Playing music!">
//         Play some music
//       </CustomButton>
//       <CustomButton message="Uploading your data!">
//         Upload data
//       </CustomButton>
//     </>
//   );
// }

// ?
// import { useState } from "react";

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     // clicks = clicks + 1;
//     setClicks(clicks + 1);
//   };

//   return (
//     <button onClick={handleClick}>
//       Current: {clicks}
//     </button>
//   );
// }

// ?
import { useState } from "react";

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleClick}>
        Current: {clicks}
      </button>
      <button onClick={handleToggle}>
        {isOpen ? "Hide" : "Show"}
      </button>
      {isOpen && <p>Now u can see me!</p>}
    </>
  );
}
