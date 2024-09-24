// const LoginForm = ({ onLogin }) => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const form = evt.target;
//     const { login, password } = form.elements;
//     console.log(login);
//     console.log(password);

//     onLogin({
//       login: login.value,
//       password: password.value,
//     });
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="login" />
//       <input type="password" name="password" />
//       <button type="submit">Log in</button>
//     </form>
//   );
// };

import { useId, useState } from "react";

// const LoginForm = () => {
//   const loginId = useId();
//   const passwordId = useId();

//   console.log(loginId, passwordId);
//   return (
//     <form>
//       <label htmlFor={loginId}>login</label>
//       <input
//         type="text"
//         name="login"
//         id={loginId}
//       />
//       <label htmlFor={passwordId}>password</label>
//       <input
//         type="password"
//         name="password"
//         id={passwordId}
//       />
//       <button type="submit">login</button>
//     </form>
//   );
// };

// export default LoginForm;
