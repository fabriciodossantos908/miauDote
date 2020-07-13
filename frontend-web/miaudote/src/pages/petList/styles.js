import { theme } from '../../components/Layout/styles'
import { makeStyles } from '@material-ui/core'

const petStyle = makeStyles ({
    root : {
        flexGrow: 1
    },
    body : {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: theme.palette.baseColor.dark
    },
    typografy: {
        marginTop: 20,
        marginBottom: 20,
        fontFamily: "italic",
        textJustify: "center",
        color: theme.palette.secondary.contrastText
    }
})

export { petStyle }