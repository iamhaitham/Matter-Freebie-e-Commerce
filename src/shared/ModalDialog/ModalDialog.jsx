import { Modal } from "@mui/material";

const ModalDialog = ({ 
    children,
    open, 
    handleClose 
}) => {
    return (
        <Modal open={ open } 
               onClose={ handleClose } 
               style={{ display:'flex',alignItems:'center',justifyContent:'center' }}
               disableScrollLock>
            { children }
        </Modal>
    );
}

export default ModalDialog;