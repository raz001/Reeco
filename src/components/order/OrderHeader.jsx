import React from 'react';
import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Div from '../utils/Div';
import Button from '../utils/Button';

export default function OrderHeader() {
    const handleClick = (event) => {
        event.preventDefault();
    };

    const breadcrumbs = [
        <Typography key='1' color='text.primary'>
            Orders
        </Typography>,
        <Link
            underline={'always'}
            key='2'
            color='inherit'
            //href='/material-ui/getting-started/installation/'
            onClick={handleClick}
        >
            Order 32457ABC
        </Link>,
    ];

    return (
        <Div style={{ boxShadow: '0 4px 2px -2px rgba(0, 0, 0, 0.2)' }}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize='small' />}>
                {breadcrumbs}
            </Breadcrumbs>
            <br />
            <Stack direction={'row'} justifyContent={'space-between'}>
                <h2>Order 32457ABC</h2>
                <Stack direction={'row'} spacing={2}>
                    <Button outlined={true}>Back</Button>
                    <Button contained={true}>Approve Order</Button>
                </Stack>
            </Stack>
        </Div>
    );
}