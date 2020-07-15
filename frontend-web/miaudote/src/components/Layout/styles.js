import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles
} from '@material-ui/core/styles';
import { withStyles, ThemeProvider } from '../../../node_modules/@material-ui/styles';
import StepConnector from '@material-ui/core/StepConnector';

let theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: '#F69397',
      main: '#F4666C',
      dark: '#F03840',
      contrastText: '#000000',
    },
    secondary: {
      light: '#5FB6D9',
      main: '#048ABF',
      dark: '#024873',
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
    width: "100%",
    padding: theme.spacing(0.5),
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
    boxShadow: "none",
    backgroundColor: theme.palette.primary.light
  },
  appbarmain: {
    backgroundColor: theme.palette.primary.light,
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
    width: 500,
    height: 500,
    backgroundColor: theme.palette.background.default,
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

const ColorlibConnectorHorizontal = withStyles({
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
    width: 50,
    height: 2,
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
    marginRight: "auto",
    borderRadius: 100,
  },

  titleForm: {
    marginTop: theme.spacing(2),
    height: 50
  },

  submitBtn: {
    width: 100,
    marginTop: theme.spacing(5),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
  },
  btnSocialLogin: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text
  }
})

const profile = makeStyles({
  UserDescription : {
    paddingTop: theme.spacing(5),
    width: "100%",
    minHeight: theme.spacing(20)
  }
})

const mainHome = makeStyles({
  mainPaper : {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    minHeight: 300,
    padding: theme.spacing(2),
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  descSide : {
    width: theme.spacing(80),
    height: 500,
    borderRadius: 20

  },
  descContent : {
     height:"100%",
     backgroundColor: 'rgba(0,0,0,0.5)',
     borderRadius: 20
  }
})

export { theme, useStyle, header, formBase, ColorlibConnector, ColorlibConnectorHorizontal, useColorlibStepIconStyles, formPet, login, profile, mainHome }