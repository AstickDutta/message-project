'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './BirthdayMessage.css'; // Import the CSS file

const BirthdayMessage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const router = useRouter();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim()) {
      router.push(`/birthday?name=${encodeURIComponent(name)}`);
    }
  };

  return (
    <div className="birthday-message-container">
      <h1 className="birthday-message-title">🎂 Birthday Greeter 🎉</h1>
      <form onSubmit={handleSubmit} className="birthday-message-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
          className="birthday-message-input"
        />
        <button type="submit" className="birthday-message-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BirthdayMessage;