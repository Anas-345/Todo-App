export default function Todos({ todo, remove, done }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-between">
      <p className="text-gray-800 text-lg flex-1">{todo.name}</p>
      <div className="flex gap-2">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-1 rounded-md cursor-pointer transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
          onClick={done}
          disabled={todo.isCompleted}
        >
          Done
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 rounded-md cursor-pointer transition-colors duration-200"
          onClick={remove}
        >
          X
        </button>
      </div>
    </div>
  );
}
