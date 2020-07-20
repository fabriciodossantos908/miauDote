import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

import { header } from '../../Layout/styles'
import { palette } from '../../Layout/theme'

export default function LinksBase(props) {
    const classes = header()
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Paper square elevation={0} style={{backgroundColor: palette.primary.light,}}>
            <Tabs
                value={value}
                onChange={handleChange}
            >
                <Link to="/about" className={classes.links}>
                    <Tab label="Sobre nós" />
                </Link>
                <Link to="/contacts" className={classes.links}>
                    <Tab label="Contatos" />
                </Link>
                <Link to="/marketing" className={classes.links}>
                    <Tab label="Lojas" />
                </Link>
                <Link to="/community" className={classes.links}>
                    <Tab label="Comunidade" />
                </Link>

            </Tabs>
        </Paper>
    );

}

// import React from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// import { Link } from 'react-router-dom';


// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`simple-tabpanel-${index}`}
//             aria-labelledby={`simple-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     };
// }

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.paper,
//     },
// }));

// export default function Links() {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };

//     function link() {
//         return(
//         <Link to="/formCompany" className={classes.links}></Link>
//         )
//     }
//     return (
//         <div className={classes.root}>
//             <AppBar position="static">
//                 <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//                     {/* <Link to="/formCompany" className={classes.links}> */}
//                     <Tab label="teste" onClick={link} />
//                     {/* </Link> */}

//                     <Tab label="Item One" />
//                     <Tab label="Item Two" />
//                     <Tab label="Item Three" />
//                 </Tabs>
//             </AppBar>
//             <TabPanel value={value} index={0}>
//                 Item One
//       </TabPanel>
//             <TabPanel value={value} index={1}>
//                 Item Two
//       </TabPanel>
//             <TabPanel value={value} index={2}>
//                 Item Three
//       </TabPanel>
//         </div>
//     );
// }


