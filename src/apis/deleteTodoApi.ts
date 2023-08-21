import axios from 'axios';

const deleteTodoApi = (id: number) => {
  return axios({
    method: 'delete',
    url: `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export default deleteTodoApi;
