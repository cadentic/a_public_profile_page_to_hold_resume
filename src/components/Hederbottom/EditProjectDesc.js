import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export default function EditProfile(props) {

    const [formData, setFormData] = useState(props.init)

    const handleOnChange = (e) => {
        setFormData(e.target.value)
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
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Project description"
                        type="text"
                        fullWidth
                        multiline
                        onChange={handleOnChange}
                        value={formData}
                    />
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
