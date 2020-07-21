import { makeStyles } from '@material-ui/core/styles';

import { theme } from '../Layout/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },

  icon: {
    width: 50,
    height: 50,
    color: theme.palette.secondary.main,
  },

  text: {
    fontFamily: 'Arboria-book, sans-serif',
    fontVariant: 'h6',
    marginTop: 2,
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },

  fontCopy: {
    fontFamily: 'Arboria-book, sans-serif',
    fontVariant: 'h6',
    fontSize: '1.1em',
    marginTop: 5,
    fontWeight: 'bold',
    color: theme.palette.secondary.contrastText,
  },

  media: {
    width: 220,
    height: 150,
  },
}));

export { useStyles };
