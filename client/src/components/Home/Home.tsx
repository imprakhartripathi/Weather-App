import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

const Home: React.FC = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Weather App</h1>
        <p>Designed and Developed by <strong>Prakhar Tripathi</strong></p>
        <button className="go-dashboard-btn" onClick={goToDashboard}>
          Go to Weather Dashboard
        </button>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I'm Prakhar Tripathi, a 3rd-year B.Tech Computer Science student with a passion
          for full-stack development, cloud computing, and building intelligent apps.
          I love turning ideas into scalable and smart software solutions.
        </p>
      </section>

      <section className="tech-stack">
        <h2>Tech Stack</h2>
        <ul>
          <li>Frontend: React 18, TypeScript, React Router</li>
          <li>Backend: Express.js, Node.js</li>
          <li>Authentication: JWT</li>
          <li>Styling: CSS Modules / Plain CSS</li>
          <li>APIs: OpenWeather API</li>
        </ul>
      </section>

      <section className="how-it-works">
        <h2>How the App Works</h2>
        <p>
          This app allows users to check the current weather data for their city and manage their profile.
          Once signed up and logged in, users are directed to the dashboard where they can:
        </p>
        <ul>
          <li>Search for any city's weather</li>
          <li>View detailed weather data</li>
          <li>Update their profile info</li>
          <li>Enjoy a clean and responsive UI</li>
        </ul>
        <p>
          The app uses route protection to make sure only logged-in users can access the dashboard and profile pages.
        </p>
      </section>
    </div>
  );
};

export default Home;
