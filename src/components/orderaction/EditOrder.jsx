import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import RemoveIcon from '@mui/icons-material/Remove';
import { Chip, Link, Stack, Typography } from '@mui/material';
import Button from '../utils/Button';
import AddIcon from '@mui/icons-material/Add';

export default function EditOrder({ item }) {
    console.log(item)
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Link
                underline={'false'}
                sx={{ cursor: 'pointer' }}
                onClick={handleClickOpen}
            >
                Edit
            </Link>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{ sx: { borderRadius: '15px', p: 2 } }}
            >
                <DialogContent>
                    <h4>{item.row.productName}</h4>
                    <DialogContentText>
                        <Typography variant={'caption'} fontWeight={'bold'}>
                            {item.row.brand}
                        </Typography>
                    </DialogContentText>
                    <br />
                    <Stack direction={'row'} spacing={2}>
                        <img
                            src={'Avocado.jpg'}
                            alt={'Img'}
                            width={180}
                            height={180}
                        />
                        <Stack spacing={3}>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                spacing={2}
                            >
                                <Typography variant={'body2'}>
                                    Price ($)
                                </Typography>
                                <TextField
                                    variant={'outlined'}
                                    size={'small'}
                                    value={item.row.price}
                                    sx={{ borderRadius: '10px' }}
                                />
                            </Stack>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                spacing={2}
                            >
                                <Typography variant={'body2'}>
                                    Quantity
                                </Typography>
                                <Stack direction={'row'} spacing={2}>
                                    <Button
                                        style={{
                                            borderRadius: '50%',
                                            padding: '0 7px',
                                        }}
                                        outlined
                                    >
                                        <RemoveIcon />
                                    </Button>
                                    <TextField
                                        variant={'outlined'}
                                        size={'small'}
                                        value={item.row.quantity}
                                        sx={{ maxWidth: '50px' }}
                                    />
                                    <Button
                                        style={{
                                            borderRadius: '50%',
                                            padding: '0 7px',
                                        }}
                                        contained
                                    >
                                        <AddIcon />
                                    </Button>
                                </Stack>
                            </Stack>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                spacing={2}
                            >
                                <Typography variant={'body2'}>
                                    Total
                                </Typography>
                                <Typography variant={'body2'}>
                                    $ {item.row.price * item.row.quantity}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack spacing={1}>
                        <DialogContentText>
                            <h5>Choose reason (Optional)</h5>
                        </DialogContentText>
                        <Stack direction={'row'} spacing={1}>
                            <Chip label={'Missing Product'} />
                            <Chip label={'Quantity is not the same'} />
                            <Chip label={'Price is not the same'} />
                            <Chip label={'Other'} />
                        </Stack>
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ pr: 3, pb: 3 }}>
                    <Button onClickHandler={handleClose}>Cancel</Button>
                    <Button contained onClickHandler={handleClose}>
                        Send
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}