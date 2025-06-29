// src/components/AuthPage.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState('');

  const handleAuth = () => {
    if (isRegister) {
      // Register new user
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => setMessage('Registration successful! Please log in.'))
        .catch((err) => setMessage(err.message));
    } else {
      // Login existing user
      signInWithEmailAndPassword(auth, email, password)
        .then(() => setMessage('Logged in!'))
        .catch((err) => setMessage(err.message));
    }
  };

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => setMessage('Reset email sent!'))
      .catch((err) => setMessage(err.message));
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // User signed in
        console.log('Google sign-in success:', result.user);
      })
      .catch((error) => {
        console.error('Google sign-in error:', error);
        setMessage(error.message);
      });
  };

  return (
    <div>
      <h2>{isRegister ? 'Register' : 'Login'}</h2>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        value={email}
      />
      <br />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        value={password}
      />
      <br />
      <button onClick={handleAuth}>{isRegister ? 'Register' : 'Login'}</button>
      { !isRegister && (
        <button onClick={handleResetPassword}>Forgot Password?</button>
      )}
      <br />
      <button onClick={() => setIsRegister(!isRegister)}>
        { isRegister ? 'Already have an account? Login' : "Don't have an account? Register" }
      </button>
      <br /><br />
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
      <p>{message}</p>
    </div>
  );
};

export default AuthPage;