import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './styles.js'



export default function Footer(props) {
  const classes = useStyles(props);
  const classesF = useStyles();

  return (
    <Grid container className={classesF.root}>
      <Grid item xs={12} className={classesF.footer}>
          <Grid>
              
          </Grid>
          <Grid className={classesF.avatar} justify="flex-end"> 
            <Avatar alt="Remy Sharp" src="" />
            <Avatar alt="Travis Howard" src="" />
            <Avatar alt="Cindy Baker" src="" />
            <Avatar alt="indy Baker" src="" />
          </Grid>  
      </Grid>
    </Grid>
  );
}
