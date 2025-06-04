import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/button/Button';

const EducationCenterPage = () => {
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
                Weather Education Center
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expand your weather knowledge with comprehensive resources and expert insights
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Understanding Weather: Beyond the Forecast</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Weather affects every aspect of our lives, from daily decisions about what to wear to long-term planning for agriculture, construction, and travel. At Forecastlyy, we believe that understanding weather is just as important as knowing the forecast. Our Weather Education Center provides resources to help you interpret weather data, understand meteorological concepts, and make more informed decisions based on weather conditions.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Whether you're a weather enthusiast looking to deepen your knowledge or simply want to better understand the forecasts you use every day, our educational resources are designed to be accessible, informative, and practical. Developed by Dhairya Mistry over two years of research and refinement, these materials reflect our commitment to weather literacy and informed decision-making.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-8 mb-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">How to Use This Education Center</h3>
              
              <p className="text-gray-700 mb-4">
                Our Weather Education Center is organized into several key sections to help you find the information you need:
              </p>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Weather Basics</strong> - Fundamental concepts and terminology for those new to meteorology</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Weather Phenomena</strong> - Detailed explanations of specific weather events and conditions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Weather Tools</strong> - Guides to understanding and using various weather instruments and resources</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Weather Safety</strong> - Critical information for staying safe during various weather conditions</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Advanced Topics</strong> - More complex meteorological concepts for those looking to deepen their understanding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Basics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Weather Basics</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Understanding the fundamental concepts of meteorology provides a foundation for interpreting weather forecasts and recognizing weather patterns. Here are some key concepts to get you started:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">The Atmosphere</h3>
                <p className="text-gray-700">
                  Earth's atmosphere is divided into several layers, with most weather occurring in the lowest layer called the troposphere. This layer extends from the Earth's surface to about 8-15 kilometers (5-9 miles) high, depending on location and season. The atmosphere contains a mixture of gases, primarily nitrogen (78%) and oxygen (21%), with trace amounts of water vapor, carbon dioxide, and other gases.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Air Pressure</h3>
                <p className="text-gray-700">
                  Air pressure is the weight of the atmosphere pressing down on the Earth's surface. It's measured in various units, including inches of mercury (inHg), millibars (mb), or hectopascals (hPa). Changes in air pressure often indicate changing weather conditions. Generally, high pressure systems bring clear, stable weather, while low pressure systems are associated with clouds, precipitation, and sometimes storms.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Temperature</h3>
                <p className="text-gray-700">
                  Temperature measures the amount of heat energy in the air. It's affected by factors including latitude, altitude, season, time of day, cloud cover, and proximity to large bodies of water. Temperature differences create pressure gradients that drive wind and weather patterns. The uneven heating of Earth's surface by the sun is the primary driver of our planet's weather systems.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Humidity</h3>
                <p className="text-gray-700">
                  Humidity refers to the amount of water vapor in the air. Relative humidity is expressed as a percentage indicating how close the air is to saturation (100%). When air reaches saturation, condensation occurs, forming clouds, fog, or dew. Humidity affects how temperatures feel (higher humidity makes warm temperatures feel hotter and cold temperatures feel colder) and influences precipitation potential.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Wind</h3>
                <p className="text-gray-700">
                  Wind is the horizontal movement of air from areas of high pressure to areas of low pressure. Wind direction is described by the direction from which it originates (e.g., a north wind blows from north to south). Wind speed is affected by the pressure gradient (difference in pressure between two areas), the Coriolis effect (Earth's rotation), and local terrain features.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Precipitation</h3>
                <p className="text-gray-700">
                  Precipitation occurs when water vapor condenses in the atmosphere and becomes heavy enough to fall to Earth's surface. Forms include rain, snow, sleet, and hail. Precipitation forms through various processes, including frontal lifting (when air masses meet), orographic lifting (when air is forced up over mountains), convection (when air rises due to heating), and convergence (when air flows together).
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">Weather vs. Climate</h3>
              <p className="text-gray-700 mb-4">
                A common point of confusion is the difference between weather and climate:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Weather</strong> refers to the state of the atmosphere at a specific place and time—the day-to-day conditions we experience, including temperature, humidity, precipitation, wind, and cloud cover.</li>
                <li><strong>Climate</strong> describes the average weather patterns in a region over a longer period, typically 30 years or more. It's essentially the "personality" of a location's weather over time.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Understanding this distinction helps contextualize daily weather events within broader patterns and trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Phenomena Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Weather Phenomena</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Weather phenomena are specific atmospheric events or conditions that we experience and observe. Understanding these phenomena helps you recognize what's happening in the atmosphere and anticipate potential impacts.
            </p>
            
            <div className="space-y-8 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Fronts</h3>
                <p className="text-gray-700 mb-4">
                  Fronts are boundaries between different air masses. They're often associated with changes in weather conditions as they pass through an area:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Cold Front</strong>: Occurs when a cold air mass displaces a warm air mass. Typically brings a sharp temperature drop, gusty winds, and possibly thunderstorms followed by clearing conditions.</li>
                  <li><strong>Warm Front</strong>: Occurs when a warm air mass displaces a cold air mass. Usually brings gradual warming, increasing clouds, and possibly prolonged light to moderate precipitation.</li>
                  <li><strong>Stationary Front</strong>: Forms when a cold front or warm front stops moving. Can bring persistent cloudy, wet weather to areas along the front.</li>
                  <li><strong>Occluded Front</strong>: Forms when a cold front overtakes a warm front. Often brings complex weather patterns and can be associated with strong low-pressure systems.</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Thunderstorms</h3>
                <p className="text-gray-700 mb-4">
                  Thunderstorms are local storms that produce lightning, thunder, and often heavy rain. They form when warm, moist air rises rapidly in an unstable atmosphere. Thunderstorms go through three main stages:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li><strong>Developing Stage</strong>: Characterized by updrafts (rising air) that form cumulus clouds that grow vertically.</li>
                  <li><strong>Mature Stage</strong>: The storm reaches its most intense phase, with both updrafts and downdrafts (descending air). This stage produces heavy rain, lightning, and possibly hail or strong winds.</li>
                  <li><strong>Dissipating Stage</strong>: Downdrafts dominate as the storm loses energy, rainfall decreases, and the storm gradually weakens.</li>
                </ol>
                <p className="text-gray-700 mt-4">
                  Severe thunderstorms can produce damaging winds, large hail, flash flooding, and occasionally tornadoes.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Hurricanes and Tropical Cyclones</h3>
                <p className="text-gray-700 mb-4">
                  Hurricanes (also called typhoons or cyclones in different parts of the world) are large, rotating tropical storm systems with sustained winds of at least 74 mph (119 km/h). They form over warm ocean waters and are characterized by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>A central "eye" of relatively calm, clear conditions</li>
                  <li>An "eyewall" surrounding the eye where the most intense winds and rainfall occur</li>
                  <li>"Rain bands" spiraling outward from the center</li>
                  <li>Counterclockwise rotation in the Northern Hemisphere and clockwise rotation in the Southern Hemisphere</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Hurricanes can cause extensive damage through high winds, storm surge (abnormal rise in sea level), and heavy rainfall leading to flooding.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Winter Weather</h3>
                <p className="text-gray-700 mb-4">
                  Winter weather encompasses several phenomena:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Snow</strong>: Precipitation in the form of ice crystals that combine to form snowflakes. Forms when water vapor condenses directly into ice in clouds where temperatures are below freezing.</li>
                  <li><strong>Sleet</strong>: Small, clear ice pellets that form when snowflakes melt as they fall through a warm layer of air, then refreeze in a cold layer closer to the ground.</li>
                  <li><strong>Freezing Rain</strong>: Rain that freezes on contact with cold surfaces, creating a coating of ice. Forms when raindrops fall through a shallow layer of cold air near the surface.</li>
                  <li><strong>Blizzards</strong>: Severe winter storms characterized by low temperatures, strong winds, and heavy snow that significantly reduces visibility.</li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Fog and Low Clouds</h3>
                <p className="text-gray-700 mb-4">
                  Fog is essentially a cloud that forms at or near ground level, reducing visibility to less than 1 kilometer (0.62 miles). Different types of fog form through various processes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Radiation Fog</strong>: Forms on clear nights when the ground cools rapidly, cooling the air above it until water vapor condenses. Common in valleys and low-lying areas.</li>
                  <li><strong>Advection Fog</strong>: Forms when warm, moist air moves over a cooler surface. Often seen when warm air moves over cool water or snow-covered ground.</li>
                  <li><strong>Valley Fog</strong>: Forms in valleys as cold air settles due to its greater density, reaching the dew point and forming fog.</li>
                  <li><strong>Sea Fog</strong>: Forms when warm, moist air moves over cooler ocean waters.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Weather Tools and Resources</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Understanding the tools and resources available for monitoring and forecasting weather helps you access and interpret weather information more effectively. Here's an overview of common weather tools and how they work:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Weather Radar</h3>
                <p className="text-gray-700">
                  Weather radar systems send out radio waves that bounce off precipitation particles in the atmosphere. By analyzing the returned signals, radar can determine the location, intensity, and movement of precipitation. Modern Doppler radar can also detect wind patterns, helping meteorologists identify potentially severe weather features like rotation in thunderstorms.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Weather Satellites</h3>
                <p className="text-gray-700">
                  Weather satellites provide images of Earth's atmosphere from space, offering a broad view of weather systems. Geostationary satellites remain fixed over one location, providing continuous monitoring of a specific region, while polar-orbiting satellites circle the Earth, capturing detailed data about temperature, moisture, and other atmospheric conditions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Weather Stations</h3>
                <p className="text-gray-700">
                  Weather stations are collections of instruments that measure various weather parameters at a specific location. They typically include thermometers (temperature), barometers (air pressure), hygrometers (humidity), anemometers (wind speed and direction), and rain gauges (precipitation). Data from weather stations around the world form the backbone of weather monitoring and forecasting.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Weather Balloons</h3>
                <p className="text-gray-700">
                  Weather balloons carry instrument packages called radiosondes into the upper atmosphere. As they ascend, these instruments measure temperature, humidity, pressure, and wind at different altitudes. This vertical profile of the atmosphere is crucial for understanding atmospheric stability and predicting weather developments.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Weather Models</h3>
                <p className="text-gray-700">
                  Weather models are complex computer programs that simulate atmospheric processes to predict future weather conditions. They incorporate data from various sources and use mathematical equations representing physical processes to forecast how weather patterns will evolve. Different models have different strengths, which is why meteorologists often consult multiple models when making forecasts.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Weather Apps and Websites</h3>
                <p className="text-gray-700">
                  Modern weather apps and websites like Forecastlyy aggregate data from various sources and present it in user-friendly formats. They often include features like interactive maps, customizable alerts, and location-specific forecasts. The best platforms combine accurate data sources with clear visualization and educational content to help users understand the weather information they're receiving.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Forecastlyy's Data Sources</h3>
              <p className="text-gray-700 mb-4">
                Forecastlyy uses OpenWeatherMap API as its primary data source, providing comprehensive global weather data. However, what truly sets our platform apart is our custom in-house built algorithms that process, refine, and enhance this raw data to provide more accurate, localized forecasts and insights.
              </p>
              <p className="text-gray-700">
                Developed by Dhairya Mistry over two years of continuous improvement, these algorithms incorporate pattern recognition, historical trend analysis, and local condition adjustments to deliver weather intelligence you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Topics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Advanced Weather Topics</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              For those looking to deepen their understanding of meteorology, these advanced topics explore the complex systems and processes that drive our weather:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Global Circulation Patterns</h3>
                <p className="text-gray-700">
                  Earth's atmosphere circulates in distinct patterns that distribute heat and moisture around the planet. These patterns include the Hadley, Ferrel, and Polar cells, as well as the jet streams—fast-flowing air currents in the upper atmosphere that influence weather systems below. Understanding these global patterns helps explain why certain regions have characteristic weather and why weather systems typically move in predictable directions.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Atmospheric Stability</h3>
                <p className="text-gray-700">
                  Atmospheric stability refers to the atmosphere's tendency to resist or enhance vertical motion. In a stable atmosphere, air resists upward movement, suppressing cloud formation and precipitation. In an unstable atmosphere, air readily rises when lifted, potentially forming clouds and precipitation. Meteorologists assess stability using measurements of temperature and moisture at different altitudes, which helps them predict the potential for thunderstorm development and other weather events.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Teleconnections</h3>
                <p className="text-gray-700">
                  Teleconnections are recurring, large-scale patterns of pressure and circulation anomalies that span vast geographical areas. Examples include the El Niño-Southern Oscillation (ENSO), North Atlantic Oscillation (NAO), and Arctic Oscillation (AO). These patterns can influence weather conditions thousands of miles away from their source regions and often persist for weeks to months, affecting seasonal weather patterns and long-range forecasts.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Mesoscale Meteorology</h3>
                <p className="text-gray-700">
                  Mesoscale meteorology focuses on weather systems smaller than synoptic-scale systems (like fronts and large pressure systems) but larger than storm-scale features. These include phenomena like sea breezes, mountain-valley winds, squall lines, and mesoscale convective complexes. Understanding mesoscale processes is crucial for predicting localized weather events that might not be captured by broader-scale forecasts.
                </p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Climate Change and Weather</h3>
                <p className="text-gray-700">
                  Climate change affects weather patterns by altering the baseline conditions in which weather events occur. This can influence the frequency, intensity, duration, and timing of various weather phenomena. Understanding the relationship between climate change and weather helps contextualize current weather events and anticipate potential future trends in weather patterns.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700">
              These advanced topics represent just a fraction of the complex science of meteorology. As you explore these concepts further, you'll gain a deeper appreciation for the intricate systems that create our daily weather and the challenges involved in forecasting it accurately.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Additional Educational Resources</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              To further your weather education, Forecastlyy offers a variety of resources designed to help you understand and apply meteorological concepts:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Weather Glossary</h3>
                <p className="text-gray-700 mb-4">
                  Our comprehensive glossary defines hundreds of weather terms, from basic concepts to specialized terminology used by meteorologists.
                </p>
                <Button href="/glossary" variant="outline" size="sm">
                  Explore Glossary
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Weather Blog</h3>
                <p className="text-gray-700 mb-4">
                  Our regularly updated blog features in-depth articles on weather phenomena, forecasting techniques, seasonal weather patterns, and the science behind meteorology.
                </p>
                <Button href="/blog" variant="outline" size="sm">
                  Read Blog Articles
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Weather Safety Guides</h3>
                <p className="text-gray-700 mb-4">
                  Our safety guides provide detailed information on preparing for and responding to various weather hazards, from thunderstorms and tornadoes to winter storms and heat waves.
                </p>
                <Button href="/safety" variant="outline" size="sm">
                  View Safety Guides
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Interactive Tutorials</h3>
                <p className="text-gray-700 mb-4">
                  Our interactive tutorials walk you through weather concepts with visual aids, animations, and quizzes to reinforce your understanding.
                </p>
                <Button href="/tutorials" variant="outline" size="sm">
                  Start Learning
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Regional Weather Guides</h3>
                <p className="text-gray-700 mb-4">
                  Our regional guides explain characteristic weather patterns and phenomena for different geographical areas, helping you understand local weather dynamics.
                </p>
                <Button href="/regional-guides" variant="outline" size="sm">
                  Explore Regions
                </Button>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Weather FAQ</h3>
                <p className="text-gray-700 mb-4">
                  Our frequently asked questions section addresses common queries about weather phenomena, forecasting, and using Forecastlyy's tools effectively.
                </p>
                <Button href="/faq" variant="outline" size="sm">
                  View FAQs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Expand Your Weather Knowledge</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Access our complete suite of educational resources and weather tools to become more weather-literate.
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

export default EducationCenterPage;
