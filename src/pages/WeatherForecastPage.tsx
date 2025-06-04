import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/button/Button';

const WeatherForecastPage = () => {
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
                Weather Forecast Tool
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access accurate, detailed weather forecasts to plan your days with confidence
            </p>
          </div>
        </div>
      </section>

      {/* How to Read Forecasts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How to Read Weather Forecasts</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Weather forecasts contain a wealth of information that can help you plan your activities and prepare for changing conditions. Understanding how to interpret this information is key to making the most of Forecastlyy's Weather Forecast tool.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-8 mb-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Key Elements of a Weather Forecast</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Temperature</h4>
                    <p className="text-gray-700">
                      Forecasts typically include high and low temperatures for the day. Pay attention to both values, as the daily range can affect your clothing choices and activity planning. Temperature forecasts may also include "feels like" temperatures that account for factors like wind chill and humidity.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Precipitation</h4>
                    <p className="text-gray-700">
                      Precipitation forecasts include both the chance of precipitation (expressed as a percentage) and the expected amount. A 40% chance of rain means that there is a 40% probability that rain will fall at any given point in the forecast area. The forecast may also specify the type of precipitation expected (rain, snow, sleet, etc.).
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Wind</h4>
                    <p className="text-gray-700">
                      Wind forecasts include both speed and direction. Wind direction is typically expressed as the direction from which the wind is coming (e.g., a north wind blows from north to south). Wind speed is usually given in miles per hour (mph) or kilometers per hour (km/h). Some forecasts also include gust speeds, which represent temporary increases in wind speed.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Humidity</h4>
                    <p className="text-gray-700">
                      Humidity is expressed as a percentage representing the amount of moisture in the air relative to what the air can hold at that temperature. High humidity can make hot temperatures feel hotter and cold temperatures feel colder. It also affects comfort levels and can impact activities like painting, drying clothes, or certain sports.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">UV Index</h4>
                    <p className="text-gray-700">
                      The UV Index indicates the strength of ultraviolet radiation from the sun. It ranges from 0 (minimal) to 11+ (extreme). Higher values mean greater risk of sunburn and skin damage, requiring more protective measures like sunscreen, hats, and limiting direct sun exposure.
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
                    <h4 className="font-semibold text-lg mb-1">Forecast Period</h4>
                    <p className="text-gray-700">
                      Pay attention to the time period covered by each forecast. Forecastlyy provides hourly forecasts for the next 48 hours, daily forecasts for the next 7 days, and extended outlooks for up to 14 days. The accuracy of forecasts typically decreases the further into the future they predict.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Forecasts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Types of Weather Forecasts</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Forecastlyy offers several types of forecasts to meet different planning needs. Understanding the strengths and limitations of each type helps you choose the most appropriate forecast for your situation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Hourly Forecasts</h3>
                <p className="text-gray-700 mb-4">
                  Hourly forecasts provide detailed predictions for each hour of the day, including temperature, precipitation chance, wind, and humidity.
                </p>
                <h4 className="font-medium text-gray-800 mb-2">Best Used For:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Planning specific activities during the day</li>
                  <li>Tracking the timing of weather changes</li>
                  <li>Short-term planning (next 24-48 hours)</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Daily Forecasts</h3>
                <p className="text-gray-700 mb-4">
                  Daily forecasts summarize expected conditions for each day, typically including high and low temperatures, overall precipitation chance, and general weather conditions.
                </p>
                <h4 className="font-medium text-gray-800 mb-2">Best Used For:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Planning activities several days in advance</li>
                  <li>Identifying general weather patterns</li>
                  <li>Medium-term planning (3-7 days ahead)</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Extended Outlooks</h3>
                <p className="text-gray-700 mb-4">
                  Extended outlooks provide general predictions for periods beyond 7 days, focusing on temperature trends and precipitation patterns rather than specific details.
                </p>
                <h4 className="font-medium text-gray-800 mb-2">Best Used For:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Long-term planning (1-2 weeks ahead)</li>
                  <li>Identifying potential weather trends</li>
                  <li>Preliminary event planning</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Severe Weather Forecasts</h3>
                <p className="text-gray-700 mb-4">
                  Severe weather forecasts focus on potentially dangerous conditions like thunderstorms, tornadoes, hurricanes, winter storms, and extreme heat or cold.
                </p>
                <h4 className="font-medium text-gray-800 mb-2">Best Used For:</h4>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Safety planning and preparation</li>
                  <li>Making evacuation or shelter decisions</li>
                  <li>Protecting property from weather damage</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-lg mb-2">Understanding Forecast Accuracy</h3>
              <p className="text-gray-700">
                Weather forecasting is a complex science that becomes less certain the further into the future it predicts. Generally, forecasts for the next 24 hours are highly accurate, 2-5 day forecasts maintain good reliability, while forecasts beyond 7 days should be viewed as general trends rather than precise predictions. Forecastlyy uses advanced algorithms to refine data from OpenWeatherMap API, but all forecasts should be checked regularly for updates, especially for important events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Making the Most of Forecasts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Making the Most of Weather Forecasts</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Weather forecasts are most valuable when you know how to apply them to your specific needs. Here are strategies for using Forecastlyy's Weather Forecast tool effectively:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">For Daily Planning</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Check the hourly forecast each morning to plan your day's activities</li>
                  <li>Pay attention to precipitation timing when scheduling outdoor activities</li>
                  <li>Note temperature changes throughout the day to dress appropriately</li>
                  <li>Check the UV index to determine sun protection needs</li>
                  <li>Review wind forecasts if you're planning activities that might be affected by wind</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">For Travel Planning</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Check forecasts for both your departure and destination locations</li>
                  <li>For road trips, review forecasts along your entire route</li>
                  <li>Use the 7-day forecast to pack appropriate clothing and gear</li>
                  <li>Check for potential severe weather that might affect travel plans</li>
                  <li>Set up weather alerts for your destination before traveling</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">For Outdoor Events</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Begin monitoring forecasts 7-10 days before the event</li>
                  <li>Check forecasts more frequently as the event approaches</li>
                  <li>Pay attention to precipitation probability and timing</li>
                  <li>Consider wind forecasts for tents, decorations, and comfort</li>
                  <li>Have a backup plan ready if weather conditions change</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">For Seasonal Planning</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Use extended outlooks to identify potential weather trends</li>
                  <li>Compare current forecasts with seasonal averages to anticipate unusual conditions</li>
                  <li>Plan seasonal activities during historically favorable periods</li>
                  <li>Prepare for seasonal transitions by monitoring long-term temperature trends</li>
                  <li>Use historical weather data (available in Forecastlyy) to supplement forecasts for long-term planning</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Pro Tips for Weather Forecast Users</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Check forecasts regularly</strong> - Weather predictions become more accurate as the forecast time approaches. What looked like a rainy weekend on Monday might change by Thursday.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Understand probability</strong> - A 40% chance of rain doesn't mean it will rain for 40% of the day; it means there's a 40% chance that rain will occur at any given point in the forecast area.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Consider local factors</strong> - Microclimates created by bodies of water, mountains, or urban areas can cause actual conditions to differ from general forecasts.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Use multiple forecast types</strong> - Combine hourly, daily, and extended forecasts for a complete picture of upcoming weather patterns.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Set up personalized alerts</strong> - Customize Forecastlyy's alert system to notify you about specific conditions that matter to your activities.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Terminology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Essential Weather Terminology</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Understanding common weather terms helps you interpret forecasts more effectively. Here's a quick guide to essential terminology you'll encounter in Forecastlyy's Weather Forecast tool:
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">General Terms</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-medium text-gray-800">Dew Point</dt>
                      <dd className="text-gray-700">The temperature at which air becomes saturated and dew forms. Higher dew points indicate more moisture in the air and greater humidity.</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-800">Barometric Pressure</dt>
                      <dd className="text-gray-700">The pressure exerted by the atmosphere, measured in inches of mercury (inHg) or hectopascals (hPa). Rising pressure typically indicates improving weather, while falling pressure often signals approaching storms.</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-800">Front</dt>
                      <dd className="text-gray-700">The boundary between two different air masses, often bringing changes in weather conditions.</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-800">Visibility</dt>
                      <dd className="text-gray-700">The greatest distance at which objects can be clearly seen, typically measured in miles or kilometers.</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">Precipitation Terms</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="font-medium text-gray-800">Precipitation</dt>
                      <dd className="text-gray-700">Any form of water falling from the sky, including rain, snow, sleet, and hail.</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-800">Chance of Precipitation (PoP)</dt>
                      <dd className="text-gray-700">The likelihood of measurable precipitation occurring at any point in the forecast area during a specified time period.</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-800">Accumulation</dt>
                      <dd className="text-gray-700">The expected amount of precipitation, typically measured in inches or millimeters for rain and snow.</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-800">Shower</dt>
                      <dd className="text-gray-700">Brief precipitation from a cumulus cloud, often characterized by sudden start and stop.</dd>
                    </div>
                  </dl>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Severe Weather Terms</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="font-medium text-gray-800">Watch</dt>
                    <dd className="text-gray-700">Conditions are favorable for the development of a specific weather hazard. Be prepared and stay informed.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-800">Warning</dt>
                    <dd className="text-gray-700">A hazardous weather event is imminent or already occurring. Take immediate action to protect life and property.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-800">Advisory</dt>
                    <dd className="text-gray-700">Weather conditions that may cause significant inconvenience and, if caution is not exercised, could lead to situations that may threaten life or property.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-800">Squall Line</dt>
                    <dd className="text-gray-700">A line of thunderstorms forming along or ahead of a cold front, often bringing strong winds and heavy rain.</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Demo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Try Our Weather Forecast Tool</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-8">
              Access detailed, accurate weather forecasts for any location to plan your activities with confidence.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <p className="text-gray-600 mb-6">Interactive weather forecast tool would appear here</p>
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
          <h2 className="text-3xl font-bold mb-6">Plan With Confidence</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Access accurate, detailed weather forecasts powered by OpenWeatherMap API and enhanced by our custom algorithms.
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

export default WeatherForecastPage;
