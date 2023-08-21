import { forwardRef } from 'react';
import View from '../View/View';

const Input = forwardRef(
  <T extends React.ElementType = 'input'>(
    { as = 'input', ...props }: InputProps<T>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    return <View as={as} {...props} ref={ref} />;
  },
);

type InputProps<T extends React.ElementType> = { as?: string } & React.ComponentPropsWithoutRef<T>;

export default Input;
