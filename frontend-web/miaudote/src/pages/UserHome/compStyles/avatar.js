import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const cat = require('../../../images/petImg/cat.jpg')
const dog = require('../../../images/petImg/dog.jpg')

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      marginLeft: theme.spacing(60),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  margin:{
    margin: 0
  }
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <div className={classes.margin}>
      <Avatar alt="Remy Sharp" src={cat} className={classes.large} />
    </div>
      <Avatar alt="Travis Howard" src={dog} className={classes.large} />
      <Avatar alt="Cindy Baker" src={cat} className={classes.large} />
    </div>
  );
}