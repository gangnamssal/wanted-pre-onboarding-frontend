import View from '../View/View';

export default function Title({ as = 'p', ...props }) {
  return <View as={as} {...props} />;
}
