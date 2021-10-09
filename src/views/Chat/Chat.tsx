import React from "react";
import { useDispatch } from "react-redux";

import { logOutUser } from "../../store/services/auth.services";

const Chat: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };
  return (
    <>
      <h1>Chat</h1>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
};

export default Chat;
