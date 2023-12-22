import { useContext, createContext, useState, useCallback } from 'react';
import Dialog from '@material-ui/core';

const dialogContext = createContext();

const useDialogContext = () => useContext(dialogContext);

export const useDialog = () => {
  return useDialogContext();
};

const DialogProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleClickToOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleToClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <dialogContext.Provider value={{ open, handleToClose, handleClickToOpen }}>
      <Dialog open={open} onClose={handleToClose}>
        {children}
      </Dialog>
    </dialogContext.Provider>
  );
};

export default DialogProvider;
