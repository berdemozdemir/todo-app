import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Todo from "./Todo";
import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Go to Gym",
    "Read a book",
    "Learn NextJS",
  ]);

  const [enteredTodo, setEnteredTodo] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (
      enteredTodo.trim().length === 0 ||
      enteredTodo.length < 3 ||
      todos.includes(enteredTodo)
    ) {
      toast.error("Please enter a valid todo..");
      return;
    } else {
      setTodos((currTodos) => [...currTodos, enteredTodo]);
      setEnteredTodo("");
      toast.success("Todo başarıyla eklendi..!");
    }
  }

  function deleteHandler(id) {
    setTodos(todos.filter((todo, index) => index !== id));
    toast.error("Todo silindi..!");
  }

  return (
    <div className="wrapper">
      <ToastContainer />
      <h2>Todo App</h2>
      <form className="inputarea" onSubmit={submitHandler}>
        <input
          placeholder="Add a new todo.."
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </form>
      <ul className="todolist">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            id={index}
            todo={todo}
            onDeleteTodo={deleteHandler}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
