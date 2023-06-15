/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const HomeStyle = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function Home() {
  return (
    <div css={HomeStyle}>
      <button>로그인</button>
      <button>회원가입</button>
    </div>
  );
}

export default Home;
