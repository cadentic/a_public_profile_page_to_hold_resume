import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 605,
        color: 'white',
        backgroundColor: 'rgb(50, 50, 51)',
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

export default function RadarCOmponent() {
    const classes = useStyles();
    const [data, setData] = useState([
        {
          "subject": "HTML",
          "A": 120,
          "B": 110,
          "fullMark": 150
        },
        {
          "subject": "JAVA",
          "A": 98,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "CSS",
          "A": 86,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "PSD",
          "A": 99,
          "B": 100,
          "fullMark": 150
        },
        {
          "subject": "Designing",
          "A": 85,
          "B": 90,
          "fullMark": 150
        },
        {
          "subject": "UX",
          "A": 95,
          "B": 55,
          "fullMark": 150
        },
        {
            "subject": "UI",
            "A": 85,
            "B": 45,
            "fullMark": 150
        }
      ])
    return (
        <Card style={{borderRadius:30}} className={classes.root}>
            <CardHeader
                action={
                    <IconButton aria-label="settings" style={{ color: 'white' }}>
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Analysis"
            />
            <CardContent style={{color:'white', paddingTop:0}}>

                <RadarChart  outerRadius={90} width={600} height={280} data={data}>
                    {/* <PolarGrid /> */}
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'white' }} />
                    <Radar name="Last Month" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="This Month" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                </RadarChart>

            </CardContent>
        </Card>
    );
}
