import { forwardRef } from 'react';
import View from '../View/View';

const Input: InputComponent = forwardRef(
  <T extends React.ElementType = 'input'>(
    { as = 'input', ...props }: InputProps<T>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    return <View as={as} {...props} ref={ref} />;
  },
);

type InputProps<T extends React.ElementType> = { as?: React.ElementType } & React.ComponentPropsWithoutRef<T>;

type InputComponent = <C extends React.ElementType = 'input'>(
  props: InputProps<C> & {
    ref?: React.ComponentPropsWithRef<C>['ref'];
  },
) => React.ReactNode | null;

export default Input;
