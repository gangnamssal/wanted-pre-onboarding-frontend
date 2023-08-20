import { useNavigate } from 'react-router-dom';

import Button from './Button';

function BackButton() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate('/')}>뒤로가기</Button>;
}
export default BackButton;
