/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import View from '../components/View/View';
import Title from '../components/Title/Title';
import Email from '../components/Email/Email';
import { signUpApi } from '../apis/signUpApi';
import Button from '../components/Button/Button';
import Password from '../components/Password/Password';
import BackButton from '../components/BackButton/BackButton';
import signStyle from '../styles/signStyle';
import useInput from '../hooks/useInput';

function SignUp() {
  const navigate = useNavigate();
  const isValid = useRef<boolean>(false);
  const [email, getEmailInput] = useInput();
  const [password, getPasswordInput] = useInput();

  const handleSign = async () => {
    if (isValid.current) {
      await signUpApi({ email, password });
      navigate('/signin');
    }
  };

  useEffect(() => {
    if (checkEmailInvalid(email) && checkPasswordInvalid(password)) isValid.current = true;
    if (!checkEmailInvalid(email) || !checkPasswordInvalid(password)) isValid.current = false;
    if (localStorage.getItem('token')) navigate('/todo');
  }, [email, password, navigate]);

  return (
    <View css={signStyle.view}>
      <Title as={'h1'}>회원가입</Title>
      <Email onBlur={getEmailInput} />
      <Password onChange={getPasswordInput} onSubmit={handleSign} />
      <Button onClick={handleSign} disabled={!isValid.current} css={signStyle.button(isValid.current)}>
        회원가입
      </Button>
      <BackButton css={signStyle.backButton} />
    </View>
  );
}

function checkEmailInvalid(email: string) {
  const emailReq = /@/gi;

  return emailReq.test(email);
}

function checkPasswordInvalid(password: string) {
  return password.length >= 8;
}

export default SignUp;
