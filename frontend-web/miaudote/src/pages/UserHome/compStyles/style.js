// import { theme } from '../../../components/Layout/styles'
import { makeStyles } from '@material-ui/core';

const mainNav = makeStyles((theme) => ({
  perfilField: {
    padding: theme.spacing(5),
  },
  userPhoto: {
    width: 100,
    height: 100,
  },
}));

export default mainNav;
