// import { useState, useEffect } from "react";
import "./App.css";

// TODO Login Form
// import LoginForm from "./components/Login/LoginForm";

// export default function App() {
//   const handleLogin = (userData) => {
//     console.log(userData);
//   };
//   return (
//     <div>
//       <h1>Pls login to your account!</h1>
//       <LoginForm onLogin={handleLogin} />
//     </div>
//   );
// }

// TODO хуки
// import { useId } from "react";
// import MyComponent from "./components/MyComp/MyComponent";

// const App = () => {
//   return (
//     <div>
//       <MyComponent />
//     </div>
//   );
// };

// export default App;

// import s from "./App.css";
import LoginForm from "./components/Login/LoginForm";
import MyComponent from "./components/MyComp/MyComponent";
import SearchBar from "./components/SeaBar/SearchBar";
import LangSwitcher from "./components/LgSwt/LangSwitcher";
import { useState } from "react";

export default function App() {
  //   const [lang, setLang] = useState("en");
  return (
    <div className="wrap">
      <LoginForm />
      {/* <MyComponent /> */}
      {/* <SearchBar /> */}

      {/* <p>Selected languages: {lang}</p>
      <LangSwitcher
        value={lang}
        onSelect={setLang}
      /> */}
    </div>
  );
}

// const App = () => {
//   const [coffeeSize, setCoffeeSize] =
//     useState("sm");
//   const handleSizeChange = (e) => {
//     setCoffeeSize(e.target.value);
//   };
//   return (
//     <div className="wrap">
//       <h1>Select coffee size</h1>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="sm"
//           checked={coffeeSize === "sm"}
//           onChange={handleSizeChange}
//         />
//         Small
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="md"
//           checked={coffeeSize === "md"}
//           onChange={handleSizeChange}
//         />
//         Meduim
//       </label>
//       <label>
//         <input
//           type="radio"
//           name="coffeeSize"
//           value="lg"
//           onChange={handleSizeChange}
//           checked={coffeeSize === "lg"}
//         />
//         Large
//       </label>
//     </div>
//   );
// };

// export default App;

// const App = () => {
//   const [hasAccepted, setHasAccepted] =
//     useState(false);
//   const handleChange = (evt) => {
//     setHasAccepted(evt.target.checked);
//   };
//   return (
//     <div className="wrap">
//       <label>
//         <input
//           type="checkbox"
//           name="terms"
//           checked={hasAccepted}
//           onChange={handleChange}
//         />
//         I accept terms and conditions
//       </label>
//       <button
//         type="button"
//         disabled={!hasAccepted}
//       >
//         Proceed
//       </button>
//     </div>
//   );
// };

// export default App;
