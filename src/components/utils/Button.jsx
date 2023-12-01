import { styled } from '@mui/material';
import React from 'react';
import { palette } from './ReecoTheme';

const containedButton = {
    border: 0,
    color: 'white',
    padding: '8px 18px',
    backgroundColor: palette.primary.main,
};

const outlinedButtonStyles = {
    borderColor: palette.primary.main,
    borderWidth: '2px',
    backgroundColor: 'white',
    borderStyle: 'solid',
};

const textStyles = {
    ...outlinedButtonStyles,
    border: 0,
};

const CustomButton = styled('button')(({ theme }) => ({
    color: theme.palette.primary.main,
    borderRadius: '25px',
    fontWeight: 'bold',
    padding: '6px 18px',
    cursor: 'pointer',
}));

export default function Button({
    style,
    contained = false,
    outlined = false,
    children
}) {
    const customStyles = contained
        ? containedButton
        : outlined
            ? outlinedButtonStyles
            : textStyles;

    return (
        <CustomButton
            style={{ ...customStyles, ...style }}
        >
            {children}
        </CustomButton>
    );
}