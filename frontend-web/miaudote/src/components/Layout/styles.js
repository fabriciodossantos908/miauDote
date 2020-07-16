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
      contrastText: '#fff',
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
  shape: {
    borderRadius: 0
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        backgroundColor: '#F4666C',
        color: '#F4666C',
      },
      
    }
  }

});

theme = responsiveFontSizes(theme);

const useStyle = makeStyles(() => ({
  root: {
    flexGrow: 1,

  },
  container: {
    height: "auto",
    marginBottom: theme.spacing(3),
    backgroundColor: "#f3f3f3",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      // marginBottom: theme.spacing(6),
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
  },
  links: {
    color: theme.palette.primary.contrastText,
    textDecorationLine: "none",
    "active": {
      color: theme.palette.primary.contrastText
    }
  },

  grid:{
    backgroundColor: theme.palette.secondary.light,
    height: 400,
},

media:{
  minWidth: "100%",
  minHeight: 350,
  borderRadius: 20
}

}));

const header = makeStyles(() => ({
  menuButton: {
    backgroundColor: theme.palette.primary.light,
    marginRight: theme.spacing(2),
  },
  appbarmain: {
    backgroundColor: theme.palette.primary.light,
    boxShadow: "none"
  },

  links: {
    color: theme.palette.secondary.contrastText,
    textDecorationLine: "none",
    "active": {
      color: theme.palette.primary.contrastText
    }
  },

  linksPerfil: {
    color: theme.palette.primary.contrastText,
    textDecorationLine: "none",
    "active": {
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
    marginLeft: 50,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {
      width: 300,
    }

  },
  content: {
    height: 340,
    borderRadius: 20
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
      backgroundColor: theme.palette.secondary.main
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
    backgroundColor: theme.palette.background.default,
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: theme.palette.background.default,
    zIndex: 1,
    color: theme.palette.primary.light,
    width: 27,
    height: 27,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.background.default,
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
  UserDescription: {
    paddingTop: theme.spacing(5),
    width: "100%",
    minHeight: theme.spacing(20),
    backgroundColor: "blue"
  }
})

const mainHome = makeStyles({
  mainPaper: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "90%",
    minHeight: 300,
    padding: theme.spacing(2),
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  descSide: {
    width: theme.spacing(85),
    height: 500,
    borderRadius: 20

  },
  descContent: {
    height: "100%",
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20
  },
  icon: {
    width: 50,
    height: 50,
    color: theme.palette.primary.main
  },
})

export { theme, useStyle, header, formBase, ColorlibConnector, ColorlibConnectorHorizontal, useColorlibStepIconStyles, formPet, login, profile, mainHome }