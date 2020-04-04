import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles({
    tableContainer: {
        width: '570px',
        color: 'white',
        backgroundColor: 'rgb(50, 50, 51)',
    },
    root: {
        width: 605,
        color: 'white',
        backgroundColor: 'rgb(50, 50, 51)',
        overflowY:'auto'
    },
});

function createData(id, project, status) {
    return { id, project, status };
}

const rows = [
    createData('id00122','Dashboard design', 'In-progress'),
    createData('id00123','IOS App', 'Cancelled'),
    createData('id00124','BMW Redesign', 'Testing',)
];

const getBackgroundColor = (status)=>{
    switch(status){
        case "In-progress":
            return 'green'
        case 'Cancelled':
            return 'red'
        case 'Testing':
            return 'blue'
        default:
            return 'grey'
    }
}

export default function StatTable() {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={0} >
            <CardHeader
                action={
                    <IconButton aria-label="settings" style={{ color: 'white' }}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Project status"
            />
            <CardContent style={{ color: 'white', paddingTop: 0 }}>
                <TableContainer elevation={0} className={classes.tableContainer} component={Paper}>
                    <Table aria-label="simple table" >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{color:'white'}}>Id</TableCell>
                                <TableCell style={{color:'white'}} align="left">Project</TableCell>
                                <TableCell style={{color:'white'}} align="center">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell style={{color:'white'}} component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell style={{color:'white'}} align="left">{row.project}</TableCell>
                                    <TableCell style={{color:'white', backgroundColor:getBackgroundColor(row.status)}} align="center">{row.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}
