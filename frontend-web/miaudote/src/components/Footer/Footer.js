import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },

  rootTwo: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      marginTop: 50,

  }
},

  footer: {
    minWidth: 100,
    minHeight: 150,
    backgroundColor: "blue",
    marginTop: "auto"
  }

}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.footer}>
          <Grid>
              
          </Grid>
          <Grid className={classes.rootTwo} justify="flex-end"> 
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar alt="indy Baker" src="/static/images/avatar/4.jpg" />
          </Grid>  
      </Grid>
    </Grid>
  );
}
