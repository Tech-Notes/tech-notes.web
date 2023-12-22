import { useContext, createContext, useState } from 'react';

const dialogContext = createContext();

const useDialogContext = () => useContext(dialogContext);

export const useDialog = () => {
  return useDialogContext();
};

const DialogProvider = ({ children }) => {
  const [open, setOpen] = useState(true);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <dialogContext.Provider value={{ open, handleToClose, handleClickToOpen }}>
      {children}
    </dialogContext.Provider>
  );
};

export default DialogProvider;
