import View from '../View/View';

function Button({ as = 'button', ...props }) {
  return <View as={as} {...props} />;
}

export default Button;
