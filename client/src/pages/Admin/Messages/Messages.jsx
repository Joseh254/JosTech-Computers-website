import React, { useEffect, useState } from 'react';
import './Messages.css';
import AdminHeader from '../../../../Components/AdminHeader/AdminHeader';
import { api_url } from '../../../../utills/config';
import axios from 'axios';

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
        console.error('Error fetching messages:', error);
        setError('There was an error getting messages');
      } finally {
        setLoading(false);
      }
    }

    fetchMessages();
  }, []);

  if (loading) {
    return <p>Loading messages......</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section>
      <AdminHeader />
      <div className='messages'>
        {messages.map((message) => (
          <div className="messagesContainers" key={message.id}>
            <p> Name : {message.first_name}</p>
            <p>Subject : {message.subject}</p>
            {/* <p>Phone : {message.phone_number}</p> */}
            <p>Message : {message.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Messages;
