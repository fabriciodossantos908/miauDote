import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles
} from '@material-ui/core/styles';
import { withStyles } from '../../../node_modules/@material-ui/styles';
import StepConnector from '@material-ui/core/StepConnector';

<<<<<<< HEAD
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
=======
let theme = createMuiTheme({
  palette: {
    type: "dark",
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
    primary: {
      light: '#ff9d9c',
      main: '#fc6b6ez',
      dark: '#c43843',
<<<<<<< HEAD
      contrastText: '#ffffff',
=======
      contrastText: '#000000',
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
    },
    secondary: {
      light: '#69fafe',
      main: '#1bc7cb',
      dark: '#00969a',
      contrastText: '#ffffff',
    },
<<<<<<< HEAD
    baseColor: {
      light: '#fffff',
      main: '#ffffff',
      dark: '#2186C4',
=======
    thirdy: {
      main: "#F28E13"
    },
    baseColor: {
      light: '#fffff',
      main: '#ffffff',
      dark: '#000000',
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
      contrastText: '#00bcc1',
    },
  },
});

theme = responsiveFontSizes(theme);

const useStyle = makeStyles(() => ({
  root: {
    width: 'auto',
<<<<<<< HEAD
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
=======
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.light,
  },
  container: {
    height: "auto",
<<<<<<< HEAD
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    }
  },
  inputPaper: {
    maxWidth: 300,
    minHeight: 300,
    margin: theme.spacing(5),
=======
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
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
}));

const header = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
=======
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
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
  menuButton: {
    backgroundColor: theme.palette.primary.light,
    marginRight: theme.spacing(2),
  },

<<<<<<< HEAD
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.baseColor.main,
=======
  appBar: {
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
    boxShadow: "none"
  },

  appbarmain: {
    backgroundColor: theme.palette.baseColor.light,
    boxShadow: "none"
  },

<<<<<<< HEAD
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
=======
  links: {
    color: theme.palette.primary.light,
    textDecorationLine: "none",
    "active": {
      color: theme.palette.primary.dark
    }
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
  }
}));

const formBase = makeStyles(() => ({
  formImage: {
<<<<<<< HEAD
    width: "auto",
    height: "100%",
    borderRadius: 3,
    backgroundColor: theme.palette.primary.dark
  },
  FormPaper: {
    width: 800,
    minHeight: 300, 
    height: "auto",
=======
    height: "100%",
    borderRadius: 3,
  },
  FormPaper: {
    width: 800,
    maxHeight: 600,
    marginLeft: "auto",
    marginRight: "auto",
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
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
<<<<<<< HEAD
    marginLeft: "auto",
    marginRight: "auto",
    border: 0,
    backgroundColor: theme.palette.primary.dark,
=======
    marginRight: "auto",
    border: 0,
    backgroundColor: theme.palette.secondary.main,
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
<<<<<<< HEAD
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
=======
    backgroundColor: theme.palette.secondary.main,
    zIndex: 1,
    color: theme.palette.secondary.dark,
    width: 25,
    height: 25,
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
<<<<<<< HEAD
    backgroundColor: theme.palette.primary.dark,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor: theme.palette.primary.dark
=======
    backgroundColor: theme.palette.thirdy.main,
    color: theme.palette.baseColor.main,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.light
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
  },
});

const formPet = makeStyles({
  stepper: {
<<<<<<< HEAD
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
=======
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

export { theme, useStyle, header, formBase, ColorlibConnector, useColorlibStepIconStyles, formPet, login, profile }
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
