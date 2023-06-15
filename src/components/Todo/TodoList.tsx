import axios from "axios";
import { useRef, useState } from "react";
import { Todos } from "../../routes/Todo";

function TodoList({
  todo,
  setTodos,
}: {
  todo: Todos;
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
}) {
  const [todoValue, setTodoValue] = useState<string>(todo.todo);
  const [isModify, setIsModify] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);

  const deleteTodo = () => {
    return axios({
      method: "delete",
      url: `https://www.pre-onboarding-selection-task.shop/todos/${todo.id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(() => {
      axios({
        method: "get",
        url: `https://www.pre-onboarding-selection-task.shop/todos`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => setTodos(res.data));
    });
  };

  const handleModify = () => {
    return axios({
      method: "put",
      url: `https://www.pre-onboarding-selection-task.shop/todos/${todo.id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        todo: todoValue,
        isCompleted,
      },
    }).then(
      () => (
        setIsModify(false),
        axios({
          method: "get",
          url: `https://www.pre-onboarding-selection-task.shop/todos`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }).then((res) => setTodos(res.data))
      )
    );
  };

  const completed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCompleted((isCompleted) => !isCompleted);
  };

  return (
    <li>
      <label>
        <input type="checkbox" onChange={completed} checked={isCompleted} />
        {isModify ? (
          <input
            data-testid="modify-input"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
        ) : (
          <span>{todo.todo}</span>
        )}
      </label>

      {!isModify ? (
        <>
          <button data-testid="modify-button" onClick={() => setIsModify(true)}>
            수정
          </button>
          <button data-testid="delete-button" onClick={deleteTodo}>
            삭제
          </button>
        </>
      ) : (
        <>
          <button data-testid="submit-button" onClick={handleModify}>
            제출
          </button>
          <button
            data-testid="cancel-button"
            onClick={() => setIsModify(false)}
          >
            취소
          </button>
        </>
      )}
    </li>
  );
}

export default TodoList;
