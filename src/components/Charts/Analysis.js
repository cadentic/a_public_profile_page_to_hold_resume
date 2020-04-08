import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { PieChart, Pie, Legend, Cell } from 'recharts';
import data from '../../data/data'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 605,
        color: 'white',
        backgroundColor: 'rgb(50, 50, 51)',
        height:345,
        marginTop:5,
        marginLeft:5,
        boxShadow:0
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
}));

export default function Analysis() {
    const classes = useStyles();
    const colors = ['#8884d8', '#f5f5f5', '#82ca9d', 'yello', 'pink', 'green', 'grey']
    const [chartData, setChartData] = useState(data.analysis)

    return (
        <Card className={classes.root} elevation={0} >
            <CardHeader
                action={
                    <IconButton aria-label="settings" style={{ color: 'white' }}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Analysis"
            />
            <CardContent style={{ color: 'white', paddingTop: 0 }}>

                <PieChart width={530} height={250}>
                    <Pie
                        isAnimationActive
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%" cy="50%"
                        innerRadius={60}
                        outerRadius={80} fill="red" label >
                        {
                            chartData.map((entry, index) => <Cell fill={colors[index%8]} />)
                        }
                    </Pie>
                    <Legend/>
                </PieChart>
                
            </CardContent>
        </Card>
    );
}
