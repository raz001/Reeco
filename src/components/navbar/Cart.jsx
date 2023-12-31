import { Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Cart({ cartItemCount }) {
    return (
        <IconButton>
            <Badge badgeContent={cartItemCount} color={'success'}>
                <ShoppingCartIcon style={{ color: 'white' }} />
            </Badge>
        </IconButton>
    );
}