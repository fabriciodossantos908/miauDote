import { theme } from '../../Layout/styles';
import { makeStyles } from '@material-ui/core';

const themeMain = theme;

const useStyle = makeStyles(() => ({
  links: {
    color: themeMain.palette.primary.main,
  },
}));

export { useStyle };
