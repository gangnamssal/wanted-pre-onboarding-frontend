import Form from '../Form/Form';
import Input from '../Input/Input';
import Label from '../Label/Label';

function Password({ ...props }) {
  return (
    <Form>
      <Label htmlFor='password'>비밀번호</Label>
      <Input type='password' id='password' {...props} />
    </Form>
  );
}

export default Password;
