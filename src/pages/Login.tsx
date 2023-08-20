/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { signUpStyle } from './SignUp';
import View from '../components/View/View';
import { loginApi } from '../apis/loginApi';
import Title from '../components/Title/Title';
import Email from '../components/Email/Email';
import Button from '../components/Button/Button';
import Password from '../components/Password/Password';
import BackButton from '../components/Button/BackButton';

function Login() {
  const navigate = useNavigate();
  const isValid = useRef<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const getEmailInputValue = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(() => inputValue);
  };

  const getPasswordInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPassword(() => inputValue);
  };

  const handleSign = async () => {
    if (isValid.current) {
      const res = await loginApi({ email, password });
      localStorage.setItem('token', res.data.access_token);
      navigate('/todo');
    }
  };

  useEffect(() => {
    if (checkEmailInvalid(email) && checkPasswordInvalid(password)) isValid.current = true;
    if (!checkEmailInvalid(email) || !checkPasswordInvalid(password)) isValid.current = false;
    if (localStorage.getItem('token')) navigate('/todo');
  }, [email, password, navigate]);

  return (
    <View css={signUpStyle(isValid.current)}>
      <Title as={'h1'}>로그인</Title>
      <Email onBlur={getEmailInputValue} />
      <Password onChange={getPasswordInputValue} onSubmit={handleSign} />
      <Button onClick={handleSign} disabled={!isValid}>
        로그인
      </Button>
      <BackButton />
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

export default Login;
