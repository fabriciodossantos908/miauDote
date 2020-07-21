import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  inputPaper: {
    maxWidth: 300,
    minHeight: 300,
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  stepper: {
    marginLeft: 'auto',
    backgroundColor: lightBlue['100'],
  },
}));
