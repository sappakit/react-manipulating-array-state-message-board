import { useState } from "react";
function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleClick = (msg) => {
    const updatedMessages = messages;
    updatedMessages.push(msg);
    setMessages(updatedMessages);
    setInputMessage(""); //clear input message
  };

  const deleteMessage = (index) => {
    const updatedMessages = messages.filter((_, i) => i !== index);//_สำหรับไม่ได้ใช้งาน
    setMessages(updatedMessages);
  };

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
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => handleClick(inputMessage)}
        >
          Submit
        </button>
      </div>
      <div class="board">
        {messages.map((msg, index) => ( 
          <div id={index} className="message">
            <h1>{msg}</h1>
            <button
              className="delete-button"
              onClick={() => deleteMessage(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
