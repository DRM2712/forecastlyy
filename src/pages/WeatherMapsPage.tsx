import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/button/Button';

const WeatherMapsPage = () => {
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
                Weather Maps Tool
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Visualize weather patterns and make informed decisions with our interactive maps
            </p>
          </div>
        </div>
      </section>

      {/* How to Use Weather Maps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How to Use Weather Maps</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Weather maps are powerful tools that provide visual representations of meteorological data, allowing you to see patterns, trends, and forecasts at a glance. Forecastlyy's Weather Maps tool offers a comprehensive set of interactive maps that help you understand current conditions and future forecasts with ease.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-8 mb-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Getting Started with Weather Maps</h3>
              
              <ol className="space-y-4 text-gray-700">
                <li className="flex">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-lg">Select Your Map Type</h4>
                    <p>Choose from various map layers including temperature, precipitation, wind, pressure, cloud cover, and more. Each layer provides different insights into weather conditions.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-lg">Navigate the Map</h4>
                    <p>Use zoom controls to focus on specific regions, from global views to detailed local perspectives. Pan across the map by clicking and dragging.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-lg">Adjust Time Controls</h4>
                    <p>Use the timeline slider to view forecasted conditions or historical data. This feature allows you to track weather patterns over time and anticipate changes.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-semibold text-lg">Customize Your View</h4>
                    <p>Adjust display settings such as color scales, data units (imperial or metric), and overlay options to create the most useful visualization for your needs.</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-semibold text-lg">Access Detailed Information</h4>
                    <p>Click on any location to view detailed weather data for that specific point, including current conditions and forecasts.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Weather Maps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Types of Weather Maps</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Forecastlyy offers a variety of map types, each designed to highlight different aspects of weather conditions. Understanding what each map shows helps you select the most relevant visualization for your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Temperature Maps</h3>
                <p className="text-gray-700 mb-4">
                  Temperature maps display current or forecasted temperatures using a color gradient. Warmer colors (reds and oranges) typically represent higher temperatures, while cooler colors (blues and purples) represent lower temperatures.
                </p>
                <h4 className="font-medium text-gray-800 mb-2">Best Used For:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Planning outdoor activities</li>
                  <li>Identifying heat waves or cold fronts</li>
                  <li>Understanding regional temperature patterns</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Precipitation Maps</h3>
                <p className="text-gray-700 mb-4">
                  Precipitation maps show where rain, snow, or other forms of precipitation are occurring or expected. Intensity is typically indicated by color, with darker colors representing heavier precipitation.
                </p>
                <h4 className="font-medium text-gray-800 mb-2">Best Used For:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Planning travel and outdoor events</li>
                  <li>Tracking storms and rainfall patterns</li>
                  <li>Monitoring drought conditions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Wind Maps</h3>
                <p className="text-gray-700 mb-4">
                  Wind maps display wind direction and speed using arrows or streamlines. The length or color of the arrows typically indicates wind speed, while the direction shows where the wind is blowing.
                </p>
                <h4 className="font-medium text-gray-800 mb-2">Best Used For:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Aviation and sailing planning</li>
                  <li>Understanding how weather systems are moving</li>
                  <li>Anticipating changes in temperature or precipitation</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Pressure Maps</h3>
                <p className="text-gray-700 mb-4">
                  Pressure maps show atmospheric pressure patterns using isobars (lines connecting points of equal pressure). These maps are fundamental for understanding weather systems and forecasting.
                </p>
                <h4 className="font-medium text-gray-800 mb-2">Best Used For:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Identifying high and low pressure systems</li>
                  <li>Predicting weather changes</li>
                  <li>Understanding storm development</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Radar Maps</h3>
                <p className="text-gray-700 mb-4">
                  Radar maps show real-time precipitation data collected by weather radars. They provide highly detailed information about precipitation type, intensity, and movement.
                </p>
                <h4 className="font-medium text-gray-800 mb-2">Best Used For:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Tracking storms in real-time</li>
                  <li>Short-term precipitation forecasting</li>
                  <li>Identifying severe weather features</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Satellite Maps</h3>
                <p className="text-gray-700 mb-4">
                  Satellite maps provide images of clouds and weather systems from space. They offer a broad view of weather patterns and can show features not visible on other maps.
                </p>
                <h4 className="font-medium text-gray-800 mb-2">Best Used For:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Viewing large-scale weather patterns</li>
                  <li>Tracking tropical systems and hurricanes</li>
                  <li>Monitoring cloud cover and development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reading Weather Maps Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Reading Weather Maps Like a Meteorologist</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Weather maps contain a wealth of information that can seem overwhelming at first. Learning to interpret these maps like a professional meteorologist can help you make better-informed decisions about your activities and plans.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Understanding Fronts and Pressure Systems</h3>
                <p className="text-gray-700 mb-4">
                  Weather maps often display fronts—boundaries between different air masses—using specific symbols:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <div className="h-4 w-4 rounded-full border-2 border-blue-500"></div>
                    </div>
                    <span><strong>Cold Fronts</strong> (blue lines with triangles): Indicate the leading edge of a cooler air mass. As they pass, expect temperature drops, gusty winds, and possibly thunderstorms.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <div className="h-4 w-4 rounded-full border-2 border-red-500"></div>
                    </div>
                    <span><strong>Warm Fronts</strong> (red lines with semicircles): Indicate the leading edge of a warmer air mass. They typically bring gradual warming and possibly prolonged precipitation.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                      <div className="h-4 w-4 rounded-full border-2 border-purple-500"></div>
                    </div>
                    <span><strong>Occluded Fronts</strong> (purple lines with alternating triangles and semicircles): Form when a cold front overtakes a warm front, often bringing complex weather patterns.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <div className="h-4 w-4 rounded-full border-2 border-blue-500"></div>
                    </div>
                    <span><strong>Stationary Fronts</strong> (alternating blue and red line with triangles and semicircles): Boundaries between air masses that are not moving significantly.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Interpreting Pressure Patterns</h3>
                <p className="text-gray-700 mb-4">
                  Pressure systems are key indicators of weather conditions:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-500 font-bold">H</span>
                    </div>
                    <span><strong>High Pressure Systems</strong> (often marked with an "H"): Generally associated with clear, stable weather as air descends and warms.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
                      <span className="text-red-500 font-bold">L</span>
                    </div>
                    <span><strong>Low Pressure Systems</strong> (often marked with an "L"): Associated with unsettled weather as air rises and cools, potentially forming clouds and precipitation.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                      <div className="h-4 w-4 border-t-2 border-gray-500"></div>
                    </div>
                    <span><strong>Isobars</strong> (lines connecting points of equal pressure): Closely spaced isobars indicate strong winds, while widely spaced isobars suggest lighter winds.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Reading Radar and Precipitation Maps</h3>
                <p className="text-gray-700 mb-4">
                  Radar maps use colors to indicate precipitation intensity:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-green-300 mr-2"></div>
                        <span>Light precipitation</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-yellow-300 mr-2"></div>
                        <span>Moderate precipitation</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-orange-400 mr-2"></div>
                        <span>Heavy precipitation</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-red-500 mr-2"></div>
                        <span>Very heavy precipitation</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-purple-500 mr-2"></div>
                        <span>Extreme precipitation</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-blue-300 mr-2"></div>
                        <span>Snow (on some maps)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700">
              By understanding these basic elements, you can begin to interpret weather maps more effectively. With practice, you'll be able to recognize patterns and make your own predictions about upcoming weather changes.
            </p>
          </div>
        </div>
      </section>

      {/* Practical Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Practical Applications of Weather Maps</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Weather maps are valuable tools for a wide range of activities and planning purposes. Here's how different groups can benefit from using Forecastlyy's Weather Maps tool:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Outdoor Enthusiasts</h3>
                  <p className="text-gray-700">
                    Hikers, campers, and outdoor sports enthusiasts can use weather maps to plan activities during optimal conditions and avoid potentially dangerous weather. Wind maps are particularly useful for activities like sailing, kiteboarding, and paragliding, while precipitation maps help plan hiking trips and outdoor events.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Travelers</h3>
                  <p className="text-gray-700">
                    Whether planning a road trip, flight, or vacation, weather maps help travelers anticipate conditions at their destination and along their route. This information can be crucial for avoiding delays, packing appropriately, and adjusting itineraries as needed.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Homeowners</h3>
                  <p className="text-gray-700">
                    Property owners can use weather maps to prepare for approaching storms, heavy rainfall, or extreme temperatures. This preparation might include securing outdoor items before high winds, protecting plants from frost, or preparing for potential flooding.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Event Planners</h3>
                  <p className="text-gray-700">
                    Those organizing outdoor events can use weather maps to select optimal dates, prepare contingency plans, and make informed decisions about event logistics. Long-range forecast maps can help with initial planning, while short-term radar and precipitation maps assist with day-of decisions.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Weather Enthusiasts</h3>
                  <p className="text-gray-700">
                    Those with an interest in meteorology can use weather maps to deepen their understanding of atmospheric processes, track interesting weather phenomena, and develop their forecasting skills by comparing predictions to actual outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Demo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Try Our Weather Maps Tool</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-8">
              Explore interactive weather maps with multiple layers and customization options.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-gray-600 mb-6">Interactive weather map would appear here</p>
                  <Button 
                    href="https://forecastlyy.netlify.app" 
                    target="_blank"
                    size="lg" 
                    animated
                  >
                    Access Full Tool on Forecastlyy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Visualize Weather Like Never Before</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore our interactive weather maps and gain deeper insights into weather patterns.
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

export default WeatherMapsPage;
