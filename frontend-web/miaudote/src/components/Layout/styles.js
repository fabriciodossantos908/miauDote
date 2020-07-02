import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles
} from '@material-ui/core/styles';
import { withStyles } from '../../../node_modules/@material-ui/styles';
import StepConnector from '@material-ui/core/StepConnector';

let theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: '#ff9d9c',
      main: '#fc6b6ez',
      dark: '#c43843',
      contrastText: '#000000',
    },
    secondary: {
      light: '#69fafe',
      main: '#1bc7cb',
      dark: '#00969a',
      contrastText: '#ffffff',
    },
    baseColor: {
      light: '#fffff',
      main: '#ffffff',
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
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.light,
  },
  container: {
    height: "auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      margin: 0
    }
  },
  inputPaper: {
    maxWidth: 400,
    minHeight: 300,
    padding: theme.spacing(2),
  },
  stepper: {
    width: 100,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "transparent"
  },
  groupButtons: {
    width: 200,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
  },
  buttons: {
    width: 100,
    height: 40,
    color: theme.palette.baseColor.main,
    backgroundColor: theme.palette.primary.light,
  },
  paper: {
    width: 500,
    height: 400,
    backgroundColor: theme.palette.primary.main
  }
}));

const header = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    backgroundColor: theme.palette.primary.light,
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.baseColor.main,
    boxShadow: "none"
  },

  appbarmain: {
    backgroundColor: theme.palette.baseColor.light,
    boxShadow: "none"
  },

  menuButton: {
    marginRight: theme.spacing(2),

  },

  nested: {
    paddingLeft: theme.spacing(4),
  },

  logo: {
    width: 80,
    height: 50,
    padding: theme.spacing(1)
  },

  firstName: {
    fontFamily: "italic",
    fontSize: 20,
  },

  twoName: {
    fontFamily: "italic",
    fontSize: 20,
    color: "#42a5f5",
  },

  gradiente:{
    fontFamily: "italic",
    fontSize: 20,
  }
}));

const formBase = makeStyles(() => ({
  formImage: {
    width: "auto",
    height: "100%",
    borderRadius: 3,
    color: theme.palette.baseColor.main,
  },
  FormPaper: {
    width: 800,
    maxHeight: 600,
    marginLeft: 250,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    }
  },

  labelStep: {
    color: theme.palette.baseColor.main,
  }
}))

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundColor: theme.palette.primary.light
    },
  },
  completed: {
    '& $line': {
      backgroundColor: theme.palette.primary.light
    },
  },
  line: {
    width: 2,
    marginRight: "auto",
    border: 0,
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 25,
    height: 25,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor: theme.palette.primary.dark
  },
});

const formPet = makeStyles({
  stepper: {
    width: 200,
    marginRight: "auto",
    color: "white",
    backgroundColor: "transparent",
  },

  logo: {
    width: 100,
    heigh: 150,
  }
})
export { theme, useStyle, header, formBase, ColorlibConnector, useColorlibStepIconStyles, formPet }