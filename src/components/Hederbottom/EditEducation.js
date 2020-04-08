import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import handler from '../../apiHandler';
import Editor from '../Editor/Editor';
import Typography from '@material-ui/core/Typography';

export const getCategories = async () => {
    return handler.get('/categories');
}

export default function EditWork(props) {

    const [formData, setFormData] = useState(props.init)

    const handleOnChange = (e, index) => {
        let update = formData.slice()
        update[index][e.target.name] = e.target.value
        console.log(update)
        setFormData(update)
    }

    const handleClose = () => {
        props.handleClose()
    };

    const handleSubmit = async () => {
        //send update request to backend.
        //if you want to show loading await on below call.
        handler.post('/update/education', formData)

        props.handleDataSubmit(formData)
        props.handleClose()
    }

    return (
        <div>
            <Dialog fullWidth={true} maxWidth={'sm'} open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent style={{paddingTop:50, overflowY:'auto', overflowX:'hidden'}}>

                    {formData.map((entry, index) => (
                        <>
                            <TextField
                                autoFocus={index===0}
                                margin="dense"
                                name='title'
                                label="Title"
                                type="text"
                                fullWidth
                                onChange={(e)=>{handleOnChange(e,index)}}
                                value={entry.title}
                            />
                            <TextField
                                margin="dense"
                                name='collegeName'
                                label="College Name"
                                type="text"
                                fullWidth
                                onChange={(e)=>{handleOnChange(e,index)}}
                                value={entry.collegeName}
                            />
                            <TextField
                                margin="dense"
                                name='grade'
                                label="Grade"
                                type="text"
                                fullWidth
                                onChange={(e)=>{handleOnChange(e,index)}}
                                value={entry.grade}
                            />
                            <TextField
                                margin="dense"
                                name='from'
                                label="Starting year"
                                type="text"
                                fullWidth
                                onChange={(e)=>{handleOnChange(e,index)}}
                                value={entry.from}
                            />
                            <TextField
                                margin="dense"
                                name='to'
                                label="Ending year"
                                type="text"
                                fullWidth
                                onChange={(e)=>{handleOnChange(e,index)}}
                                value={entry.to}
                            />
                            <Typography variant="body2" display="block" gutterBottom>
                                Description
                            </Typography>
                            <Editor data={formData[index].description} handleChange={(data) => handleOnChange({
                                target:{
                                    name:'description',
                                    value:data
                                }
                            }, index)} />
                            <div style={{marginBottom:30}}></div>
                        </>
                    ))}


                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
