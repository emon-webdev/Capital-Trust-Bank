import { makeStyles } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
    navlinks: {
        color: ["A400"],
        "& :hover , &:hover div": {
          color: ["A200"],
        },
        " & div": {
          color: ["A400"],
        },
      },
}))