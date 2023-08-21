import { useCallback, useState } from 'react';

import Li from '../Li/Li';
import Span from '../Span/Span';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Button from '../Button/Button';
import getTodo from '../../apis/getTodo';
import { ITodos } from '../../types/todo';
import useInput from '../../hooks/useInput';
import modifyTodoApi from '../../apis/modifyTodoApi';
import deleteTodoApi from '../../apis/deleteTodoApi';

function TodoList({ todo, setTodos }: { todo: ITodos; setTodos: React.Dispatch<React.SetStateAction<ITodos[]>> }) {
  const [isModify, setIsModify] = useState<boolean>(false);
  const [todoValue, setTodoValue] = useInput(todo.todo);
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);

  const getTodosValue = useCallback(async () => {
    const res = await getTodo();
    setTodos(() => res.data);
  }, []);

  const deleteTodo = useCallback(async () => {
    await deleteTodoApi(todo.id);
    getTodosValue();
  }, [todo]);

  const handleModify = useCallback(async () => {
    const modifyData = {
      todo: todoValue,
      isCompleted,
    };
    await modifyTodoApi(todo.id, modifyData);
    setIsModify(false);
    getTodosValue();
  }, [todo, isCompleted]);

  const completed = () => setIsCompleted((isCompleted) => !isCompleted);

  return (
    <Li>
      <Label>
        <Input type='checkbox' onChange={completed} checked={isCompleted} />
        {isModify ? <Input value={todoValue} onChange={setTodoValue} /> : <Span>{todo.todo}</Span>}
      </Label>

      {!isModify ? (
        <>
          <Button onClick={() => setIsModify(true)}>수정</Button>
          <Button onClick={deleteTodo}>삭제</Button>
        </>
      ) : (
        <>
          <Button onClick={handleModify}>제출</Button>
          <Button onClick={() => setIsModify(false)}>취소</Button>
        </>
      )}
    </Li>
  );
}

export default TodoList;
