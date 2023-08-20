import View from '../View/View';

type FormType = { children: JSX.Element | JSX.Element[] };

export default function Form({ children }: FormType) {
  return <View as='form'>{children}</View>;
}
