import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderRadius:'15px',
    background:'linear-gradient(90deg, rgba(2,2,31,1) 0%, rgba(2,24,55,1) 5%, rgba(2,55,89,1) 12%, rgba(6,129,185,1) 61%, rgba(15,14,89,1) 98%, rgba(1,192,238,1) 100%, rgba(0,212,255,1) 100%);',
    color:'white'
  },
  tablecell:{
    fontSize:'20px',
    fontWeight:'bold',
  },
  tableItem:{
    fontSize:'17px',
    fontWeight:'semibold',
    color:'white'
  }
});

function createData(name, date, fat, carbs, protein) {
 
  return { name,date, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt','02/02/23', '09:15', 24, 4.0),
  createData('Ice cream sandwich','12/01/23', '08:45', 37, 4.3),
  createData('Eclair', '15/01/23', '11:20', 24, 6.0),
  createData('Cupcake', '02/12/22', '23:15', 67, 4.3),
  createData('Gingerbread', '12/12/22', '17:35' ,49, 3.9),
];


 
export default function MyTransaction() {
  const classes = useStyles();
  return (
 <div className="container mt-10">
     <TableContainer component={Paper}>
    <Table  className={classes.table} aria-label="simple table">
      
        <TableRow >
          <TableCell className={classes.tablecell}  fontSize={"48px"} align="center">Category</TableCell>
          <TableCell className={classes.tablecell} align="center">Date</TableCell>
          <TableCell className={classes.tablecell} align="center">Time</TableCell>
          <TableCell className={classes.tablecell} align="center">Amount</TableCell>
          <TableCell className={classes.tablecell} align="center">Details</TableCell>
        </TableRow>
    
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell  className={classes.tableItem} align="center" component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell className={classes.tableItem}  align="center">{row.date}</TableCell>
            <TableCell className={classes.tableItem}  align="center">{row.fat}</TableCell>
            <TableCell className={classes.tableItem}  align="center">${row.carbs}</TableCell>
            <TableCell className={classes.tableItem}  align="center"><button className='btn fw-bold p-3 rounded bg-[#da6666] hover:bg-[#3085d2] hover:fw-bold'>Details</button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
 </div>
)} 

