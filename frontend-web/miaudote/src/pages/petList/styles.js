import { theme } from '../../components/Layout/styles'
import { makeStyles } from '@material-ui/core'

const petStyle = makeStyles ({
    root : {
        flexGrow: 1
    },
    body : {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: theme.palette.baseColor.main
    }
})

export { petStyle }