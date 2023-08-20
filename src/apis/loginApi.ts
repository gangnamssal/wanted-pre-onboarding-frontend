import axios from 'axios';

export const loginApi = ({ ...data }) => {
  return axios({
    method: 'post',
    url: `https://www.pre-onboarding-selection-task.shop/auth/signin`,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
};
