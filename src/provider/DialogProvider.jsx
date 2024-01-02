import { useState, useContext, createContext, useCallback } from 'react';

const dialogContext = createContext();

const useDialogContext = () => useContext(dialogContext);

export const useDialog = () => {
  return useDialogContext();
};

const DialogProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  const contextValue = { showModal, closeModal, openModal };

  return <dialogContext.Provider value={contextValue}>{children}</dialogContext.Provider>;
};

export default DialogProvider;
