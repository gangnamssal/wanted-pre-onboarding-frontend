/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';

import Ul from '../components/Ul/Ul';
import getTodo from '../apis/getTodo';
import { ITodos } from '../types/todo';
import useInput from '../hooks/useInput';
import View from '../components/View/View';
import addTodoApi from '../apis/addTodoApi';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import TodoList from '../components/Todo/TodoList';

function Todo() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const [todo, getTodoValue] = useInput();
  const [todos, setTodos] = useState<ITodos[]>([]);

  const getTodosValue = useCallback(async () => {
    const res = await getTodo();
    setTodos(() => res.data);
  }, []);

  const addTodo = async () => {
    if (!todo) return;
    if (inputRef.current) inputRef.current.value = '';

    await addTodoApi(todo);
    getTodosValue();
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) navigate('/signin');
    getTodosValue();
  }, []);

  return (
    <View css={todoStyle}>
      <View css={todoUI}>
        <Input ref={inputRef} onBlur={getTodoValue} />
        <Button onClick={addTodo}>추가</Button>
      </View>

      <Ul>
        {todos.map((todo) => (
          <TodoList todo={todo} key={todo.id} setTodos={setTodos} />
        ))}
      </Ul>
    </View>
  );
}

const todoStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    display: flex;
    label {
      font-size: 1.5rem;
    }
  }
`;

const todoUI = css`
  display: flex;

  input {
    width: 15vw;
    height: 5vh;
    border-radius: 16px;
  }

  button {
    width: 5vw;
    height: 5vh;
    border: 0;
    border-radius: 16px;
    background-color: tomato;
    color: white;
    margin-left: 1%;
  }
`;

export default Todo;
