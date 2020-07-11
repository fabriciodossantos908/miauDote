import MainChunks from './main';
<<<<<<< HEAD

export { MainChunks }
=======
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    boxShadow: "none"
  },

});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Sobre nós" />
        <Tab label="Contato" />
        <Tab label="Missão" />
      </Tabs>
    </Paper>
  );
}

export { MainChunks, CenteredTabs }
>>>>>>> c397d56b4d67b669f274be5cec793d7aed95d500
