/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';

import Email from '../components/Email/Email';
import Button from '../components/Button/Button';
import Password from '../components/Password/Password';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/Button/BackButton';

export const signUpStyle = (isvalid: boolean) => css`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    border-radius: 16px;
    height: 5%;
    width: 15%;
    font-size: 1.5rem;
    margin: 0.5% 0 1% 0;
    border: 3px solid tomato;
    outline-color: tomato;
  }

  label {
    font-weight: 900;
  }

  button {
    border: 0;
    background-color: tomato;
    color: white;
    font-weight: 900;
    border-radius: 16px;
    height: 5%;
    width: 15%;
    cursor: pointer;
  }
  button:nth-of-type(1) {
    background-color: ${isvalid ? 'tomato' : 'gray'};
    cursor: ${isvalid ? 'pointer' : 'auto'};
  }

  button:nth-of-type(2) {
    margin-top: 1%;
  }
`;

function SignUp() {
  const navigate = useNavigate();
  const isValid = useRef<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const getEmailInputValue = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(() => inputValue);
  };

  const onClick = () => {
    if (isValid.current)
      return axios({
        method: 'post',
        url: `https://www.pre-onboarding-selection-task.shop/auth/signup`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email,
          password,
        },
      }).then(() => navigate('/signin'));
    else return;
  };

  useEffect(() => {
    const emailReq = /@/i;
    if (emailReq.test(email) && password.length >= 7) {
      isValid.current = true;
    } else {
      isValid.current = false;
    }
    if (localStorage.getItem('token')) {
      navigate('/todo');
    }
  }, [email, password]);

  return (
    <div css={signUpStyle(isValid.current)}>
      <h1>회원가입</h1>
      <Email onBlur={getEmailInputValue} />
      <Password setPassword={setPassword} enter={onClick} />
      <Button name={'회원가입'} info={{ email, password, onClick, isValid: isValid.current }} />
      <BackButton />
    </div>
  );
}

export default SignUp;
