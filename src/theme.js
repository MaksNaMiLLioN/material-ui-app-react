import { createTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const theme = createTheme({
    palette: {
        primary:{
            main: blue[900]
        }
    },
    myButton: {
        backgroundColor: "red",
        color: "white",
        border: "1px solid black"
    }
})

