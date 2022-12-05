import { TableCell, TableRow } from "@mui/material";
import { featuredEntities } from '.';

const findItem = (itemId, field) => featuredEntities.filter(entity =>  entity.id === itemId).map(item => item[field]);

export const getCartTableBodyEntities = (cartItems) => {
    return cartItems.map(item => {
        const { itemId, quantity } = item;
        
        return (
            <TableRow>
                <TableCell align='center'>{ findItem(itemId, 'description') }</TableCell>
                <TableCell align='center'>{ quantity }</TableCell>
                <TableCell align='center'>${ findItem(itemId, 'price') * quantity }</TableCell>
                <TableCell align='center'>xxxxxxxx</TableCell>
            </TableRow>
        );
    })
}