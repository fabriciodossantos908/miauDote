import { createMuiTheme } from '@material-ui/core';
import createPalette from '@material-ui/core/styles/createPalette';

let palette = createPalette({
  type: 'light',
  primary: {
    light: '#F69397',
    main: '#F4666C',
    dark: '#F03840',
    contrastText: '#fff',
  },
  secondary: {
    light: '#5FB6D9',
    main: '#048ABF',
    dark: '#024873',
    contrastText: '#ffffff',
  },
  thirdy: {
    main: '#F28E13',
  },
  baseColor: {
    light: '#fffff',
    main: '#ffffff',
    dark: '#000000',
    contrastText: '#00bcc1',
  },
});

let themeMain = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        '& @active': {
          color: 'pink',
        },
        '& @focus': {
          color: 'blue',
        },
      },
    },
    MuiTypography: {
      body1: {
        fontSize: '0.900rem',
      },

      body2: {
        fontSize: '0.750rem',
      },
    },
    MuiInputBase: {
      root: {
        height: 40,
        marginBottom: 10,
      },
    },
    MuiInputLabel: {
      root: {
        '&$focused': {
          color: palette.primary.main,
          outline: palette.primary.light,
        },
      },
    },
    MuiCardContent: {
      root: {
        padding: '5px 2px',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        borderRadius: 5,
      },
      contained: {
        backgroundColor: palette.primary.light,
        color: palette.primary.contrastText,
      },
    },

    MuiButtonBase: { root: { marginRight: 10 } },
    MuiStepper: {
      line: {
        width: 2,
        marginRight: 'auto',
        border: 0,
        backgroundColor: palette.secondary.main,
        borderRadius: 1,
      },
      active: {
        '& $line': {
          backgroundColor: palette.primary.light,
        },
      },
      completed: {
        '& $line': {
          backgroundColor: palette.primary.light,
        },
      },
    },
  },
});

export { themeMain, palette };
