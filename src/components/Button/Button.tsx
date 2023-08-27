import View from '../View/View';

function Button({ as = 'button', ...props }) {
  return <View as={as as React.ElementType} {...props} />;
}

export default Button;
