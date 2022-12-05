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
    tableContainerStyles, 
    tableHead,
    tableBody
}) {
    return (
        <Modal open={open} onClose={handleClose}>
            <TableContainer component={Paper} className={ tableContainerStyles }>
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