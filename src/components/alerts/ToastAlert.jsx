import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (alertMessage, result) => {
  if (result === 'success') {
    toast.success(alertMessage);
  } else if (result === 'error') {
    toast.error(alertMessage);
  } else {
    toast(alertMessage);
  }
};

const ToastAlert = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={localStorage.getItem('theme')}
    />
  );
};

export default ToastAlert;
