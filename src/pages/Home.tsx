/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div css={HomeStyle}>
      <button onClick={() => navigate('/signin')}>로그인</button>
      <button onClick={() => navigate('/signup')}>회원가입</button>
    </div>
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
