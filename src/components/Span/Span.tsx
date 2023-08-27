import View from '../View/View';

export default function Span({ as = 'span', ...props }) {
  return <View as={as as React.ElementType} {...props} />;
}
