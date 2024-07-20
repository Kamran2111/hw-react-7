import { useNotificationContext } from "../context/NotificationContext";
import NotificationItem from "./NotificationItem";

const NotificationList: React.FC = () => {
  const { notifications } = useNotificationContext();

  return (
    <div>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;
