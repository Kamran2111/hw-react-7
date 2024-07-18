import React from "react";
import { useNotificationContext } from "../context/NotificationContext";

interface NotificationItemProps {
  notification: {
    id: number;
    message: string;
    type: string;
  };
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
}) => {
  const { handleRemoveNotification } = useNotificationContext();

  const handleClick = () => {
    handleRemoveNotification(notification.id);
  };

  return (
    <div>
      <p>
        {notification.message} - {notification.type}
      </p>
      <button onClick={handleClick}>Close</button>
    </div>
  );
};

export default NotificationItem;
