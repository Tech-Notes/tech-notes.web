import { useDialog } from '../../provider/DialogProvider';
import Modal from './Modal';

const DialogModal = ({ children }) => {
  const { showModal, closeModal, deleteItem } = useDialog();
  return (
    <Modal showModal={showModal} closeModal={closeModal} deleteItem={deleteItem}>
      {children}
    </Modal>
  );
};

export default DialogModal;
