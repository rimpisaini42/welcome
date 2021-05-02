import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: 300,
    margin: '0 auto',
    display: 'inline-block',
  },
});

export default function HeaderTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
      <Tabs className={classes.root}
        value={value}
        onChange={handleChange}
        //variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<PhoneIcon />} aria-label="RECENTS" />
        <Tab icon={<FavoriteIcon />} aria-label="FAVORITES" />
        <Tab icon={<PersonPinIcon />} aria-label="NEARBY" />
      </Tabs>
    
  );
}
