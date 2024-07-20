import "./App.css";
import AddNotificationForm from "./components/AddNotificationForm";
import EditUserProfileForm from "./components/EditUserProfileForm";
import NotificationList from "./components/NotificationList";
import UserProfileDisplay from "./components/UserProfileDisplay";
import { NotificationProvider } from "./context/NotificationContext";
import { UserProfileProvider } from "./context/UserProfileContext";

function App() {
  return (
    <NotificationProvider>
      <UserProfileProvider>
        <EditUserProfileForm />
        <UserProfileDisplay />

        <AddNotificationForm />
        <NotificationList />
      </UserProfileProvider>
    </NotificationProvider>
  );
}

export default App;
