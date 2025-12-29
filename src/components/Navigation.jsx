import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
  };

  const logoStyle = {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '1px',
  };

  const navLinksStyle = {
    display: 'flex',
    gap: '25px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  const linkStyle = (isActive) => ({
    color: isActive ? '#667eea' : '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    padding: '5px 10px',
    borderBottom: isActive ? '2px solid #667eea' : '2px solid transparent',
  });

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}>
        Portfolio
      </Link>
      <ul style={navLinksStyle}>
        <li>
          <Link
            to="/"
            style={linkStyle(location.pathname === '/')}
            onMouseEnter={(e) => {
              if (location.pathname !== '/') {
                e.currentTarget.style.color = '#667eea';
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== '/') {
                e.currentTarget.style.color = '#ffffff';
              }
            }}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/game"
            style={linkStyle(location.pathname === '/game')}
            onMouseEnter={(e) => {
              if (location.pathname !== '/game') {
                e.currentTarget.style.color = '#667eea';
              }
            }}
            onMouseLeave={(e) => {
              if (location.pathname !== '/game') {
                e.currentTarget.style.color = '#ffffff';
              }
            }}
          >
            Game
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
