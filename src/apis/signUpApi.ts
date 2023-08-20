import axios from 'axios';

export const signUpApi = ({ ...data }) => {
  return axios({
    method: 'post',
    url: `https://www.pre-onboarding-selection-task.shop/auth/signup`,
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
};
