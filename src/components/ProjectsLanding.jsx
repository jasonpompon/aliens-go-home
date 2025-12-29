import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectsLanding = () => {
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate random stars for background
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 50; i++) {
        starArray.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 3 + 1,
          animationDuration: Math.random() * 3 + 2,
          animationDelay: Math.random() * 2,
        });
      }
      setStars(starArray);
    };
    generateStars();

    // Track mouse movement for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 20px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  };

  const starStyle = (star) => ({
    position: 'absolute',
    left: `${star.left}%`,
    top: `${star.top}%`,
    width: `${star.size}px`,
    height: `${star.size}px`,
    background: '#fff',
    borderRadius: '50%',
    boxShadow: `0 0 ${star.size * 2}px ${star.size}px rgba(255, 255, 255, 0.3)`,
    animation: `twinkle ${star.animationDuration}s infinite ${star.animationDelay}s`,
  });

  const headerStyle = {
    color: '#ffffff',
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    textShadow: '0 0 20px rgba(102, 126, 234, 0.8), 0 0 40px rgba(102, 126, 234, 0.4)',
    animation: 'fadeInDown 1s ease-out',
    letterSpacing: '2px',
    transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
    transition: 'transform 0.2s ease-out',
    zIndex: 10,
    position: 'relative',
  };

  const subtitleStyle = {
    color: '#e0e0e0',
    fontSize: '1.5rem',
    marginBottom: '60px',
    textAlign: 'center',
    maxWidth: '700px',
    animation: 'fadeInUp 1s ease-out 0.3s backwards',
    lineHeight: '1.8',
    zIndex: 10,
    position: 'relative',
  };

  const projectsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '40px',
    maxWidth: '1200px',
    width: '100%',
    marginBottom: '40px',
    animation: 'fadeInUp 1s ease-out 0.6s backwards',
    zIndex: 10,
    position: 'relative',
  };

  const projectCardStyle = {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 0 60px rgba(102, 126, 234, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  };

  const projectTitleStyle = {
    color: '#ffffff',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    marginTop: '0',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
  };

  const projectDescriptionStyle = {
    color: '#e0e0e0',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '25px',
  };

  const linkButtonStyle = {
    display: 'inline-block',
    padding: '14px 32px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
    border: '2px solid rgba(255, 255, 255, 0.1)',
    position: 'relative',
    overflow: 'hidden',
  };

  const projects = [
    {
      id: 1,
      title: 'Aliens Go Home',
      description: 'An interactive game built with React and Redux. Defend Earth from alien invaders in this exciting browser-based experience.',
      link: '/game',
    },
  ];

  return (
    <div style={containerStyle}>
      {/* Animated stars background */}
      {stars.map((star) => (
        <div key={star.id} style={starStyle(star)} />
      ))}

      {/* Glowing orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(102,126,234,0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '15%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(118,75,162,0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite',
      }} />

      <h1 style={headerStyle}>My Projects</h1>
      <p style={subtitleStyle}>
        Explore my collection of interactive web applications and creative experiments
      </p>

      <div style={projectsGridStyle}>
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={{
              ...projectCardStyle,
              animationDelay: `${0.8 + index * 0.2}s`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 60px 0 rgba(102, 126, 234, 0.6), inset 0 0 100px rgba(102, 126, 234, 0.2)';
              e.currentTarget.style.border = '1px solid rgba(102, 126, 234, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 0 60px rgba(102, 126, 234, 0.1)';
              e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.18)';
            }}
          >
            {/* Shine effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              transition: 'left 0.5s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.left = '100%';
            }}
            />

            <h2 style={projectTitleStyle}>{project.title}</h2>
            <p style={projectDescriptionStyle}>{project.description}</p>
            <Link
              to={project.link}
              style={linkButtonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(102, 126, 234, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
              }}
            >
              Launch Project →
            </Link>
          </div>
        ))}
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -20px);
          }
          50% {
            transform: translate(-15px, 15px);
          }
          75% {
            transform: translate(15px, 10px);
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsLanding;
