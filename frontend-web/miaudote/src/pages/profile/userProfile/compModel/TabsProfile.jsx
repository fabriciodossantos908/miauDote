import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import PetTab from './PetTab';
import Gear from '../../../utils/gears/gear';
import { palette } from '../../../../components/Layout/theme';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function TabsProfile() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        elevation={0}
        style={{ backgroundColor: palette.primary.contrastText }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab
            style={{ color: palette.primary.dark }}
            label="Pets"
            {...a11yProps(0)}
          />
          <Tab
            style={{ color: palette.primary.dark }}
            label="Favoritos"
            {...a11yProps(1)}
          />
          <Tab
            style={{ color: palette.primary.dark }}
            label="Pets encontrados"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PetTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Gear />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Gear />
      </TabPanel>
    </div>
  );
}
