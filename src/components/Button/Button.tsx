import View from '../View/View';

function Button({ ...props }) {
  return <View as='button' {...props} />;
}

export default Button;
