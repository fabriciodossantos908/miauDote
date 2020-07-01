import {makeStyles} from '@material-ui/core/styles';
import { theme } from '../Layout/styles'

const themeMain = theme

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },

  base: {
    flexGrow: 1,
    backgroundColor: themeMain.palette.background.default,
  },

title:{
  color: themeMain.palette.primary.dark
},

subTitle: {
  marginTop: 2,
  color: themeMain.palette.primary.main
},

logo: {
  minWidth: 50,
  minHeight: 45,
},

logoTitle: {
  color: themeMain.palette.primary.main
},

imgLogo:{
  imageOrientation: "auto"
},

icon: {
  width : 50,
  height: 50,
  backgroundColor: themeMain.palette.primary.main
},

copy: {
  fontFamily: "Roboto",
  fontSize: 15,
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 10
},

footer:{
  backgroundColor: themeMain.palette.background.default,
  color: themeMain.palette.primary.contrastText
}
}));

export {useStyles}