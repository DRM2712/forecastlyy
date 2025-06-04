import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/button/Button';

const WeatherComparisonPage = () => {
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
                Weather Comparison Tool
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Compare weather conditions between multiple locations to make informed decisions
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Weather Comparisons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Understanding Weather Comparisons</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              When planning trips, relocating, or simply satisfying your curiosity about different locations, comparing weather conditions between cities can provide valuable insights. Forecastlyy's Weather Comparison tool allows you to easily contrast weather patterns, temperatures, precipitation levels, and other meteorological factors across multiple locations simultaneously.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Weather comparison is more than just looking at temperature differences. It involves understanding how various weather elements interact in different geographical locations and how these differences might impact your plans, comfort, and activities. Our comprehensive comparison tool gives you a complete picture of weather variations to help you make informed decisions.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-8 mb-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">How to Compare Weather Between Cities</h3>
              
              <ol className="space-y-4 text-gray-700">
                <li className="flex">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">1</span>
                  <div>
                    <h4 className="font-semibold text-lg">Select Your Locations</h4>
                    <p>Enter the names of the cities you want to compare (up to 5 cities simultaneously)</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">2</span>
                  <div>
                    <h4 className="font-semibold text-lg">Choose Your Metrics</h4>
                    <p>Select which weather elements you want to compare (temperature, precipitation, humidity, wind speed, etc.)</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">3</span>
                  <div>
                    <h4 className="font-semibold text-lg">Set Your Timeframe</h4>
                    <p>Choose whether you want to compare current conditions, daily forecasts, or historical averages</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">4</span>
                  <div>
                    <h4 className="font-semibold text-lg">View Your Comparison</h4>
                    <p>Instantly see a side-by-side comparison with clear visual representations of the differences</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">5</span>
                  <div>
                    <h4 className="font-semibold text-lg">Save or Share</h4>
                    <p>Save your comparison for future reference or share it with others who might benefit from the information</p>
                  </div>
                </li>
              </ol>
              
              <p className="mt-6 text-gray-700">
                The tool presents data in both numerical format and through intuitive visualizations that make differences immediately apparent, even for those without meteorological expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Weather Differences */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Understanding Weather Differences</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Weather variations between locations are influenced by numerous factors. Understanding these factors helps explain why cities at similar latitudes might experience vastly different conditions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Geographical Features</h3>
                <p className="text-gray-700">
                  Mountains, bodies of water, and elevation all play significant roles in determining local weather patterns. Coastal cities often experience more moderate temperatures due to the ocean's influence, while inland areas may see greater temperature extremes. Higher elevations typically experience cooler temperatures and different precipitation patterns than lower-lying areas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Latitude and Climate Zones</h3>
                <p className="text-gray-700">
                  A city's distance from the equator significantly impacts its climate. Tropical regions near the equator generally experience warm temperatures year-round with distinct wet and dry seasons, while temperate zones have more pronounced seasonal variations, and polar regions have extreme cold for much of the year.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Urban Heat Islands</h3>
                <p className="text-gray-700">
                  Large cities often experience higher temperatures than surrounding rural areas due to the "urban heat island" effect. Buildings, roads, and other infrastructure absorb and re-emit heat, creating microclimates within urban environments that can be several degrees warmer than nearby countryside.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Prevailing Winds and Ocean Currents</h3>
                <p className="text-gray-700">
                  Global wind patterns and ocean currents distribute heat around the planet, creating distinct weather patterns. Cities downwind of warm ocean currents (like the Gulf Stream) often experience milder winters than would be expected for their latitude.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices for Trip Planning */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Best Practices for Trip Planning</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Weather comparison is an essential tool for effective trip planning. Here's how to use weather comparisons to enhance your travel experiences:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Seasonal Considerations</h3>
                  <p className="text-gray-700">
                    Different destinations have different optimal visiting times. By comparing seasonal weather patterns, you can identify the best time to visit your chosen destination based on your preferences for temperature, precipitation, and other factors.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Packing Appropriately</h3>
                  <p className="text-gray-700">
                    Understanding weather differences helps you pack appropriately for your trip. Our comparison tool shows you not just average temperatures but also ranges and extremes, helping you prepare for all conditions you might encounter.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Activity Planning</h3>
                  <p className="text-gray-700">
                    Many activities are weather-dependent. By comparing weather forecasts for your travel dates, you can plan outdoor activities for the days with the most favorable conditions and reserve indoor activities for potentially inclement weather.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multi-Destination Trips</h3>
                  <p className="text-gray-700">
                    For trips covering multiple locations, weather comparison helps you determine the optimal route and sequence to experience the best conditions at each destination.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Understanding Microclimates</h3>
                  <p className="text-gray-700">
                    Even within a single city or region, weather can vary significantly. Our detailed comparisons help you understand these microclimates and plan accordingly, especially in areas with varied topography.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700">
              By leveraging Forecastlyy's Weather Comparison tool, you can make more informed travel decisions, minimize weather-related disruptions, and maximize enjoyment of your destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Demo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Try Our Weather Comparison Tool</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-8">
              Experience the power of side-by-side weather comparisons to make better-informed decisions for travel, relocation, or simply satisfying your curiosity.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-gray-600 mb-6">Interactive comparison tool would appear here</p>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Compare Weather Across Locations?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Make better-informed decisions for travel, relocation, or any situation where weather matters.
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

export default WeatherComparisonPage;
