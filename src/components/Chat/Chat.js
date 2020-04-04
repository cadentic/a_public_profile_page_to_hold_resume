import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled, { css } from 'styled-components';
import CallIcon from '@material-ui/icons/Call';
import VideoCamIcon from '@material-ui/icons/Videocam';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: 'rgb(50, 50, 51)',
        color:'white',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
    cardContent: {
        height:'300px',
        overflowY:'auto'
    },
    cardHeader: {
        backgroundColor:'black'
    },
    messageTypography:{
        backgroundColor: 'grey',
        borderRadius:'3px',
        padding:'2px',
        maxWidth:'200px'
    },
    sendIcon:{
        position:'absolute',
        right:'10px'
    }
}));

const ChatInput = styled.input`
    width:100%;
    background-color: black;
    color:white;
    border:none;
    padding-left:20px;
    border-radius:10px;
`

const MessageComponent = styled.div`
    width:100%;
    margin-top:8px;
    display:flex;
    ${props => props.sent && css`   
    flex-direction: row-reverse;
    `}
`

export default function Chat() {
    const classes = useStyles();

    const [messages, setMessages] = useState([
        {text:'Hi how are you', sent:true},
        {text:'Im fine, Thank you', sent:false}
    ])

    const [currMessage, setCurrMessage] = useState('')

    const sendMessage = (message) => {
        if(currMessage!==''){
            let newMessageArray = messages.slice()
            newMessageArray.push({
                text:message,
                sent:true
            })
            setCurrMessage('')
            setMessages(newMessageArray)
            //AXIOS call
        }
    }

    const handleOnEnter = (e) => {
        if(e.keyCode===13 ){
            sendMessage(currMessage)
        }
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.cardHeader}
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        J
                    </Avatar>
                }
                action={
                    <>
                    <VideoCamIcon style={{marginTop:'15px', marginRight:'5px'}}/>
                    <CallIcon style={{marginTop:'15px'}}/>
                    <IconButton style={{color:'white'}} aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    </>
                }
                title="John Doe"
                subheader="online"
            />
            <CardContent className={classes.cardContent}>
                {messages.map((message, index)=> 
                (<MessageComponent key={index} sent={message.sent}>
                    <Typography className={classes.messageTypography} variant="body2"  component="p">
                        {message.text}
                    </Typography>
                </MessageComponent>))
                }   
            </CardContent>

            <CardActions >
                <ChatInput
                    value={currMessage} 
                    onChange={(e)=>{setCurrMessage(e.target.value)}}
                    placeholder='type your message' onKeyUp={handleOnEnter} />
                <SendIcon onClick={()=>{sendMessage(currMessage)}} className={classes.sendIcon}/>
            </CardActions>
        </Card>
    );
}