import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import handler from '../../apiHandler';
import Editor from '../Editor/Editor';
import Typography from '@material-ui/core/Typography';

export default function EditProfile(props) {

    const [formData, setFormData] = useState(props.init)

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
                    <Editor data={formData} handleChange={(data)=>setFormData(data)} />
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
