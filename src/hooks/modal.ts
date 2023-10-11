import { useState } from "react";

export const useModal = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {};

  return { modalVisibility, setModalVisibility, name, setName, email, setEmail, message, setMessage, sendMessage };
};
