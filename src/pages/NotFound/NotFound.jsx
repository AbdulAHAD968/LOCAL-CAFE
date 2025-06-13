import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../images/404 Error-bro.svg';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <img src={NotFoundImg} alt="404 Not Found" style={styles.image} />
      <h1 style={styles.heading}>Oops! Page Not Found</h1>
      <p style={styles.text}>
        The page you’re looking for doesn’t exist or the connection was lost.
      </p>
      <Link to="/" style={styles.button}>Go Home</Link>
    </div>
  );
};

const styles = {
  container: {
    padding: '4rem 2rem',
    textAlign: 'center',
    backgroundColor: '#fffbe6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    maxWidth: '400px',
    width: '100%',
    marginBottom: '2rem',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#d97706',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    color: '#555',
  },
  button: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#d97706',
    color: 'white',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'background 0.3s ease',
  },
};

export default NotFound;
