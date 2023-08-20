/** @jsxImportSource @emotion/react */

import View from '../View/View';
import Input from '../Input/Input';
import Label from '../Label/Label';
import emailStyle from './EmailStyle';

function Email({ ...props }) {
  return (
    <View css={emailStyle.fragment}>
      <Label htmlFor='email'>이메일</Label>
      <Input type='email' id='email' {...props} css={emailStyle.input} />
    </View>
  );
}

export default Email;
