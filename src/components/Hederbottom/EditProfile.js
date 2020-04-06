import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import handler from '../../apiHandler';

export default function EditProfile(props) {

    const [formData, setFormData] = useState(props.init)

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
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
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        onChange={handleOnChange}
                        value={formData.name}
                    />
                    <TextField
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        onChange={handleOnChange}
                        value={formData.title}

                    />
                    <TextField
                        margin="dense"
                        id="telephone"
                        label="Telephone no."
                        type="tel"
                        fullWidth
                        onChange={handleOnChange}
                        value={formData.telephone}

                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={handleOnChange}
                        value={formData.email}
                    />
                    <TextField
                        margin="dense"
                        id="address"
                        label="Address"
                        type="text"
                        fullWidth
                        onChange={handleOnChange}
                        value={formData.address}
                    />
                    <TextField
                        margin="dense"
                        id="website"
                        label="Website"
                        type="text"
                        fullWidth
                        onChange={handleOnChange}
                        value={formData.website}
                    />
                    <TextField
                        margin="dense"
                        id="twitterAccount"
                        label="Twitter Account"
                        type="text"
                        fullWidth
                        onChange={handleOnChange}
                        value={formData.twitterAccount}
                    />
                    <TextField
                        margin="dense"
                        id="instaAccount"
                        label="instagram Account"
                        type="text"
                        fullWidth
                        onChange={handleOnChange}
                        value={formData.instaAccount}
                    />
                    <TextField
                        margin="dense"
                        id="otherAccount"
                        label="Other Account"
                        type="text"
                        fullWidth
                        onChange={handleOnChange}
                        value={formData.otherAccount}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        multiline
                        onChange={handleOnChange}
                        value={formData.description}
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
