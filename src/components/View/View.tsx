import { forwardRef } from 'react';

const View = forwardRef(
  <T extends React.ElementType = 'div'>({ as, ...props }: ViewProps<T>, ref: React.ComponentPropsWithRef<T>['ref']) => {
    const Element = as || 'div';
    return <Element ref={ref} {...props} />;
  },
);

type ViewProps<T extends React.ElementType> = { as?: T } & React.ComponentPropsWithoutRef<T>;

export default View;
