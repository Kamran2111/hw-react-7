import "./App.css";
import NotificationList from "./components/NotificationList";
import NotificationItem from "./components/NotificationItem";
import { NotificationProvider } from "./context/NotificationContext";

function App() {
  return (
    <NotificationProvider>
      <NotificationItem />
      <NotificationList />
    </NotificationProvider>
  );
}

export default App;
