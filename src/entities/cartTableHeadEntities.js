import { TableCell } from "@mui/material";

const cartTableHeadLabels = [
    'Product Name', 'Product Quantity', 'Total Price', 'Actions'
];

export const cartTableHeadEntities = cartTableHeadLabels.map(label => <TableCell align='center'>{ label }</TableCell>);
