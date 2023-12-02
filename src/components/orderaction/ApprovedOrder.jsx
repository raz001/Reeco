import React from 'react';
import { IconButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

export default function ApprovedOrder({ item, setOrderState }) {
    const [defaultColor, changeColor] = React.useState(
        item.row.status === 'Approved' ? true : false
    );

    const handleApproveClick = () => {
        setOrderState('Approved');
        changeColor(true);
    };

    return (
        <div>
            <IconButton
                size={'small'}
                onClick={handleApproveClick}
                color={defaultColor ? 'success' : 'default'}
            >
                <DoneIcon fontSize={'12'} />
            </IconButton>
        </div>
    );
}