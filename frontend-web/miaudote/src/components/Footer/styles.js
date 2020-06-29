import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
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

export {useStyles}