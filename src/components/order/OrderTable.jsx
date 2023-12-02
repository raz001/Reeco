//import { useSelector } from 'react-redux';
import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import OrderState from '../orderaction/OrderState';
import products from '../../db.json'
const columns = [
    {
        field: 'orderImage',
        headerName: '',
        width: 65,
        renderCell: (params) => (
            <Stack sx={{ pl: 1 }} alignItems={'center'}>
                <img
                    src={params.id & 1 ? 'Apple.png' : 'Avocado.jpg'}
                    width={45}
                    height={45}
                    alt={'Img'}
                />
            </Stack>
        ),
    },
    { field: 'productName', headerName: 'Product Name', width: 200 },
    {
        field: 'brand',
        headerName: 'Brand',
        width: 160,
    },
    {
        field: 'price',
        headerName: 'Price',
        width: 100,
        editable: true,
        renderCell: (params) => <p>$ {params.value}.00</p>,
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        width: 100,
        editable: true,
        renderCell: (params) => (
            <p>
                <span>
                    <b>{params.value}</b>
                </span>{' '}
                LB
            </p>
        ),
    },
    {
        field: 'total',
        headerName: 'Total',
        width: 100,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 270,
        renderCell: (params) => <OrderState item={params} />,
    },
];

function getRandomNum(start, end) {
    return Math.floor(Math.random() * end) + start;
}

const OrderTable = () => {
    console.log(products)
    const rows = [];
    for (let i = 1; i <= products.item.length; i++) {
        const item = products.item[i - 1];
        const quantity = getRandomNum(1, 20);
        const total = `$${quantity * item.price}.00`;
        rows.push({
            id: i,
            ...item,
            quantity,
            total,
        });
    }
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                disableRowSelectionOnClick
                sx={{ borderRadius: '15px' }}
            />
        </Box>
    );
}
export default OrderTable


