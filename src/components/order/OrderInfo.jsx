import React from 'react';
import Div from '../utils/Div';
import { Divider, Stack, styled } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import CakeIcon from '@mui/icons-material/Cake';

const Caption = styled('h5')({
    color: 'gray',
    fontWeight: 'bold',
});

export default function OrderInfo() {
    return (
        <Div style={{ marginTop: '16px' }}>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                sx={{ p: 2 }}
                style={{
                    border: '2.3px solid whitesmoke',
                    borderRadius: '15px',
                }}
            >
                <Stack sx={{ pl: 3 }} spacing={1}>
                    <Caption>Supplier</Caption>
                    <h4>East coast fruits & vegetables</h4>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack spacing={1}>
                    <Caption>Shipping date</Caption>
                    <h4 variant={'h6'}>Thu, Feb 10</h4>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack spacing={1}>
                    <Caption>Total</Caption>
                    <h4 variant={'h6'}>$ 15,028.3</h4>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack spacing={1}>
                    <Caption>Category</Caption>
                    <Stack direction={'row'} spacing={1}>
                        <BrunchDiningIcon />
                        <FastfoodIcon />
                        <AcUnitIcon />
                        <LocalPizzaIcon />
                        <CakeIcon />
                    </Stack>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack spacing={1}>
                    <Caption>Department</Caption>
                    <h4 variant={'h6'}>300-444-678</h4>
                </Stack>
                <Divider orientation={'vertical'} flexItem />
                <Stack sx={{ pr: 3 }} spacing={1}>
                    <Caption>Status</Caption>
                    <h4 variant={'h6'}>Awaiting your approval</h4>
                </Stack>
            </Stack>
        </Div>
    );
}