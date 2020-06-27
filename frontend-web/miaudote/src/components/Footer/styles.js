import {
    makeStyles
  } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  avatar: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),

  }
},

title:{
  fontSize: 25,
  fontFamily: "italic",
  padding: 20
},

base: {
  flexGrow: 1,
  backgroundColor: "green",
  minHeight: 50
},

grid:{
  backgroundColor: "yellow",
  display: 'flex',
  
},
avatar: {
  display: 'flex',
  '& > *': {
    margin: theme.spacing(1),
    marginTop: 50,
    
  },
},

copy: {
  alignItems: "center",
}
}));

export {useStyles}