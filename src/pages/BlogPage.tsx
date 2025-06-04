import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/button/Button';

const BlogPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div 
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Weather Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert insights, weather science, and practical tips from the Forecastlyy team
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Featured Article</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gray-200 h-64 md:h-auto">
                  <div className="h-full w-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">Weather Science</div>
                  <h3 className="text-2xl font-bold mt-2 mb-4">Understanding the Jet Stream: Nature's Weather Engine</h3>
                  <p className="text-gray-600 mb-4">
                    The jet stream plays a crucial role in shaping weather patterns across the globe. This high-altitude, fast-flowing air current influences everything from storm tracks to seasonal temperatures. In this comprehensive guide, we explore how the jet stream works and why it matters for weather forecasting.
                  </p>
                  <div className="flex items-center mt-6">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="font-semibold text-blue-600">DM</span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">Dhairya Mistry</p>
                      <p className="text-sm text-gray-500">May 28, 2025 • 12 min read</p>
                    </div>
                  </div>
                  <Button href="/blog/understanding-jet-stream" className="mt-6" animated>
                    Read Full Article
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Recent Articles</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="uppercase tracking-wide text-xs text-blue-500 font-semibold">Weather Phenomena</div>
                  <h3 className="text-xl font-bold mt-1 mb-2">The Science Behind Lightning: Nature's Electrical Show</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Lightning is one of nature's most spectacular displays, but it's also one of the most dangerous weather phenomena. Learn about the formation process, different types of lightning, and essential safety tips.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">May 15, 2025 • 8 min read</span>
                  </div>
                  <Button href="/blog/science-behind-lightning" variant="outline" size="sm" className="mt-4">
                    Read More
                  </Button>
                </div>
              </div>
              
              {/* Article 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 bg-gradient-to-r from-cyan-400 to-cyan-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="uppercase tracking-wide text-xs text-blue-500 font-semibold">Weather Tools</div>
                  <h3 className="text-xl font-bold mt-1 mb-2">Making the Most of Weather Maps: A Complete Guide</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Weather maps are powerful tools for understanding current conditions and forecasts. This guide explains how to interpret different map types, from surface analysis charts to radar imagery.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">May 3, 2025 • 10 min read</span>
                  </div>
                  <Button href="/blog/weather-maps-guide" variant="outline" size="sm" className="mt-4">
                    Read More
                  </Button>
                </div>
              </div>
              
              {/* Article 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="uppercase tracking-wide text-xs text-blue-500 font-semibold">Seasonal Weather</div>
                  <h3 className="text-xl font-bold mt-1 mb-2">Spring Weather Patterns: What to Expect and Why</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Spring brings a unique set of weather patterns as the atmosphere transitions from winter to summer. Discover why spring weather can be so variable and what causes phenomena like thunderstorms and rapid temperature changes.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">April 22, 2025 • 7 min read</span>
                  </div>
                  <Button href="/blog/spring-weather-patterns" variant="outline" size="sm" className="mt-4">
                    Read More
                  </Button>
                </div>
              </div>
              
              {/* Article 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="uppercase tracking-wide text-xs text-blue-500 font-semibold">Climate & Weather</div>
                  <h3 className="text-xl font-bold mt-1 mb-2">Urban Heat Islands: How Cities Change Local Weather</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Cities are often several degrees warmer than surrounding rural areas due to the urban heat island effect. Learn how urban development alters local weather patterns and what cities are doing to mitigate these effects.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">April 10, 2025 • 9 min read</span>
                  </div>
                  <Button href="/blog/urban-heat-islands" variant="outline" size="sm" className="mt-4">
                    Read More
                  </Button>
                </div>
              </div>
              
              {/* Article 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="uppercase tracking-wide text-xs text-blue-500 font-semibold">Weather Safety</div>
                  <h3 className="text-xl font-bold mt-1 mb-2">Tornado Safety: Before, During, and After the Storm</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Tornadoes are among the most violent atmospheric storms. This comprehensive guide covers tornado formation, warning signs, and detailed safety protocols for every stage of a tornado event.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">March 28, 2025 • 11 min read</span>
                  </div>
                  <Button href="/blog/tornado-safety" variant="outline" size="sm" className="mt-4">
                    Read More
                  </Button>
                </div>
              </div>
              
              {/* Article 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="uppercase tracking-wide text-xs text-blue-500 font-semibold">Weather Technology</div>
                  <h3 className="text-xl font-bold mt-1 mb-2">The Evolution of Weather Forecasting: From Ancient Methods to AI</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Weather forecasting has come a long way from folklore and observation to sophisticated computer models and artificial intelligence. Explore this fascinating journey and learn how modern forecasting works.
                  </p>
                  <div className="flex items-center text-sm">
                    <span className="text-gray-500">March 15, 2025 • 12 min read</span>
                  </div>
                  <Button href="/blog/evolution-weather-forecasting" variant="outline" size="sm" className="mt-4">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button href="/blog/archive" variant="outline" size="lg" animated>
                View All Articles
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Explore by Category</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <a href="/blog/category/weather-science" className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-lg p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <h3 className="font-semibold">Weather Science</h3>
                <p className="text-sm text-gray-600 mt-1">24 articles</p>
              </a>
              
              <a href="/blog/category/forecasting" className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-lg p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="font-semibold">Forecasting</h3>
                <p className="text-sm text-gray-600 mt-1">18 articles</p>
              </a>
              
              <a href="/blog/category/weather-safety" className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-lg p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <h3 className="font-semibold">Weather Safety</h3>
                <p className="text-sm text-gray-600 mt-1">15 articles</p>
              </a>
              
              <a href="/blog/category/seasonal-weather" className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-lg p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <h3 className="font-semibold">Seasonal Weather</h3>
                <p className="text-sm text-gray-600 mt-1">12 articles</p>
              </a>
              
              <a href="/blog/category/climate" className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-lg p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold">Climate & Weather</h3>
                <p className="text-sm text-gray-600 mt-1">10 articles</p>
              </a>
              
              <a href="/blog/category/weather-technology" className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-lg p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="font-semibold">Weather Technology</h3>
                <p className="text-sm text-gray-600 mt-1">9 articles</p>
              </a>
              
              <a href="/blog/category/weather-history" className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-lg p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="font-semibold">Weather History</h3>
                <p className="text-sm text-gray-600 mt-1">7 articles</p>
              </a>
              
              <a href="/blog/category/weather-photography" className="bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-lg p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="font-semibold">Weather Photography</h3>
                <p className="text-sm text-gray-600 mt-1">5 articles</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Weather Insights</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest articles, weather science updates, and seasonal forecasting tips.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Button size="lg" animated>
                  Subscribe
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                By subscribing, you agree to receive email communications from Forecastlyy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Explore Our Weather Tools</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Put your weather knowledge into practice with our suite of interactive weather tools.
          </p>
          <Button 
            href="https://forecastlyy.netlify.app" 
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

export default BlogPage;
