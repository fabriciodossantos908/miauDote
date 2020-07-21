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
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
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
    width: 200,
    height: 50,
    marginLeft: 'auto',
    display: 'flex',
  },
  buttons: {
    width: 100,
    height: 40,
  },
  links: {
    color: palette.primary.contrastText,
    textDecorationLine: 'none',
    active: {
      color: palette.primary.contrastText,
    },
  },

  grid: {
    backgroundColor: palette.secondary.light,
    height: 400,
  },

  media: {
    minWidth: '100%',
    minHeight: 350,
    borderRadius: 20,
  },
}));

const header = makeStyles(() => ({
  menuButton: {
    backgroundColor: palette.primary.light,
    marginRight: theme.spacing(2),
  },
  appbarmain: {
    backgroundColor: palette.primary.light,
    boxShadow: 'none',
  },

  links: {
    color: palette.secondary.contrastText,
    textDecorationLine: 'none',
    active: {
      color: palette.primary.contrastText,
    },
  },

  linksPerfil: {
    color: palette.primary.contrastText,
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
    marginLeft: 50,
    backgroundColor: palette.background.default,
    [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {
      width: 300,
    },
  },
  content: {
    height: 340,
    borderRadius: 20,
  },
  contentModal: {
    height: 240,
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
    backgroundColor: palette.secondary.main,
    color: palette.text,
  },
});

const profile = makeStyles({
  UserDescription: {
    paddingTop: theme.spacing(5),
    width: '100%',
    minHeight: theme.spacing(20),
    backgroundColor: 'blue',
  },
});

const mainHome = makeStyles({
  mainPaper: {
    backgroundColor: palette.background.paper,
    minHeight: 300,
    padding: theme.spacing(2),
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  descSide: {
    width: theme.spacing(85),
    height: 500,
    borderRadius: 20,
  },
  descContent: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
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
