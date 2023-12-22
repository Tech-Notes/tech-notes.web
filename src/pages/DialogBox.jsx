import { Div } from '../components/base';
import { useDialog } from '../provider/DialogProvider';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

const DialogBox = () => {
  const { open, handleToClose } = useDialog();

  console.log('open dialog', open);

  return (
    <Div>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>Confirmation Box</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure to delete this?</DialogContentText>
          <DialogActions>
            <Button color="primary" onClick={handleToClose} autoFocus={true}>
              Delete
            </Button>
            <Button color="primary" onClick={handleToClose} autoFocus={false}>
              Cancel
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Div>
  );
};

export default DialogBox;
