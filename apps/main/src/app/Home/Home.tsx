import React, { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>ZAN JE CARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR</h1>
      </header>

      <main style={styles.main}>
        <p style={styles.text}>Števec klikov: {count}</p>
        <button
          style={styles.button}
          onClick={handleClick}
        >
          Klikni me
        </button>
      </main>

      <footer style={styles.footer}>
        <p></p>
      </footer>
    </div>
  );
};

// Stili za komponento
const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    textAlign: 'center' as const,
  },
  main: {
    flex: 1,
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  text: {
    fontSize: '1.2rem',
    color: '#444',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center' as const,
    marginTop: 'auto',
  }
};

export default Home;
