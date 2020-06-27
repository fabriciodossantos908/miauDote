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
      marginTop: 50,
      padding: 10,

  }
},

  footer: {
    minWidth: 100,
    minHeight: 150,
    backgroundColor: "blue",
    marginTop: "auto"
  }

}));

export {useStyles}