import { useState } from "react";
import UserInput from "./Components/UserInput";
import Todos from "./Components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  function removeTodo(rTodo) {
    if (confirm("Are you sure?")) {
      setTodos((prev) => {
        return prev.filter((todo) => {
          return todo.id !== rTodo.id;
        });
      });
    }
  }

  function completedTodo(ctodo) {
    setTodos((prev) => {
      return prev.map((todo) =>
        todo.id === ctodo.id ? { ...todo, isCompleted: true } : todo
      );
    });
  }

  function updateTodo(updatedTodo) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  }

  const activeTodos = todos.filter(todo => !todo.isCompleted).length;
  const completedTodos = todos.filter(todo => todo.isCompleted).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            My Todo List
          </h1>
          <p className="text-gray-600 text-lg">Organize your tasks efficiently</p>
        </div>

        <UserInput
          todo={(newTodo) =>
            setTodos((prevArray) => [
              ...prevArray,
              { name: newTodo, isCompleted: false, id: Date.now() },
            ])
          }
        />

        {todos.length > 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex justify-around text-center">
              <div>
                <p className="text-3xl font-bold text-blue-600">{todos.length}</p>
                <p className="text-gray-600 text-sm">Total Tasks</p>
              </div>
              <div className="border-l-2 border-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-orange-500">{activeTodos}</p>
                <p className="text-gray-600 text-sm">Active</p>
              </div>
              <div className="border-l-2 border-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-green-600">{completedTodos}</p>
                <p className="text-gray-600 text-sm">Completed</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {todos.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <svg
                  className="w-24 h-24 mx-auto"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <p className="text-gray-500 text-xl font-medium">No tasks yet</p>
              <p className="text-gray-400">Add a task to get started!</p>
            </div>
          ) : (
            todos.map((todo) => (
              <Todos
                todo={todo}
                key={todo.id}
                remove={() => {
                  removeTodo(todo);
                }}
                done={() => {
                  completedTodo(todo);
                }}
                update={updateTodo}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;