import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width:'100%',
        backgroundColor:'rgb(50, 50, 51)',
        borderRadius:'30px',
        padding:30
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridItem:{
        color:'white',
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    linkTitle:{
        marginBottom:20,
    }
}));

export default function Links() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={4} className={classes.gridItem}>
                    <h3 className={classes.linkTitle}><b>Links</b></h3>
                    <div>Links</div>
                    <div>Links</div>
                    <div>Links</div>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                <h3 className={classes.linkTitle}><b>Links</b></h3>
                    <div>Links</div>
                    <div>Links</div>
                    <div>Links</div>
                </Grid>
                <Grid item xs={4} className={classes.gridItem}>
                <h3 className={classes.linkTitle}><b>Links</b></h3>
                    <div>Links</div>
                    <div>Links</div>
                    <div>Links</div>
                </Grid>
            </Grid>
        </div>
    );
}
