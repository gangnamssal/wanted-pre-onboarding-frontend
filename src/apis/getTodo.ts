import axios from 'axios';

const getTodo = () => {
  return axios({
    method: 'get',
    url: `https://www.pre-onboarding-selection-task.shop/todos`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export default getTodo;
