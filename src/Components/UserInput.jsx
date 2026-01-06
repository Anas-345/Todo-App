import { useState } from "react";

export default function UserInput({ todo }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick() {
    if (value.trim()) {
      todo(value.trim());
      setValue("");
      return;
    }
    console.log("Enter Valid Input");
    setValue("");
  }

  return (
    <div className="flex justify-center items-center gap-3 p-6">
      <input
        type="text"
        placeholder="Enter Todo"
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => e.key === 'Enter' && handleClick() }
        className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-80 text-gray-700 placeholder-gray-400"
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg cursor-pointer transition-colors duration-200 shadow-md hover:shadow-lg"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
}
