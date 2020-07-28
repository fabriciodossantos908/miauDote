import { makeStyles } from '@material-ui/core';
import { palette } from '../../components/Layout/theme';
import { theme } from '../../components/Layout/styles';

const petStyle = makeStyles({
  root: {
    flexGrow: 1,
  },
  body: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: palette.background.default,
  },
  typografy: {
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'italic',
    textJustify: 'center',
    color: palette.secondary.contrastText,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
});

export { petStyle };
