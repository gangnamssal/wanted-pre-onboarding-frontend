/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { signUpStyle } from "./SignUp";
import Email from "../components/Email/Email";
import Button from "../components/Button/Button";
import Password from "../components/Password/Password";
import BackButton from "../components/Button/BackButton";

function Login() {
  const navigate = useNavigate();
  const isValid = useRef<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onClick = () => {
    if (isValid.current)
      return axios({
        method: "post",
        url: `https://www.pre-onboarding-selection-task.shop/auth/signin`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email,
          password,
        },
      }).then(
        (res) => (
          localStorage.setItem("token", res.data.access_token),
          navigate("/todo")
        )
      );
    else return;
  };

  useEffect(() => {
    const emailReq = /[@]/gi;
    if (emailReq.test(email) && password.length >= 8) {
      isValid.current = true;
    } else {
      isValid.current = false;
    }
    if (localStorage.getItem("token")) {
      navigate("/todo");
    }
  }, [email, password]);

  return (
    <>
      <div css={signUpStyle(isValid.current)}>
        <h1>로그인</h1>
        <Email setEmail={setEmail} />
        <Password setPassword={setPassword} enter={onClick} />
        <Button
          name={"로그인"}
          info={{ email, password, onClick, isValid: isValid.current }}
        />
        <BackButton />
      </div>
    </>
  );
}

export default Login;
