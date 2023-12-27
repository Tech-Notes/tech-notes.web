import { Div, Box } from '../base';
import { useDialog } from '../../provider/DialogProvider';

const Modal = ({ onConfirm, children }) => {
  const { showModal, closeModal } = useDialog();

  return (
    <Div
      className={`${
        showModal ? 'flex flex-col px-5 py-3 border rounded-xl absolute gap-3' : 'hidden'
      }`}>
      <Div>{children}</Div>
      <Div className="flex justify-between">
        <Box className="cursor-pointer px-3 py-1" type="button" onClick={onConfirm}>
          Ok
        </Box>
        <Box className="cursor-pointer px-3 py-1" type="button" onClick={closeModal}>
          Cancel
        </Box>
      </Div>
    </Div>
  );
};

export default Modal;
