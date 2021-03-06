import { responsiveFontSizes, makeStyles } from '@material-ui/core/styles';
import { withStyles } from '../../../node_modules/@material-ui/styles';
import StepConnector from '@material-ui/core/StepConnector';
import { themeMain, palette } from './theme';

let theme = themeMain;

theme = responsiveFontSizes(theme);

const useStyle = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    height: 'auto',
    marginBottom: theme.spacing(3),
    backgroundColor: '#f3f3f3',
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {
      // marginBottom: theme.spacing(6),
      margin: 0,
    },
  },
  inputPaper: {
    width: '100%',
    padding: theme.spacing(0.5),
  },

  stepper: {
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'transparent',
  },
  groupButtons: {
    width: 400,
    height: 50,
    marginLeft: 'auto',
    display: 'flex',
  },
  buttons: {
    width: 100,
    height: 40,
  },
  links: {
    textDecorationLine: 'none',
    color: palette.primary.main,
    active: {
      color: palette.primary.contrastText,
    },
  },

  grid: {
    height: 500,
  },

  media: {
    minWidth: '100%',
    minHeight: 350,
    borderRadius: 20,
  },
}));

const header = makeStyles(() => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appbarmain: {
    boxShadow: 'none',
  },

  links: {
    color: palette.common.black,
    textDecorationLine: 'none',
    active: {
      color: palette.primary.contrastText,
    },
  },

  linksPerfil: {
    color: palette.common.black,
    textDecorationLine: 'none',
    active: {},
  },
}));

const formBase = makeStyles(() => ({
  formImage: {
    height: '100%',
    borderRadius: 3,
  },
  FormPaper: {
    width: 500,
    height: 500,
    marginTop: '5vh',
    marginLeft: 50,
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {
      width: 300,
    },
  },
  content: {
    height: 340,
    borderRadius: 20,
  },
}));

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  line: {
    width: 2,
  },
})(StepConnector);

const ColorlibConnectorHorizontal = withStyles({
  alternativeLabel: {
    top: 22,
  },
  line: {
    width: 20,
    height: 2,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: palette.background.default,
    zIndex: 1,
    color: palette.primary.light,
    width: 27,
    height: 27,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: palette.secondary.light,
    color: palette.background.default,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    color: palette.primary.dark,
    backgroundColor: palette.primary.light,
  },
});

const formPet = makeStyles({
  // stepper: {
  //   width: 200,
  //   marginRight: "auto",
  //   backgroundColor: "transparent",
  // },
  labelStep: {
    color: 'white',
  },
});

const login = makeStyles({
  paperMain: {
    width: 500,
    height: 400,
    marginTop: theme.spacing(1),
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 100,
  },

  titleForm: {
    marginTop: theme.spacing(2),
    height: 50,
  },

  submitBtn: {
    width: 100,
    marginTop: theme.spacing(5),
    backgroundColor: palette.primary.light,
    color: palette.primary.contrastText,
  },
  btnSocialLogin: {
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
  },
  inputPaper: {
    width: '100%',
    height: 350,
    padding: theme.spacing(0.5),
  },
});

const profile = makeStyles({
  UserDescription: {
    paddingTop: theme.spacing(5),
    width: '100%',
    minHeight: theme.spacing(20),
    backgroundColor: palette.primary.light,
  },
});

const mainHome = makeStyles({
  mainPaper: {
    backgroundColor: palette.background.paper,
    minHeight: 600,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  descSide: {
    height: 700,
    marginBottom: '7vh',
  },
  descContent: {
    height: '100%',
    marginTop: '2vh',
    borderRadius: 20,
  },
  sectionDescContent: {
    height: 80,
    marginBottom: 5,
    borderBottomRightRadius: 40,
    backgroundColor: palette.secondary.main,
  },
  icon: {
    width: 50,
    height: 50,
    color: palette.primary.main,
  },
});

export {
  theme,
  useStyle,
  header,
  formBase,
  ColorlibConnector,
  ColorlibConnectorHorizontal,
  useColorlibStepIconStyles,
  formPet,
  login,
  profile,
  mainHome,
};
