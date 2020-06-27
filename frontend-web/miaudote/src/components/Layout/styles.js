import {
    createMuiTheme,
    responsiveFontSizes,
    makeStyles
  } from '@material-ui/core/styles';
  import { cyan } from '@material-ui/core/colors';
  import { lightBlue } from '@material-ui/core/colors';
  import Logo from '../../imgs/logo.jpeg'
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
    buttons: {
      width: 200,
      height: 50,
      marginTop: theme.spacing(2),
      marginLeft: "auto",
      display: "flex",
  },


  inputPaper: {
    maxWidth: 300,
    minHeight: 300,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  titleForm: {
    width: 300,
    paddingLeft: theme.spacing(2),
    marginLeft: "auto"
  },
  stepper: {
    maxWidth: 200,
    height: 50,
    marginLeft: "auto",
    backgroundColor: lightBlue["100"]
  },

  imgSide: {
    width: "auto",
    height: 300,
    backgroundImage: `url(${Logo})`
  }
  }));
  
export { theme, useStyle };
  