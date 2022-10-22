import { useContext } from 'react';
import NotificationContext from '../context/notification/NotificationContext';

const useNotification = () => {
  return useContext(NotificationContext);
};

export default useNotification;
