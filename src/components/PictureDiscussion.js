import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import '../App.css';

const socket = io('http://localhost:4000');

const PictureDiscussion = () => {
  const { id } = useParams();
  const [pictureData, setPictureData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const fetchPictureData = async () => {
      const response = await fetch(`http://localhost:4000/pictures/${id}`);
      if (!response.ok) {
        console.error('Failed to fetch picture data');
        return;
      }
      const data = await response.json();
      setPictureData(data);
    };

    fetchPictureData();

    socket.on('previous messages', (previousMessages) => {
      setMessages(previousMessages);
    });

    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('chat message');
      socket.off('previous messages');
    };
  }, [id]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      socket.emit('chat message', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="picture-discussion-container">
      {pictureData && (
        <div className="picture-details">
          <h2>{pictureData.artist}</h2>
          <img src={`http://localhost:4000/${pictureData.imageUrl}`} alt={pictureData.name} className="selected-image" />
        </div>
      )}
      <div className="chat-interface">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">{msg}</div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="message-form">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Write your message..."
            className="message-input"
          />
          <button type="submit" className="message-button">Enter</button>
        </form>
      </div>
    </div>
  );
};

export default PictureDiscussion;
