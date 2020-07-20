import { makeStyles } from '@material-ui/core'
import { palette } from '../../components/Layout/theme'

const petStyle = makeStyles ({
    root : {
        flexGrow: 1
    },
    body : {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: "black"
    },
    typografy: {
        marginTop: 20,
        marginBottom: 20,
        fontFamily: "italic",
        textJustify: "center",
        color: palette.secondary.contrastText
    }
})

export { petStyle }