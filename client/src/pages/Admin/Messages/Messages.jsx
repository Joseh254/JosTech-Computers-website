import React, { useEffect, useState } from "react";
import "./Messages.css";
import { api_url } from "../../../../utills/config";
import axios from "axios";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deletingMessageId, setDeletingMessageId] = useState(null);

  useEffect(() => {
    async function fetchMessages() {
      setLoading(true);
      try {
        const response = await axios.get(`${api_url}/api/users/readMessages`);
        setMessages(response.data.data);
      } catch (error) {
        setError("There was an error getting messages");
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, []);

  const handleDeleteMessage = async (id) => {
    setDeletingMessageId(id);
    try {
      await axios.delete(`${api_url}/api/users/deleteMessage/${id}`);
      setMessages(messages.filter((message) => message.id !== id));
    } catch (error) {
      setError("There was an error deleting the message");
    } finally {
      setDeletingMessageId(null);
    }
  };

  if (loading) {
    return <p>Loading messages...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <h1 className="messagesheading">Welcome to Customer Messages</h1>
      <div className="messages">
        {messages.map((message) => (
          <div className="messagesContainers" key={message.id}>
            <div className="userdetails">
              <p>Name: {message.first_name}</p>
              <p>Phone: {message.phone_number}</p>
              <p>Email: {message.email}</p>
            </div>
            <p>Subject: {message.subject}</p>
            <p>Message: {message.message}</p>

            <div className="messageactionbtns">
              <button className="replycustomermessages">
                <a
                  href={`mailto:${message.email}?subject=Regarding%20Your%20Message&body=Hello%20${encodeURIComponent(message.first_name)},%0A%0AI%20received%20your%20message%20and%20will%20get%20back%20to%20you%20shortly.%0A%0AThank%20you,%0AJostech-Computers`}
                  className="reply-link"
                >
                  Reply
                </a>
              </button>

              <button>Mark as read</button>
              <button
                onClick={() => handleDeleteMessage(message.id)}
                className="deletecustomermessages"
              >
                {deletingMessageId === message.id ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Messages;
