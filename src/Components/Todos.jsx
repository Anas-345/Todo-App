import { useState } from "react";

export default function Todos({ todo, remove, done, update }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  function handleChange(e) {
    setEditValue(e.target.value);
  }

  function handleEdited() {
    if (editValue.trim()) {
      update({ ...todo, name: editValue.trim() });
      setIsEditing(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleEdited();
    }
  }

  return (
    <div className="bg-white border-l-4 border-blue-500 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between gap-4">
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleEdited}
            autoFocus
            className="flex-1 px-4 py-2 border-2 border-blue-400 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 text-gray-700 font-medium"
          />
        ) : (
          <div className="flex items-center gap-3 flex-1 group">
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                todo.isCompleted
                  ? "bg-green-500 border-green-500"
                  : "border-gray-300 group-hover:border-green-400"
              }`}
            >
              {todo.isCompleted && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </div>
            <p
              className={`text-lg flex-1 cursor-pointer transition-all duration-200 ${
                todo.isCompleted
                  ? "line-through text-gray-400"
                  : "text-gray-800 hover:text-blue-600"
              }`}
              onClick={() => !todo.isCompleted && setIsEditing(true)}
            >
              {todo.name}
            </p>
          </div>
        )}
        <div className="flex gap-2">
          <button
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-5 py-2 rounded-lg cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed disabled:hover:shadow-md transform hover:-translate-y-0.5 disabled:transform-none"
            onClick={done}
            disabled={todo.isCompleted}
          >
            {todo.isCompleted ? "✓ Done" : "Done"}
          </button>
          <button
            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={remove}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}