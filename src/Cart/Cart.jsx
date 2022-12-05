import { 
    Paper, 
    Table, 
    TableBody, 
    TableContainer, 
    TableHead, 
    TableRow 
} from "@mui/material";

function Cart({ 
    tableHead,
    tableBody
}) {
    return (
        <TableContainer component={ Paper } style={{ width: '50rem' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        { tableHead }
                    </TableRow>
                </TableHead>
                <TableBody>
                    { tableBody }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Cart;