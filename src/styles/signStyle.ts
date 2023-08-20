import { css } from '@emotion/react';

const signStyle = {
  view: () =>
    css({
      display: 'grid',
      justifyContent: 'center',
      alignContent: 'center',
      height: '100vh',
      gap: '0.5rem',
    }),

  button: (isValid: boolean) =>
    css({
      backgroundColor: `${isValid ? 'tomato' : 'gray'}`,
      border: 'none',
      borderRadius: '15px',
      height: '5vh',
      color: 'white',
      cursor: `${isValid ? 'pointer' : 'normal'}`,
      fontWeight: '900',

      '&:hover': {
        backgroundColor: `${isValid ? 'white' : 'gray'}`,
        border: `2px solid ${isValid ? 'tomato' : 'gray'}`,
        color: `${isValid ? 'tomato' : 'white'}`,
        fontWeight: '900',
      },
    }),

  backButton: () =>
    css({
      backgroundColor: 'tomato',
      border: 'none',
      borderRadius: '15px',
      height: '5vh',
      color: 'white',
      cursor: 'pointer',
      fontWeight: '900',

      '&:hover': {
        backgroundColor: 'white',
        border: '2px solid tomato',
        color: 'tomato',
        fontWeight: '900',
      },
    }),
};

export default signStyle;
