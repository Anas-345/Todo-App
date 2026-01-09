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
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={value}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleClick()}
          className="flex-1 px-5 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-700 placeholder-gray-400 transition-all duration-200"
        />
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl cursor-pointer transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
