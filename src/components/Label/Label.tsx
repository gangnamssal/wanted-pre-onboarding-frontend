import View from '../View/View';

export default function Label({ as = 'label', ...props }) {
  return <View as={as as React.ElementType} {...props} />;
}
