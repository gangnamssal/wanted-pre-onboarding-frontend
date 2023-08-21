import View from '../View/View';

export default function Input({ as = 'input', ...props }) {
  return <View as={as} {...props} />;
}
