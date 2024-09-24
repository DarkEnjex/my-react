import { useId } from "react";

const MyComponent = () => {
  const id = useId();
  console.log(id);
  return (
    <div>
      <label htmlFor={id}>Text filed label</label>
      <input type="text" id={id} />
    </div>
  );
};

export default MyComponent;
