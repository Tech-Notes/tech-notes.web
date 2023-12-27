import { useState, useContext, createContext, useMemo, useCallback } from 'react';

const dialogContext = createContext();

const useDialogContext = () => useContext(dialogContext);

export const useDialog = () => {
  return useDialogContext();
};

const DialogProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [isDelete, setIsDelete_] = useState(false);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  const deleteItem = useCallback(() => {
    setShowModal(false);
    setIsDelete_(true);
  }, [setShowModal, setIsDelete_]);

  const contextValue = useMemo(
    () => ({ showModal, closeModal, openModal, isDelete, deleteItem }),
    [showModal, openModal, closeModal, isDelete, deleteItem]
  );

  return <dialogContext.Provider value={contextValue}>{children}</dialogContext.Provider>;
};

export default DialogProvider;
