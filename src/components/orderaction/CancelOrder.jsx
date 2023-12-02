import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
    Button,
    Dialog,
    IconButton,
    DialogActions,
    DialogContentText,
    DialogContent,
    DialogTitle,
} from '@mui/material';

export default function CancelOrder({ item, setOrderState }) {
    const [open, setOpen] = React.useState(false);
    const [defaultColor, changeColor] = React.useState(
        item.row.status?.includes('Missing') ? true : false
    );

    const handleCancelClick = () => {
        setOpen(true);
    };

    const handleNoClick = () => {
        setOrderState('Missing');
        changeColor(!defaultColor);
        setOpen(false);
    };

    const handleYesClick = () => {
        setOrderState('Missing - Urgent');
        changeColor(!defaultColor);
        setOpen(false);
    };

    return (
        <div>
            <IconButton
                size={'small'}
                onClick={handleCancelClick}
                color={defaultColor ? 'error' : 'default'}
            >
                <CloseIcon fontSize={'12'} />
            </IconButton>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle id='alert-dialog-title'>
                    Missing Product ?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                        Is{' '}
                        <span>
                            <b>{item.row.productName}</b>
                        </span>{' '}
                        urgent ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleNoClick}>No</Button>
                    <Button onClick={handleYesClick} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}