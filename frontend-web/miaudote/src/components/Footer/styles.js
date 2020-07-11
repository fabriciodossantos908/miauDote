import {makeStyles} from '@material-ui/core/styles';
import { theme } from '../Layout/styles'
<<<<<<< HEAD
const useStyles = makeStyles((theme) => ({
=======

const themeMain = theme

const useStyles = makeStyles(() => ({
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
  root: {
    flexGrow: 1,
  },

  base: {
    flexGrow: 1,
<<<<<<< HEAD
    backgroundColor: theme.palette.primary.main,
  },

title:{
  color: theme.palette.secondary.dark
=======
    backgroundColor: themeMain.palette.background.default,
  },

title:{
  color: themeMain.palette.primary.dark
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
},

subTitle: {
  marginTop: 2,
<<<<<<< HEAD
  color: theme.palette.secondary.light
=======
  color: themeMain.palette.primary.main
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
},

logo: {
  minWidth: 50,
  minHeight: 45,
},

<<<<<<< HEAD
imgLogo:{
  width: 200,
  height: 100,
  padding: 20,
  marginTop: 20,
  marginLeft: 20,
  backgroundColor: theme.palette.baseColor.dark
},

avatar: {
  display: 'flex',
  '& > *': {
    margin: theme.spacing(1),
    alignItems: "center",
    marginTop: 50
  },
  marginLeft: 10,
=======
logoTitle: {
  color: themeMain.palette.primary.main
},

imgLogo:{
  imageOrientation: "auto"
},

icon: {
  width : 50,
  height: 50,
  color: themeMain.palette.primary.main
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
},

copy: {
  fontFamily: "Roboto",
  fontSize: 15,
  alignItems: "center",
<<<<<<< HEAD
  marginLeft: 500,
=======
  marginLeft: "auto",
  marginRight: "auto",
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
  marginTop: 10
},

footer:{
<<<<<<< HEAD
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.baseColor.main
=======
  backgroundColor: themeMain.palette.background.default,
  color: themeMain.palette.primary.contrastText
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
}
}));

export {useStyles}