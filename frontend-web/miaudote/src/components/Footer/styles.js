import {makeStyles} from '@material-ui/core/styles';
import { theme } from '../Layout/styles'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  base: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },

title:{
  color: theme.palette.secondary.dark
},

subTitle: {
  marginTop: 2,
  color: theme.palette.secondary.light
},

logo: {
  minWidth: 50,
  minHeight: 45,
},

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
},

copy: {
  fontFamily: "Roboto",
  fontSize: 15,
  alignItems: "center",
  marginLeft: 500,
  marginTop: 10
},

footer:{
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.baseColor.main
}
}));

export {useStyles}