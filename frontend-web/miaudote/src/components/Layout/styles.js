import {
    createMuiTheme,
    responsiveFontSizes,
    makeStyles
  } from '@material-ui/core/styles';
  import { cyan } from '@material-ui/core/colors';
  import { lightBlue } from '@material-ui/core/colors';
  
  let theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: cyan,
      secondary: cyan,
    }
  });
  
  theme = responsiveFontSizes(theme);
  
  const useStyle = makeStyles(() => ({
    root: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary
    },
    formColor: {
      backgroundColor: lightBlue["100"],
    },
    paper: {
      width : 800,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      backgroundColor: lightBlue["100"],
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3)
      }
    },
    inputPaper: {
      maxWidth: 300,
      minHeight: 300,
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
    stepper: {
      backgroundColor: lightBlue["100"]
    },
    buttons: {
      width: 200,
      height: 50,
      marginLeft: "auto",
      display: "flex",
  },
  }));
  
export { theme, useStyle };
  