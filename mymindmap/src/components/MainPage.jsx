// src/components/MainPage.js
import React from 'react';

const MainPage = ({ user }) => {
  return (
    <div>
      <h2>Welcome, {user.displayName || user.email}!</h2>
      {/* Here your mind map visualization will go */}
      <p>This is your mind map workspace.</p>
    </div>
  );
};

export default MainPage;