import React, { createContext, ReactNode, useContext, useState } from "react";

type Notification = {
  id: number;
  message: string;
  type: string;
};

type NotificationContextType = {
  notifications: Notification[];
  handleAddNotification: (message: string, type: string) => void;
  handleRemoveNotification: (id: number) => void;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const handleAddNotification = (message: string, type: string) => {
    const newNotification = {
      id: Date.now(),
      message,
      type,
    };
    setNotifications([...notifications, newNotification]);
  };

  const handleRemoveNotification = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, handleAddNotification, handleRemoveNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotificationContext must be used within a NotificationProvider"
    );
  }
  return context;
};

export default NotificationProvider;
