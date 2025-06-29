// src/App.js
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import "./style.css"
import AuthPage from './components/AuthPage';
import MainPage from './components/MainPage';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  if (!user) {
    return <AuthPage />;
  }

  return (
    <div>
      <h1>MyMindMap</h1>
      <button onClick={handleLogout}>Logout</button>
      <MainPage user={user} />
    </div>
  );
}

export default App;