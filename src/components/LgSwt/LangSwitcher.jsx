import { useId, useState } from "react";

const LangSwitcher = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>
        Choose language
      </label>
      <select
        id={selectId}
        value={value}
        onChange={(evt) =>
          onSelect(evt.target.value)
        }
      >
        <option value="en">Eng</option>
        <option value="ua">Ukr</option>
        <option value="pl">Pol</option>
      </select>
    </div>
  );
};

export default LangSwitcher;
