import { Stack, styled, useTheme } from '@mui/material';
import React from 'react';
import Cart from './Cart';
import ProfileMenu from './ProfileMenu';
import Div from '../utils/Div';

const Link = styled('a')({
    textDecoration: 'none',
    color: 'white',
    cursor: 'pointer',
});

export default function Navbar() {
    const theme = useTheme();
    return (
        <Div
            style={{
                backgroundColor: theme.palette.primary.main,
                color: 'white',
            }}
        >
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Stack direction={'row'} spacing={5} alignItems={'center'}>
                    <h2>Reeco</h2>
                    <Link>Store</Link>
                    <Link>Orders</Link>
                    <Link>Analytics</Link>
                </Stack>
                <Stack direction={'row'} spacing={5} alignItems={'center'}>
                    <Cart cartItemCount={4} />
                    <ProfileMenu />
                </Stack>
            </Stack>
        </Div>
    );
}