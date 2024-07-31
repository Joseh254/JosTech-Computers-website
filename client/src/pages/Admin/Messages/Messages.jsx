import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Messages.css";
import AdminHeader from "../../../../Components/AdminHeader/AdminHeader";
import { api_url } from "../../../../utills/config";
import axios from "axios";

function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await axios.get(`${api_url}/api/users/readMessages`);
        setMessages(response.data.data); // Update state with fetched messages
      } catch (error) {
        setError("There was an error getting messages");
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, []);

  const handleDeleteMessage = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(`${api_url}/api/users/deleteMessage/${id}`);
      console.log(response);
      setMessages(messages.filter(message => message.id !== id));
    } catch (error) {
      setError("There was an error deleting the message");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading messages......</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <AdminHeader />
      <h1 className="messagesheading">Welcome to customer Messages</h1>
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
              <button>Reply</button>
              <button>Mark as read</button>
              <button onClick={() => handleDeleteMessage(message.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Messages;
