import React, { useEffect, useState } from "react";
//import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket }) {
  const [currentmsg, setcurrentmsg] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentmsg !== "") {
      const messageData = {
        message: currentmsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setcurrentmsg("");
    }
  };

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageList((list) => [...list, data]);
  //   });
  // }, [socket]);

  return (
    <div className="head">
    <div className="container">
      <div className="header">
        <h1>Ananth</h1>
        <p>chats</p>
      </div>
      <div className="body">
        <div className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                //id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    {/* <p id="author">{messageContent.author}</p> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="footer">
        <input
          type="text"
          value={currentmsg}
          placeholder="Enter Your Message"
          onChange={(event) => {
            setcurrentmsg(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
    <div className="container1">
    <div className="header">
      <h1>Karthick</h1>
      <p>chats</p>
    </div>
    <div className="body">
      <div className="message-container">
        {messageList.map((messageContent) => {
          return (
            <div
              className="message"
              // id={username === messageContent.author ? "you" : "other"}
            >
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  {/* <p id="author">{messageContent.author}</p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="footer">
      <input
        type="text"
        value={currentmsg}
        placeholder="Enter Your Message"
        onChange={(event) => {
          setcurrentmsg(event.target.value);
        }}
        onKeyPress={(event) => {
          event.key === "Enter" && sendMessage();
        }}
      />
      <button onClick={sendMessage}>&#9658;</button>
    </div>
  </div>
  </div>
  );
}

export default Chat;
