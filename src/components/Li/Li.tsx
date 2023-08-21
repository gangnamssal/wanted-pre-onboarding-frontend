import View from '../View/View';

export default function Li({ as = 'li', ...props }) {
  return <View as={as} {...props} />;
}
