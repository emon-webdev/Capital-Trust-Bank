import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { Box } from '@mui/system';
import React, { useState } from "react";
import DetailsModal from "./DetailsModal";
import VisaTransaction from "./visaTransaction";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'white',
//   border: '0px solid #000',
//   borderRadius:'10px',
//   boxShadow: 24,
//   p: 4,
// };

// const useStyles = makeStyles({
//   table: {
//     fontSize: "20px",
//     minWidth: 650,
//     borderRadius: "15px",
//     background:
//       "linear-gradient(90deg, rgba(2,2,31,1) 0%, rgba(2,24,55,1) 5%, rgba(2,55,89,1) 12%, rgba(6,129,185,1) 61%, rgba(15,14,89,1) 98%, rgba(1,192,238,1) 100%, rgba(0,212,255,1) 100%);",
//     color: "white",
//   },
// });

const rows = [
  {
    id: 0,
    name: "Frozen yoghurt",
    date: "02/02/23",
    time: "09:15",
    amount: 24,
  },
  {
    id: 1,
    name: "Ice cream sandwich",
    date: "02/02/23",
    time: "09:15",
    amount: 24,
  },
  {
    id: 2,
    name: "Eclair",
    date: "02/02/23",
    time: "09:15",
    amount: 24,
  },
  {
    id: 3,
    name: "Cupcake",
    date: "02/02/23",
    time: "09:15",
    amount: 24,
  },
  {
    id: 4,
    name: "Gingerbread",
    date: "02/02/23",
    time: "09:15",
    amount: 24,
  },
  {
    id: 5,
    name: "Cupcake",
    date: "02/02/23",
    time: "09:15",
    amount: 24,
  },
  {
    id: 6,
    name: "Gingerbread",
    date: "02/02/23",
    time: "09:15",
    amount: 24,
  },
  {
    id: 7,
    name: "Gingerbread",
    date: "02/02/23",
    time: "09:15",
    amount: 24,
  },
];

export default function MyTransaction() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const classes = useStyles();
  return (
    <div className="container mt-10 flex gap-5">
      <div className="">
        <TableContainer sx={{ width: "900px" }} component={Paper}>
          <Table className="class table" aria-label="simple table">
            <TableRow>
              <TableCell align="center">
                <Typography fontSize={20} fontWeight="bold" color="white">
                  Categ
                </Typography>
              </TableCell>
              <TableCell color="white" align="center">
                <Typography fontSize={20} fontWeight="bold" color="white">
                  Date
                </Typography>{" "}
              </TableCell>
              <TableCell align="center">
                <Typography fontSize={20} fontWeight="bold" color="white">
                  Time
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography fontSize={20} fontWeight="bold" color="white">
                  Amount
                </Typography>
              </TableCell>
              <TableCell align="center">
                {" "}
                <Typography fontSize={20} fontWeight="bold" color="white">
                  Details
                </Typography>
              </TableCell>
            </TableRow>

            <TableBody>
              {rows.map((row) => (
                <>
                  <TableRow key={row.id}>
                    <TableCell align="center" component="th" scope="row">
                      <Typography
                        fontSize={17}
                        fontWeight="semibold"
                        color="white"
                      >
                        {" "}
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        fontSize={17}
                        fontWeight="semibold"
                        color="white"
                      >
                        {row.date}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        fontSize={17}
                        fontWeight="semibold"
                        color="white"
                      >
                        {row.time}
                      </Typography>{" "}
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        fontSize={17}
                        fontWeight="semibold"
                        color="white"
                      >
                        ${row.amount}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <button
                        onClick={() => handleOpen(row)}
                        className="btn text-white text-bold p-3 rounded bg-[#da6666] hover:bg-[#3085d2] hover:fw-bold"
                      >
                        Details
                      </button>
                    </TableCell>
                  </TableRow>

                  <DetailsModal
                    row={row}
                    open={open}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                  />
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="">
        <VisaTransaction />
      </div>
    </div>
  );
}
