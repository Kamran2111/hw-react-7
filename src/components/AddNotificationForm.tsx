import React, { FormEvent, useState } from "react";
import { useNotificationContext } from "../context/NotificationContext";

const AddNotificationForm: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<string>("");
  const { handleAddNotification } = useNotificationContext();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleAddNotification(message, type);
    setMessage("");
    setType("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <select>
        <option
          value="information
"
        >
          information
        </option>
        <option value="completed">completed</option>
        <option value="warning">warning</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNotificationForm;
