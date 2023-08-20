import { css } from '@emotion/react';

const emailStyle = {
  fragment: () =>
    css({
      display: 'flex',
      justifyContent: 'space-between',
    }),

  input: () =>
    css({
      width: '69.5%',
    }),
};

export default emailStyle;
