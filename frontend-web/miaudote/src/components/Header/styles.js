import {
    makeStyles
  } from '@material-ui/core/styles';

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  
    button:{
      textDecoration: "none"
    },
  
    title: {
      flexGrow: 1,
    },  
    appBar: {
      boxShadow: "none"
    },
    
    nested: {
        paddingLeft: theme.spacing(4),
      },
  }));

  export {useStyles}

