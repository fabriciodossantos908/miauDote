import {
    createMuiTheme,
    responsiveFontSizes,
    makeStyles,
} from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';

let theme = createMuiTheme({
    palette: { type: 'white', primary: cyan, secondary: cyan },
});

const useStyles = makeStyles(() => ({
    root: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        marginTop: 100,
        maxWidth: 800,
        minHeight: 500,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

export default { theme, useStyles };