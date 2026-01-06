import { useState } from "react";
import UserInput from "./Components/UserInput";
import Todos from "./Components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  function removeTodo(rTodo) {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== rTodo.id;
      });
    });
  }

  function completedTodo(ctodo) {
    setTodos(prev => {
      return prev.map(todo => 
        todo.id === ctodo.id ? {...todo, isCompleted: true} : todo
      )
    })
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          My Todo List
        </h1>
        <UserInput
          todo={(newTodo) =>
            setTodos((prevArray) => [
              ...prevArray,
              { name: newTodo, isCompleted: false, id: Date.now() },
            ])
          }
        />
        <div className="mt-6 space-y-3 px-6">
          {todos.map((todo) => (
            <Todos
              todo={todo}
              key={todo.id}
              remove={() => {
                removeTodo(todo);
              }}
              done={() => {
                completedTodo(todo)
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
