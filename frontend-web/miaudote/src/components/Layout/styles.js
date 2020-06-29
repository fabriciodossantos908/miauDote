import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles
} from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: '#fff',
      main: '#3f50b5',
      dark: '#369696',
      contrastText: '#FC6B6E',
    },
    secondary: {
      light: '#FFF6E6',
      main: '#00d26',
      dark: '#2186C4',
      contrastText: '#00bcc1',
    },
  },
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
    color: theme.palette.primary.light
  },

  paper: {
    width: 800,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.piroquinha,
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
    backgroundColor: theme.palette.primary.main
  },
  buttons: {
    width: 200,
    height: 50,
    marginLeft: "auto",
    display: "flex",
  },
}));

const header = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    backgroundColor: theme.palette.primary.light,
    marginRight: theme.spacing(2),
  },

  button:{
    textDecoration: "none"
  },

  title: {
    flexGrow: 1,
  },  
  appBar: {
    backgroundColor: theme.palette.primary.light,

    boxShadow: "none"
  },
  
  nested: {
      paddingLeft: theme.spacing(4),
    },
}));


export {theme, useStyle, header}