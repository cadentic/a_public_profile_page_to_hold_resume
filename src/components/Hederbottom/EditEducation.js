import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

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

    const handleSubmit = () => {
        props.handleDataSubmit(formData)
        props.handleClose()
    }

    return (
        <div>
            <Dialog fullWidth={true} maxWidth={'sm'} open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogContent>

                    {formData.map((entry, index) => (
                        <>
                            <TextField
                                autoFocus
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
                            <TextField
                                margin="dense"  
                                name="description"
                                label="Description"
                                type="text"
                                fullWidth
                                multiline
                                onChange={(e)=>{handleOnChange(e,index)}}
                                value={entry.description}

                            />
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
