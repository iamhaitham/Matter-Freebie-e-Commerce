import { TableCell, TableRow } from "@mui/material";
import { featuredEntities } from '.';

const findItem = (itemId, field) => featuredEntities.filter(entity =>  entity.id === itemId).map(item => item[field]);

export const getCartTableBodyEntities = (cartItems) => {
    return cartItems.map(item => {
        const { itemId, quantity } = item;
        
        const findItemByField = (field) => findItem(itemId, field);
        
        return (
            <TableRow>
                <TableCell align='center'>{ findItemByField('description') }</TableCell>
                <TableCell align='center'>{ quantity }</TableCell>
                <TableCell align='center'>${ findItemByField('price') * quantity }</TableCell>
                <TableCell align='center'>xxxxxxxx</TableCell>
            </TableRow>
        );
    })
}