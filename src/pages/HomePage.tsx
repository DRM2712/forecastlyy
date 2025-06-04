import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/button/Button';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center">
        <div className="container mx-auto px-4 py-20 mt-16">
          <div 
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Weather Intelligence You Can Trust
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive weather tools and insights to help you make informed decisions
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                href="https://forecastlyy.netlify.app/" 
                target="_blank"
                size="lg" 
                animated
              >
                Visit Forecastlyy
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
              <Button 
                href="/about" 
                variant="outline" 
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#f0f9ff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Meet the Developer</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            
            <div className="bg-blue-50 rounded-lg p-8 shadow-sm">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-3xl font-bold mb-4">
                  DM
                </div>
                <h3 className="text-2xl font-bold mb-2">Dhairya Mistry</h3>
                <p className="text-gray-600 mb-4">Founder & Developer</p>
                <p className="text-gray-700 mb-6">
                  Forecastlyy is the result of one person's vision and dedication. Dhairya Mistry single-handedly created this comprehensive weather platform over the span of 2 years, continuously refining and improving it based on user feedback. What makes this achievement even more remarkable is that the core platform was developed without the use of AI, relying instead on Dhairya's expertise, passion for meteorology, and commitment to creating a truly useful weather resource.
                </p>
                <p className="text-gray-700 mb-6">
                  Through constant iteration and a deep understanding of users' weather information needs, Dhairya has built Forecastlyy into the powerful, intuitive platform it is today. The journey represents what one dedicated individual can accomplish with determination and a clear vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Weather Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our suite of powerful weather tools designed to provide you with accurate, actionable information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-3 bg-blue-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Weather Comparison</h3>
                <p className="text-gray-600 mb-4">
                  Compare weather conditions across multiple locations side by side. Perfect for travel planning, event scheduling, or simply satisfying your curiosity about different regions.
                </p>
                <Button href="/tools/weather-comparison" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-3 bg-red-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Weather Alerts</h3>
                <p className="text-gray-600 mb-4">
                  Stay informed with customizable alerts for severe weather, sudden changes, or specific conditions. Receive timely notifications to help you prepare and stay safe.
                </p>
                <Button href="/tools/weather-alerts" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-3 bg-green-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Air Quality Index</h3>
                <p className="text-gray-600 mb-4">
                  Monitor air quality levels and understand potential health impacts. Make informed decisions about outdoor activities based on current and forecasted air conditions.
                </p>
                <Button href="/tools/air-quality-index" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-3 bg-purple-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Weather Maps</h3>
                <p className="text-gray-600 mb-4">
                  Visualize weather patterns with interactive maps showing temperature, precipitation, wind, pressure, and more. Zoom in for local details or out for regional perspectives.
                </p>
                <Button href="/tools/weather-maps" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-3 bg-yellow-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Weather Forecast</h3>
                <p className="text-gray-600 mb-4">
                  Access detailed forecasts with hourly and daily predictions. Plan your activities with confidence using our accurate, easy-to-understand weather projections.
                </p>
                <Button href="/tools/weather-forecast" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-3 bg-cyan-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Weather Education</h3>
                <p className="text-gray-600 mb-4">
                  Expand your weather knowledge with our comprehensive educational resources. Learn about weather phenomena, forecasting techniques, and how to interpret weather data.
                </p>
                <Button href="/education-center" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Source Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Powered by Reliable Data</h2>
              <p className="text-xl text-gray-600">
                Forecastlyy combines trusted data sources with custom algorithms for superior accuracy
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <div className="w-32 h-32 bg-white rounded-full shadow-md flex items-center justify-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-8">
                  <h3 className="text-2xl font-bold mb-4">OpenWeatherMap API</h3>
                  <p className="text-gray-700 mb-4">
                    Forecastlyy uses the reliable OpenWeatherMap API as its primary data source, providing comprehensive global weather data. This ensures you have access to accurate, up-to-date information for locations worldwide.
                  </p>
                  <p className="text-gray-700">
                    What sets Forecastlyy apart is our custom in-house built algorithms that process, refine, and enhance this raw data. Developed by Dhairya Mistry over two years of continuous improvement, these algorithms deliver more accurate, localized forecasts and insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Users Are Saying</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Feedback from our community has shaped Forecastlyy into what it is today
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="font-semibold text-blue-600">JD</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">John D.</h4>
                  <p className="text-sm text-gray-500">Outdoor Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The weather comparison tool has been a game-changer for planning my hiking trips. Being able to compare conditions across different trails helps me make safer, more informed decisions."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="font-semibold text-green-600">SM</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Sarah M.</h4>
                  <p className="text-sm text-gray-500">Event Planner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I rely on Forecastlyy's alerts for my outdoor events. The accuracy and timeliness of the notifications have saved me from several potential disasters. It's become an essential part of my planning process."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="font-semibold text-purple-600">RK</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Robert K.</h4>
                  <p className="text-sm text-gray-500">Teacher</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The educational resources on Forecastlyy have been invaluable for my science classes. The clear explanations and visualizations help my students understand complex weather concepts in a way that's engaging and accessible."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Better Weather Intelligence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of users who rely on Forecastlyy for accurate weather information and insights.
          </p>
          <Button 
            href="https://forecastlyy.netlify.app/" 
            target="_blank"
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10"
            animated
          >
            Visit Forecastlyy Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
