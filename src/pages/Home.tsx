/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import View from '../components/View/View';
import Button from '../components/Button/Button';

function Home() {
  const navigate = useNavigate();

  return (
    <View css={HomeStyle}>
      <Button onClick={() => navigate('/signin')}>로그인</Button>
      <Button onClick={() => navigate('/signup')}>회원가입</Button>
    </View>
  );
}

const HomeStyle = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  button {
    border: 0;
    background-color: tomato;
    color: white;
    width: 20%;
    height: 5%;
    border-radius: 16px;
    font-weight: 900;
  }
  button:nth-of-type(1) {
    margin-right: 5%;
  }
`;

export default Home;
