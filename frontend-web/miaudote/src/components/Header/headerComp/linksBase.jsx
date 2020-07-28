import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link, useLocation, useHistory } from 'react-router-dom';

import { header } from '../../Layout/styles';
import { palette } from '../../Layout/theme';

export default function LinksBase(props) {
  const classes = header();
  const [value, setValue] = React.useState(0);

  const history = useHistory();

  const links = [
    '/homeUser',
    '/about',
    '/contacts',
    '/marketing',
    '/community',
  ];

  //   let location = useLocation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(links[newValue]);
  };

  return (
    <Paper square elevation={0} style={{ backgroundColor: 'transparent' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        style={{
          color: palette.primary.contrastText,
        }}
      >
        {/* <Link to="/about" className={classes.links}> */}
        <Tab value={0} label="Miaudote" />
        <Tab value={1} label="Sobre nós" />
        {/* </Link> */}
        {/* <Link to="/contacts" className={classes.links}> */}
        <Tab value={2} label="Contatos" />
        {/* </Link> */}
        {/* <Link to="/marketing" className={classes.links}> */}
        <Tab value={3} label="Lojas" />
        {/* </Link> */}
        {/* <Link to="/community" className={classes.links}> */}
        <Tab value={4} label="Comunidade" />
        {/* </Link> */}
      </Tabs>
    </Paper>
  );
}
