import { IconButton, TableCell, TableRow } from "@mui/material";
import { featuredEntities } from '.';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const findItem = (itemId, field) => featuredEntities.filter(entity =>  entity.id === itemId).map(item => item[field]);

export const getCartTableBodyEntities = (cartItems, setCartItems) => {
    const getActions = (item) => {
        const removeCartItem  = () => {
            const updatedCartItems =  cartItems.filter(ci => ci.itemId  !== item.itemId);
            setCartItems(updatedCartItems);
        }

        const decreaseCartItemQuantity = () =>{
            const cartItemIndex = cartItems.findIndex(ci => ci.itemId ===  item.itemId);
            const updatedItem = { ...cartItems[cartItemIndex], quantity: cartItems[cartItemIndex].quantity - 1 };
            if (updatedItem.quantity < 1) {
                removeCartItem();
                return;
            }
            const filterededCartItems = cartItems.filter(ci => ci.itemId !== item.itemId);
            const updatedCartItems = [...filterededCartItems, updatedItem];
            setCartItems(updatedCartItems);
        }

        const increaseCartItemQuantity = () =>{
            const cartItemIndex = cartItems.findIndex(ci => ci.itemId ===  item.itemId);
            const updatedItem = { ...cartItems[cartItemIndex], quantity: cartItems[cartItemIndex].quantity + 1 };
            const filterededCartItems = cartItems.filter(ci => ci.itemId !== item.itemId);
            const updatedCartItems = [...filterededCartItems, updatedItem];
            setCartItems(updatedCartItems);
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

    return cartItems.map(item => {
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