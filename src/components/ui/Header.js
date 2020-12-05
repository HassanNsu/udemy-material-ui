import React, {usestate} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import logo from "../../images/logo.svg";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom"



function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,

    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3cm"

    },
    logo: {
        height: "5em",
    },
    tabContainer:{
        marginLeft:"auto"
    },
    button:{
        ...theme.typography.estimate,
        borderRadius:"50px",
        marginLeft:"50px",
        marginRight:"25px",
        height:"45px",
    },
    tab:{
        ...theme.typography.tab,
        marginLeft:"20px"
    }
}));
export default function Header() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>


            <ElevationScroll>
                <AppBar position="static">
                    <Toolbar disableGutters={true}>
                        <img alt="company logo" className={classes.logo} src={logo} />
                        <Tabs 
                        className={classes.tabContainer} 
                        value={value} 
                        onChange={handleChange} 
                        >
                            <Tab className={classes.tab}  component={Link} to="/itemone" label="Item One" />
                            <Tab className={classes.tab}  label="Item Two" />
                            <Tab className={classes.tab}  label="Item Three"  />
                            <Tab className={classes.tab}  label="Item four" />
                            <Tab className={classes.tab}  label="Item five" />
                            <Tab className={classes.tab}  label="Item six"  />
                        </Tabs>
                        <Button variant={"contained"} color={"secondary"} className={classes.button}> User Name </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>

            <div className={classes.toolbarMargin}> </div>
            Hello


        </React.Fragment>
    );

}

