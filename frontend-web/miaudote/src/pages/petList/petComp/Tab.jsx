import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Zoom } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { palette } from '../../../components/Layout/theme';

const useStyles = makeStyles((theme) => ({
  tag: {
    height: 30,
    borderRadius: 20,
    backgroundColor: palette.primary.light,
  },
  tagclicked: {
    height: 30,
    borderRadius: theme.spacing(2),
    backgroundColor: palette.primary.dark,
  },
}));

export default function Tag(props) {
  const { name } = props;
  const classes = useStyles();
  const [iconClicked, seticonClicked] = useState(false);

  const defineIcon = () => {
    iconClicked === false ? seticonClicked(true) : seticonClicked(false);
  };
  return (
    <Button
      disableRipple
      endIcon={
        iconClicked === true ? (
          <Zoom in={iconClicked === true} timeout={1000}>
            <CloseIcon style={{ color: palette.primary.contrastText }} />
          </Zoom>
        ) : (
          <Zoom in={iconClicked === false} timeout={1000}>
            <AddIcon style={{ color: palette.primary.contrastText }} />
          </Zoom>
        )
      }
      className={iconClicked === true ? classes.tag : classes.tagclicked}
      onClick={defineIcon}
    >
      {name}
    </Button>
  );
}
