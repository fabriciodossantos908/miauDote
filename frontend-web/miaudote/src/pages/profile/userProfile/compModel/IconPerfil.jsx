import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    // '&::after': {
    //   position: 'absolute',
    //   top: 0,
    //   left: 0,
    //   width: '100%',
    //   height: '100%',
    //   borderRadius: '50%',
    //   animation: '$ripple 1.2s infinite ease-in-out',
    //   border: '1px solid currentColor',
    //   content: '""',
    // },
  },
  // '@keyframes ripple': {
  //   '0%': {
  //     transform: 'scale(.8)',
  //     opacity: 1,
  //   },
  //   '100%': {
  //     transform: 'scale(2.4)',
  //     opacity: 0,
  //   },
  // },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  }

}));

export default function BadgeAvatars(props) {
  const classes = useStyles();

  const profilePhoto = props.profilePhoto
  return (
    <div className={classes.root}>
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
<Avatar alt="Remy Sharp" src={profilePhoto} className={classes.large} />
      </StyledBadge>
    </div>
  );
}
