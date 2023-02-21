import React from "react";

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      {unreadMessages.length > 0 && <p>You have {unreadMessages.length} unread message{unreadMessages.length > 1 ? 's.' : '.'}</p>}
    </div>
  )

}
export default Mailbox;