import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Fade } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  tag: {
    height: 30,
    borderRadius: 20,
    backgroundColor: theme.palette.primary.light,
  },
  tagclicked: {
    height: 30,
    borderRadius: 20,
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function Tag(props) {
  const { name } = props;
  const classes = useStyles();
  const [iconClicked, seticonClicked] = useState(false);

  const defineIcon = () => {
    if (iconClicked === false) {
      seticonClicked(true);
    } else if (iconClicked === true) {
      seticonClicked(false);
    }
  };
  return (
    <Button
      endIcon={iconClicked === true ? <CloseIcon /> : <AddIcon />}
      className={iconClicked === true ? classes.tag : classes.tagclicked}
      onClick={defineIcon}
    >
      {name}
    </Button>
  );
}
