simport { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(inputValue);

    setValue("");
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          value={inputValue}
          placeholder="Enter your Task?"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
