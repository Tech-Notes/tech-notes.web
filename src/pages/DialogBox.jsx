import { Div } from '../components/base';
import { useDialog } from '../provider/DialogProvider';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

const DialogBox = ({ dialogContext }) => {
  const { open, handleToClose } = useDialog();

  console.log('open dialog', open);

  return (
    <Div>
      <DialogTitle>Confirmation Box</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogContext}</DialogContentText>
        <DialogActions>
          <Button color="primary" onClick={handleToClose} autoFocus={true}>
            Delete
          </Button>
          <Button color="primary" onClick={handleToClose} autoFocus={false}>
            Cancel
          </Button>
        </DialogActions>
      </DialogContent>
    </Div>
  );
};

export default DialogBox;
