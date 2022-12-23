import { IconButton, TableCell, TableRow } from "@mui/material";
import { featuredEntities } from '.';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const findItem = (itemId, field) => featuredEntities.filter(entity =>  entity.id === itemId).map(item => item[field]);

const sortUpdatedCartItems = (updatedCartItems) => updatedCartItems.sort((ciBefore, ciAfter)  => ciBefore.itemId - ciAfter.itemId);

export const getCartTableBodyEntities = (cartItems, setCartItems) => {
    const getActions = (item) => {
        const removeCartItem  = () => {
            const updatedCartItems =  cartItems.filter(ci => ci.itemId  !== item.itemId)
            setCartItems(sortUpdatedCartItems(updatedCartItems));
        }

        const decreaseCartItemQuantity = () => {
            const cartItemIndex = cartItems.findIndex(ci => ci.itemId ===  item.itemId);
            const updatedItem = { ...cartItems[cartItemIndex], quantity: cartItems[cartItemIndex].quantity - 1 };
            if (updatedItem.quantity < 1) {
                removeCartItem();
                return;
            }
            const filterededCartItems = cartItems.filter(ci => ci.itemId !== item.itemId);
            const updatedCartItems = [...filterededCartItems, updatedItem].sort((ciBefore, ciAfter)  => ciBefore.itemId - ciAfter.itemId);
            setCartItems(sortUpdatedCartItems(updatedCartItems));
        }

        const increaseCartItemQuantity = () => {
            const cartItemIndex = cartItems.findIndex(ci => ci.itemId ===  item.itemId);
            const updatedItem = { ...cartItems[cartItemIndex], quantity: cartItems[cartItemIndex].quantity + 1 };
            const filterededCartItems = cartItems.filter(ci => ci.itemId !== item.itemId);
            const updatedCartItems = [...filterededCartItems, updatedItem].sort((ciBefore, ciAfter)  => ciBefore.itemId - ciAfter.itemId);
            setCartItems(sortUpdatedCartItems(updatedCartItems));
        }

        return (
            <>
                <IconButton onClick={ increaseCartItemQuantity }>
                    <AddIcon/>
                </IconButton>

                <IconButton onClick={ decreaseCartItemQuantity }>
                    <RemoveIcon/>
                </IconButton>

                <IconButton onClick={ removeCartItem }>
                    <DeleteIcon/>
                </IconButton>
            </>
        )
    };

    return sortUpdatedCartItems(cartItems).map(item => {
        const { itemId, quantity } = item;
        
        const findItemByField = (field) => findItem(itemId, field);
        
        return (
            <TableRow key={ item.itemId }>
                <TableCell align='center'>{ findItemByField('description') }</TableCell>
                <TableCell align='center'>{ quantity }</TableCell>
                <TableCell align='center'>${ findItemByField('price') * quantity }</TableCell>
                <TableCell align='center'>{ getActions(item) }</TableCell>
            </TableRow>
        );
    })
}
