// src/components/BirthdayCard.tsx
"use client"; // Mark this component as a Client Component

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import './BirthdayCard.css';

interface BirthdayCardProps {
  name: string;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ name }) => {
  const router = useRouter(); // Initialize the router

  const handleClose = () => {
    router.push('/'); // Navigate to the home page
  };

  return (
    <div className="birthday-card-overlay">
      <div className="birthday-card">
        <h1 className="birthday-card-title">🎉 Happy Birthday! 🎂</h1>
        <p className="birthday-card-message">
          Dear <span className="birthday-card-name">{name}</span>, may your day be filled with joy and laughter!
        </p>
        <button
          onClick={handleClose} // Use handleClose instead of window.location.reload()
          className="birthday-card-button"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BirthdayCard;