import React from 'react'
import Div from '../utils/Div';
import { IconButton, Stack } from '@mui/material';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import Searchbar from './Searchbar';
import Button from '../utils/Button'
import OrderTable from './OrderTable';
const OrderContainer = () => {
  return (
    <Div>
            <Stack
                sx={{ pt: 3, pb: 3, pl: 5, pr: 5 }}
                style={{
                    border: '2.3px solid whitesmoke',
                    borderRadius: '15px',
                }}
            >
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Searchbar />
                    <Stack direction={'row'} spacing={2.5}>
                        <Button outlined = 'true'>Add Item</Button>
                        <IconButton>
                            <PrintOutlinedIcon color={'primary'} />
                        </IconButton>
                    </Stack>
                </Stack>
                <br />
                <OrderTable />
            </Stack>
        </Div>
  )
}

export default OrderContainer