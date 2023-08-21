/** @jsxImportSource @emotion/react */
import axios from 'axios';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import TodoList from '../components/Todo/TodoList';

export interface ITodos {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

function Todo() {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<ITodos[]>([]);

  const todoValue = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTodo(value);
  };

  const addTodo = () => {
    return axios({
      method: 'post',
      url: `https://www.pre-onboarding-selection-task.shop/todos`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      data: {
        todo,
      },
    }).then(() => {
      if (inputRef.current) {
        inputRef.current.value = '';
      }
      axios({
        method: 'get',
        url: `https://www.pre-onboarding-selection-task.shop/todos`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => setTodos(res.data));
    });
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/signin');
    }
    axios({
      method: 'get',
      url: `https://www.pre-onboarding-selection-task.shop/todos`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => setTodos(res.data));
  }, []);

  return (
    <div css={todoStyle}>
      <div className='form'>
        <input data-testid='new-todo-input' ref={inputRef} onBlur={todoValue} />
        <button data-testid='new-todo-add-button' onClick={addTodo}>
          추가
        </button>
      </div>

      <ul>
        {todos.map((todo) => {
          return <TodoList todo={todo} key={todo.id} setTodos={setTodos} />;
        })}
      </ul>
    </div>
  );
}

const todoStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form {
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
  }

  li {
    display: flex;
    label {
      font-size: 1.5rem;
    }
  }
`;

export default Todo;
