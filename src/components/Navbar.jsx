import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { findByLabelText } from "@testing-library/react";
import {useState} from 'react'


const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")] : {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")] : {
            display: "none",
        },
    },
    search: {
        display: "flex",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover':{
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: "50%",
        [theme.breakpoints.down("sm")] : {
            display: (props) => props.open ? "flex" : "none",
            width: "70%"
        },
    },
    input: {
        color: "white",
        marginLeft: theme.spacing(1)
    },
    cancel: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        }
    },
    icons: {
        display: "flex",
        alignItems: "center",
        display: (props) => props.open ? "none" : "flex"
        ,
    }, 
    badge: {
        marginRight: theme.spacing(2)
    },
    searchButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")] : {
            display: "none"
        },
    }
}))

function Navbar() {
    const [open, setOpen] = useState(false)
    const classes = useStyles({ open })

  return (
    <AppBar>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
                Dev Team
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
                Dev
            </Typography>
            <div className={classes.search}>
                <Search />
                <InputBase placeholder="search..." className={classes.input}/>
                <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
            </div>
            <div className={classes.icons}>
                <Search className={classes.searchButton} onClick={()=>setOpen(!open)}/>
                <Badge badgeContent={4} color="secondary" className={classes.badge}>
                    <Mail />
                </Badge>
                <Badge badgeContent={1} color="secondary" className={classes.badge}>
                    <Notifications />
                </Badge>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg" />
            </div>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;
