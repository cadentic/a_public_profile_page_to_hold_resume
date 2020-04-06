import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import handler from '../../apiHandler';

export default function EditTimeline(props) {

    const [formData, setFormData] = useState(props.init)

    const handleOnChange = (e, index) => {
        let update = formData.slice()
        update[index][e.target.name] = e.target.value
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
                <DialogContent>

                    {formData.map((entry, index) => (
                        <>
                            <TextField
                                autoFocus={index===0}
                                margin="dense"
                                name="year"
                                label={`Item ${index+1} year`}
                                type="text"
                                fullWidth
                                onChange={(e)=>{handleOnChange(e,index)}}
                                value={entry.year}
                            />
                            <TextField
                                margin="dense"
                                name='icon'
                                label={`Item ${index+1} material icon name`}
                                type="text"
                                fullWidth
                                onChange={(e)=>{handleOnChange(e,index)}}
                                value={entry.icon}
                            />
                            <TextField
                                margin="dense"
                                name="description"
                                label={`Item ${index+1} description`}
                                type="text"
                                fullWidth
                                multiline
                                onChange={(e)=>{handleOnChange(e,index)}}
                                value={entry.description}

                            />
                            <div style={{marginBottom:20, marginTop:20}}>
                            </div>
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
