import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import NotificationItem from "./NotificationItem";

const NotificationList: React.FC = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;
