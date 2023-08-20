/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import useInput from '../hooks/useInput';
import View from '../components/View/View';
import { loginApi } from '../apis/loginApi';
import signStyle from '../styles/signStyle';
import Title from '../components/Title/Title';
import Email from '../components/Email/Email';
import Button from '../components/Button/Button';
import Password from '../components/Password/Password';
import BackButton from '../components/BackButton/BackButton';

function Login() {
  const navigate = useNavigate();
  const isValid = useRef<boolean>(false);
  const [email, getEmailInput] = useInput();
  const [password, getPasswordInput] = useInput();

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
    <View css={signStyle.view}>
      <Title as={'h1'}>로그인</Title>
      <Email onBlur={getEmailInput} />
      <Password onChange={getPasswordInput} onSubmit={handleSign} />
      <Button onClick={handleSign} disabled={!isValid.current} css={signStyle.button(isValid.current)}>
        로그인
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

export default Login;
