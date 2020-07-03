import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles
} from '@material-ui/core/styles';
import { withStyles } from '../../../node_modules/@material-ui/styles';
import StepConnector from '@material-ui/core/StepConnector';

let theme = createMuiTheme({
  palette: {
    type: "dark",
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
    thirdy: {
      main: "#F28E13"
    },
    baseColor: {
      light: '#fffff',
      main: '#ffffff',
      dark: '#000000',
      contrastText: '#00bcc1',
    },
  },
});

theme = responsiveFontSizes(theme);

const useStyle = makeStyles(() => ({
  root: {
    width: 'auto',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.light,
  },
  container: {
    height: "auto",
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
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
    width: "100%",
    height: 400,
    backgroundColor: theme.palette.primary.main
  },
  fadeBack: {
    height: "inherit",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  links: {
    color: theme.palette.primary.light,
    textDecorationLine: "none",
    "active": {
      color: theme.palette.primary.dark
    }
  }

}));

const header = makeStyles(() => ({
  menuButton: {
    backgroundColor: theme.palette.primary.light,
    marginRight: theme.spacing(2),
  },

  appBar: {
    boxShadow: "none"
  },

  appbarmain: {
    backgroundColor: theme.palette.baseColor.light,
    boxShadow: "none"
  },

  links: {
    color: theme.palette.primary.light,
    textDecorationLine: "none",
    "active": {
      color: theme.palette.primary.dark
    }
  }
}));

const formBase = makeStyles(() => ({
  formImage: {
    height: "100%",
    borderRadius: 3,
  },
  FormPaper: {
    width: 800,
    maxHeight: 600,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    }
  },
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
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.secondary.main,
    zIndex: 1,
    color: theme.palette.secondary.dark,
    width: 25,
    height: 25,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: theme.palette.thirdy.main,
    color: theme.palette.baseColor.main,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.light
  },
});

const formPet = makeStyles({
  stepper: {
    width: 200,
    marginRight: "auto",
    backgroundColor: "transparent",
  },
  labelStep: {
    color: theme.palette.baseColor.main
  }
})

const login = makeStyles({
  paperMain: {
    width: 500,
    height: 400,
    marginTop: theme.spacing(1),
    marginLeft: "auto",
    marginRight: "auto"
  },

  titleForm: {
    height: 50
  },

  paperForm: {
    width: "auto",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100
  },
  submitBtn: {
    width: 100,
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
  }
})

export { theme, useStyle, header, formBase, ColorlibConnector, useColorlibStepIconStyles, formPet, login }