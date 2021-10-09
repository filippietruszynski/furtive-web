import React from "react";

import { logOut } from "../../store/services/auth.services";

const Chat: React.FC = () => {
  const handleLogOut = () => {
    logOut();
  };
  return (
    <>
      <h1>Chat</h1>
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
};

export default Chat;
