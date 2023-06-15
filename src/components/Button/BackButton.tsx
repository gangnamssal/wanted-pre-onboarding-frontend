import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/")}>뒤로가기</button>;
}
export default BackButton;
