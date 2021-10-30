import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, Snackbar, TextField, Tooltip } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from 'react'


const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: 20,
        right: 20
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        margin: "auto",
        [theme.breakpoints.down("sm")]:{
            width: "100vw",
            height: "100vh"
        }
    },
    form:{
        padding: theme.spacing(2),
    },
    item: {
        marginBottom: theme.spacing(3),

    }
}))


function Add() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)


  return (
    <>
        <Tooltip title="Add" aria-label="add" onClick={()=>setOpen(!open)}>
            <Fab color="primary" className={classes.fab}>
                <AddIcon />
            </Fab>
        </Tooltip>

        <Modal open={open}>
            <Container className={classes.container}>
                <form className={classes.form} autoComplete="off">
                    <div className={classes.item}>
                        <TextField id="standard-basic" label="title" size="small" style={{width: "100%"}}/>
                    </div>
                    <div className={classes.item}>
                        <TextField 
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        defaultValue="Tell your story"
                        variant="outlined"
                        label="description" size="small" style={{width: "100%"}}/>
                    </div>
                    <div className={classes.item}>
                        <TextField select lable="Visibility" value="public">
                            <MenuItem value="public">Public</MenuItem>
                            <MenuItem value="private">Private</MenuItem>
                            <MenuItem value="unlisted">Unlisted</MenuItem>
                        </TextField>
                    </div>
                    <div className={classes.item}>
                    <FormLabel component="legend">Who can comment?</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel  value="Everybody" control={<Radio size="small"/>} label="Female" />
                        <FormControlLabel value="My Friends" control={<Radio size="small"/>} label="Male" />
                        <FormControlLabel value="Nobody" control={<Radio size="small"/>} label="Nobody" />
                        <FormControlLabel
                            value="disabled"
                            disabled
                            control={<Radio size="small"/>}
                            label="Premium"
                            />
                    </RadioGroup>
                    </div>
                    <div className={classes.item}>
                        <Button variant="outlined" color="primary" style={{marginRight:20}} onClick={()=>setOpen(!open)}>Create</Button>
                        <Button variant="outlined" color="secondary" onClick={()=>setOpen(!open)}>Cancel</Button>
                    </div>
                </form>
            </Container>
        </Modal>


    </>
  )
}


export default Add;
