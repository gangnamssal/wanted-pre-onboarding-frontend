import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';

function BackButton({ ...props }) {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate('/')} {...props}>
      뒤로가기
    </Button>
  );
}
export default BackButton;
