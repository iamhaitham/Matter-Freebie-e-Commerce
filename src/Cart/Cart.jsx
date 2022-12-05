import { 
    Modal, 
    Paper, 
    Table, 
    TableBody, 
    TableContainer, 
    TableHead, 
    TableRow 
} from "@mui/material";

function Cart({ 
    open, 
    handleClose, 
    tableHead,
    tableBody
}) {
    return (
        <Modal open={open} onClose={handleClose} style={{ display:'flex',alignItems:'center',justifyContent:'center' }}>
            <TableContainer component={Paper} style={{ width: '50rem' }}>
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
        </Modal>
    );
}

export default Cart;