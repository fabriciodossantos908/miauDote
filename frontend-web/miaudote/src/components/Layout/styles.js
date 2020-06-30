import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles
} from '@material-ui/core/styles';
import { withStyles } from '../../../node_modules/@material-ui/styles';
import StepConnector from '@material-ui/core/StepConnector';

const logoS = require('../../images/logoS.jpg')
const logoN = require('../../images/logoN.jpg')
const homeInicio = require('../../images/homeInicio.jpg')
const davi = require('../../images/davi.jpg')
const fabricio = require('../../images/fabricio.jpg')
const joanna = require('../../images/joanna.jpg')
const joao = require('../../images/joao.jpg')


let theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      light: '#fff',
      main: '#3f50b5',
      dark: '#369696',
      contrastText: '#fff',
    },
    secondary: {
      light: '#2186C4',
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
    color: theme.palette.primary.light,
  },

  container: {
    width: 800,
    minHeight: 300,
    height: "auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    }
  },
  inputPaper: {
    maxWidth: 300,
    minHeight: 300,
    margin: theme.spacing(5),
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
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.contrastText,
  },

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
    backgroundColor: theme.palette.primary.light,
    boxShadow: "none"
  },

  appbarmain: {
    backgroundColor: theme.palette.secondary.light,
    boxShadow: "none"
  },

  menuButton: {
    marginRight: theme.spacing(2),

  },

  nested: {
    paddingLeft: theme.spacing(4),
  },

  logo: {
    marginRight: theme.spacing(2),
    width: 80,
    height: 50,
    backgroundColor: theme.palette.primary.dark
  },

  firstName: {
    fontFamily: "italic",
    fontSize: 20,
    color: "#d32f2f"
  },

  twoName: {
    fontFamily: "italic",
    fontSize: 20,
    color: "#42a5f5",
  }
}));

const formBase = makeStyles(() => ({
  formImage: {
    width: "auto",
    height: "100%",
    borderRadius: 3,
    backgroundColor: theme.palette.primary.dark
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
    marginLeft: "auto",
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
    width: 50,
    height: 50,
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
    width: 100,
    marginRight: "auto",
    backgroundColor: "transparent"
  }
})

const footer = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  base: {
    flexGrow: 1,
    backgroundColor: "#2196f3",
  },

title:{
  fontSize: 20,
  fontFamily: "italic",
  color: "#ffffff"
},

subTitle: {
  fontSize: 12,
  fontFamily: "roboto"
},

logo: {
  minWidth: 50,
  minHeight: 45,
    backgroundColor: "#2196f3"
},

imgLogo:{
  width: 200,
  height: 100,
  padding: 20,
  marginTop: 20,
  marginLeft: 20,
  backgroundColor: "yellow"
},

avatar: {
  display: 'flex',
  '& > *': {
    margin: theme.spacing(1),
    alignItems: "center",
    marginTop: 50
  },
  marginLeft: 10,
},

copy: {
  fontFamily: "Roboto",
  fontSize: 15,
  alignItems: "center",
  marginLeft: 500,
  marginTop: 10
},

footer:{
  backgroundColor: "#0069c0",
}
}));

export { theme, useStyle, header, footer, formBase, ColorlibConnector, useColorlibStepIconStyles, formPet }