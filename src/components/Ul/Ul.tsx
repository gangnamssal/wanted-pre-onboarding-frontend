import View from '../View/View';

export default function Ul({ as = 'ul', ...props }) {
  return <View as={as} {...props} />;
}
