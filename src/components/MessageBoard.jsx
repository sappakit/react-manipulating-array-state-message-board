import { useState } from "react";

function MessageBoard() {
  const [messageList, setMessageList] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  function handleMessageList() {
    setMessageList([...messageList, messageInput]);
    setMessageInput("");
  }

  function deleteMessageList(deletedIndex) {
    const newMessage = [...messageList];
    newMessage.splice(deletedIndex, 1);
    setMessageList(newMessage);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageInput}
            onChange={(event) => setMessageInput(event.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={handleMessageList}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageList.map((messageText, index) => (
          <>
            <div className="message" key={index}>
              <h1>{messageText}</h1>
              <button
                className="delete-button"
                onClick={() => deleteMessageList(index)}
              >
                x
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
