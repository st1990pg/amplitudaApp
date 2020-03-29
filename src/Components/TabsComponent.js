import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { doniraj } from "../../moc/doniraj";
import strik from '../img/strik.svg';

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

  
    const myRef = useRef();
    const wrongRef = useRef();
    useEffect(() => myRef.current && myRef.current.focus(), []);
    useEffect(() => wrongRef.current  && wrongRef.current.focus(), []); // Imao sam problem sa ternarim operatorom pa sam napravio isti ref koji se nikad ne koristi
  const labelValues = doniraj.map((doniraj) => 

      
      <ul className="label-ul">
        {doniraj.items.map((sub) => {
          const [selected, toggleSelected] = useState(false);
          // const [ref, toggleRef] = useState(false);
          return (
            <>
               <li ref={selected ? myRef : wrongRef} className={`labels-li ${selected ? "label-selected" : ""}`}  
              key={sub.id} onClick={() => { toggleSelected(!selected); console.log(this.myRef.current.bind(this)) }}>
                {sub.name}
                <img src={strik} className="hide-button" />
              </li>
            </>
          );
        }
        
        )}
      </ul>
  );

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
