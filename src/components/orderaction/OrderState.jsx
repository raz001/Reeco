import { Chip } from '@mui/material';
import React from 'react';
import { Stack } from '@mui/material';
import ApprovedOrder from './ApprovedOrder';
import CancelOrder from './CancelOrder';
import EditOrder from './EditOrder';

export default function OrderState({ item }) {
    let [orderState, setOrderState] = React.useState(item.row.status);
    let chipColor = 'warning';

    if (orderState === 'pending') {
        chipColor = 'warning';
    } else if (orderState === 'Approved') {
        chipColor = 'primary';
    } else if (orderState === 'Missing' || orderState === 'Missing - Urgent') {
        chipColor = 'error';
    }

    return (
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
            <Stack sx={{ minWidth: '115px' }} alignItems={'start'}>
                <Chip label={orderState} size={'small'} color={chipColor} />
            </Stack>
            <ApprovedOrder item={item} setOrderState={setOrderState} />
            <CancelOrder item={item} setOrderState={setOrderState} />
            <EditOrder item={item} />
        </Stack>
    );
}