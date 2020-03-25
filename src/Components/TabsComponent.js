import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { doniraj } from "../../moc/doniraj";
import useToggle from "../hooks/useToggle";
import strik from '../img/strik.svg';
//import labelValues from './labelValues';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "auto",
    marginBottom: "30px",
    textAlign: "center",
    color:"black",
  },
  tabs: {
    color: "white",
    width: "255px"
    // borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    height: "160px",
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabValues = doniraj.map(doniraj => (
    <div className="tab-div">
      <img src={doniraj.icon} alt="" /><br/>
      {doniraj.name}
    </div>
  ));

  

  const labelValues = doniraj.map((doniraj) => 

      
      <ul className="label-ul">
        {doniraj.items.map((sub) => {
          const [selected, toggleSelected] = useState(false);
          return (
            <>
              <li className={`labels-li ${selected ? "label-selected" : ""}`} key={sub.id} onClick={() => toggleSelected(!selected)}>
                {sub.name}
                <img src={strik} className="hide-button" />
              </li>
            </>
          );
        }
        
        )}
      </ul>
  );

  // {cities.map(city => return <p onClick={() => setActive(true)} 
  // style={{ color: isActive ? "red" : "green" }}>{city}</p>;)}
  // {cities.map(city => <p key={city} onClick={() => { setCity(city) }} 
  // style={{ color: activeCity === city ? "red" : "green" }}>{city}</p>)}

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label={tabValues[0]} {...a11yProps(0)} />
        <Tab label={tabValues[1]} {...a11yProps(1)} />
        <Tab label={tabValues[2]} {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
       {labelValues[0]}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {labelValues[1]}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {labelValues[2]}
      </TabPanel>
    </div>
  );
}
