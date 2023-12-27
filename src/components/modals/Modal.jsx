import { Div, Box } from '../base';

const Modal = ({ showModal, closeModal, deleteItem, children }) => {
  return (
    <Div
      className={`${
        showModal ? 'flex flex-col px-5 py-3 border rounded-xl absolute gap-3' : 'hidden'
      }`}>
      <Div>{children}</Div>
      <Div className="flex justify-between">
        <Box className="cursor-pointer px-3 py-1" type="button" onClick={deleteItem}>
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