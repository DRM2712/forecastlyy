import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WeatherComparisonPage from './pages/WeatherComparisonPage';
import WeatherAlertsPage from './pages/WeatherAlertsPage';
import AirQualityIndexPage from './pages/AirQualityIndexPage';
import WeatherMapsPage from './pages/WeatherMapsPage';
import WeatherForecastPage from './pages/WeatherForecastPage';
import EducationCenterPage from './pages/EducationCenterPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import SafetyGuidePage from './pages/SafetyGuidePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tools/weather-comparison" element={<WeatherComparisonPage />} />
        <Route path="/tools/weather-alerts" element={<WeatherAlertsPage />} />
        <Route path="/tools/air-quality-index" element={<AirQualityIndexPage />} />
        <Route path="/tools/weather-maps" element={<WeatherMapsPage />} />
        <Route path="/tools/weather-forecast" element={<WeatherForecastPage />} />
        <Route path="/education-center" element={<EducationCenterPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/safety-guide" element={<SafetyGuidePage />} />
      </Routes>
    </Router>
  );
}

export default App;
