import { toast, ToastContainer } from 'react-toastify';
import NotificationContext from './NotificationContext';
import 'react-toastify/dist/ReactToastify.css';

const NotificationProvider = ({ children }) => {
  const showInfo = (message) => {
    toast.info(message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const showSuccess = (message) => {
    toast.success(message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const showError = (message) => {
    toast.error(message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const value = {
    showInfo,
    showSuccess,
    showError,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    <ToastContainer />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
