import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      marginLeft: theme.spacing(30),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.large} />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={classes.large} />
    </div>
  );
}