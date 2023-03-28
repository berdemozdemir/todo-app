import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo,deleteTodo,id }) => {
  return (
    <li>
      {todo}
      <span onClick={() => {deleteTodo(id)}}>
        <FontAwesomeIcon icon={faTrashCan} />
      </span>
    </li>
  );
};

export default Todo;
