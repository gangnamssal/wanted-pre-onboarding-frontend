import axios from 'axios';

const modifyTodoApi = (id: number, { ...data }) => {
  return axios({
    method: 'put',
    url: `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    data,
  });
};

export default modifyTodoApi;
