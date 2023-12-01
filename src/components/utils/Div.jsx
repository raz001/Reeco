import { styled } from '@mui/material';
import React from 'react';

const Container = styled('div')({
    padding: '0.6rem 5rem',
});

export default function Div({ style, children }) {
    return <Container style={{ ...style }}>{children}</Container>;
}