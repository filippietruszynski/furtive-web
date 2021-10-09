import React from "react";
import { useDispatch } from "react-redux";

import { logOut } from "../../store/services/auth.services";

const Chat: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <>
      <h1>Chat</h1>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
};

export default Chat;
