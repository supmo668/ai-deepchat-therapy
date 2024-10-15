'use client';

import { useState } from 'react';
import styles from '../styles/Home.module.css';
import Navbar from '../components/NavBar';
import ChatInterface from '../components/ChatInterface';

const Home = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (formSubmitted) {
    return (
      <>
        <Navbar />
        <main className={styles.main}>
          <section className={styles.intro}>
            <h1>Welcome, {userDetails.firstName}!</h1>
            <p>
              We're glad to have you here. Start your AI therapy session below.
            </p>
          </section>
          <ChatInterface />
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <h1>Welcome to AI Therapy Chat</h1>
          <input
            type="text"
            placeholder="First Name"
            required
            value={userDetails.firstName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            required
            value={userDetails.lastName}
            onChange={(e) =>
              setUserDetails({ ...userDetails, lastName: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          <button type="submit">Start Chatting</button>
        </form>
      </main>
    </>
  );
};

export default Home;
