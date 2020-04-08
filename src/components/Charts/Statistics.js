import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts';
import data from '../../data/data'


const useStyles = makeStyles((theme) => ({
    root: {
        width: 605,
        color: 'white',
        backgroundColor: 'rgb(50, 50, 51)',
        height:345,
        marginTop:5,
        marginRight:5
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    actionButton: {
        color:'white',
        marginRight:5,
    }
}));

const chartAllData = data.stats

export default function Statistics() {
    const classes = useStyles();
    const [window, setWindow] = useState('year')

    return (
        <Card className={classes.root} elevation={0}>
            <CardHeader

                action={
                    <>
                        <Button size="small" variant={window==='week'?"contained":'outlined'} 
                            color="primary" className={classes.actionButton} 
                            onClick={()=>{setWindow('week')}}>
                            Week
                        </Button>
                        <Button size="small" variant={window==='month'?"contained":'outlined'} 
                            color="primary" className={classes.actionButton}
                            onClick={()=>{setWindow('month')}}
                        >
                            Month
                        </Button>
                        <Button size="small" variant={window==='year'?"contained":'outlined'} 
                            color="primary" className={classes.actionButton}
                            onClick={()=>{setWindow('year')}}>
                            Year
                        </Button>
                        <IconButton style={{ color: 'white' }} aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    </>
                }
                title="Statistics"
            />
            <CardContent>

                <AreaChart width={600} height={250} data={chartAllData[window]}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>

            </CardContent>
        </Card>
    );
}
