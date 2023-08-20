import Input from '../Input/Input';
import Label from '../Label/Label';

function Email({ ...props }) {
  return (
    <>
      <Label htmlFor='email'>이메일</Label>
      <Input type='email' id='email' {...props} />
    </>
  );
}

export default Email;
