import axios from 'axios';

const addTodoApi = (todo: string) => {
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
  });
};

export default addTodoApi;
