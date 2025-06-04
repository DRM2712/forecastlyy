import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/button/Button';

const WeatherAlertsPage = () => {
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
                Weather Alerts Tool
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay informed and prepared with timely weather alerts and safety information
            </p>
          </div>
        </div>
      </section>

      {/* Types of Weather Alerts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Types of Weather Alerts Explained</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Weather alerts are critical notifications designed to inform you about potentially hazardous weather conditions that may affect your safety, property, or plans. Understanding the different types of alerts and their severity levels is essential for appropriate response and preparation.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-8 mb-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Watch vs. Warning vs. Advisory</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-yellow-400">
                  <h4 className="font-semibold text-lg mb-2">Weather Watch</h4>
                  <p className="text-gray-700">
                    A watch indicates that conditions are favorable for the development of a specific weather hazard in the watch area. Watches are typically issued hours to days in advance of the anticipated event. While the hazardous weather is not yet occurring, a watch means you should prepare and stay informed as conditions may change rapidly.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-red-500">
                  <h4 className="font-semibold text-lg mb-2">Weather Warning</h4>
                  <p className="text-gray-700">
                    A warning is more urgent than a watch and indicates that hazardous weather is imminent or already occurring. Warnings require immediate action to protect life and property. They are typically issued when forecasters have high confidence that significant weather impacts will occur in the warned area.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-orange-400">
                  <h4 className="font-semibold text-lg mb-2">Weather Advisory</h4>
                  <p className="text-gray-700">
                    An advisory is issued for less severe weather conditions that may cause significant inconvenience and, if caution is not exercised, could lead to situations that may threaten life or property. Advisories indicate weather conditions that might be hazardous but do not meet warning criteria.
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Common Weather Alert Types</h3>
            
            <div className="space-y-6 mb-8">
              {[
                {
                  title: "Severe Thunderstorm",
                  description: "These alerts are issued when storms capable of producing damaging winds (58+ mph), large hail (1+ inch in diameter), or tornadoes are expected. Severe thunderstorms can also produce heavy rainfall leading to flash flooding.",
                  color: "bg-purple-100"
                },
                {
                  title: "Tornado",
                  description: "Tornado watches indicate conditions are favorable for tornado development, while warnings mean a tornado has been spotted or indicated by radar. Tornado warnings require immediate shelter.",
                  color: "bg-red-100"
                },
                {
                  title: "Flash Flood",
                  description: "These alerts indicate rapid flooding is occurring or imminent, often due to heavy rainfall over a short period. Flash floods can be particularly dangerous as they can develop quickly with little warning.",
                  color: "bg-blue-100"
                },
                {
                  title: "Winter Storm",
                  description: "These alerts cover various winter precipitation types including snow, sleet, and freezing rain that may impact travel and safety. Winter storm warnings indicate significant accumulations expected.",
                  color: "bg-cyan-100"
                },
                {
                  title: "Heat",
                  description: "Excessive heat watches and warnings are issued when dangerously high temperatures are expected, which can pose serious health risks, especially to vulnerable populations.",
                  color: "bg-orange-100"
                },
                {
                  title: "Hurricane/Tropical Storm",
                  description: "These alerts provide information about tropical cyclones that may impact coastal and inland areas with high winds, storm surge, and heavy rainfall.",
                  color: "bg-yellow-100"
                }
              ].map((alert, index) => (
                <div key={index} className={`${alert.color} p-6 rounded-lg`}>
                  <h4 className="font-semibold text-lg mb-2">{alert.title}</h4>
                  <p className="text-gray-700">{alert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Prepare for Severe Weather */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How to Prepare for Severe Weather</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Preparation is key to weathering severe conditions safely. Here's how to prepare for different types of severe weather:
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">General Preparation</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Create an Emergency Plan</h4>
                    <p className="text-gray-700">
                      Develop and practice a family emergency plan that includes meeting locations, communication strategies, and evacuation routes.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Emergency Kit</h4>
                    <p className="text-gray-700">
                      Maintain a basic emergency kit with water, food, first aid supplies, flashlights, and other essentials.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">Basic Emergency Kit Checklist:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Water (one gallon per person per day for at least three days)</li>
                  <li>Non-perishable food (at least a three-day supply)</li>
                  <li>Battery-powered or hand-crank radio</li>
                  <li>Flashlight and extra batteries</li>
                  <li>First aid kit</li>
                  <li>Whistle to signal for help</li>
                  <li>Dust mask, plastic sheeting, and duct tape for sheltering in place</li>
                  <li>Moist towelettes, garbage bags, and plastic ties for personal sanitation</li>
                  <li>Wrench or pliers to turn off utilities</li>
                  <li>Manual can opener for food</li>
                  <li>Local maps</li>
                  <li>Cell phone with chargers and a backup battery</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Specific Weather Preparations</h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-purple-600">Thunderstorms and Tornadoes</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Identify the safest location in your home (typically a basement, storm cellar, or interior room on the lowest floor)</li>
                  <li>Secure outdoor objects that could become projectiles</li>
                  <li>Have a helmet, sturdy shoes, and whistle in your shelter area</li>
                  <li>If driving, never try to outrun a tornado; seek shelter in a sturdy building</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">Flooding</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Know your area's flood risk and evacuation routes</li>
                  <li>Consider flood insurance if you're in a flood-prone area</li>
                  <li>Elevate electrical systems and appliances if your property is at risk</li>
                  <li>Never drive through flooded roadways – turn around, don't drown</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-cyan-600">Winter Storms</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Insulate your home properly and know how to prevent pipes from freezing</li>
                  <li>Have sufficient heating fuel and alternative heat sources</li>
                  <li>Keep winter emergency supplies in your vehicle</li>
                  <li>Dress in layers when going outside</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-orange-600">Heat Waves</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Stay hydrated and avoid alcohol and caffeine</li>
                  <li>Limit outdoor activities during peak heat hours</li>
                  <li>Use air conditioning or seek public cooling centers</li>
                  <li>Check on vulnerable neighbors, especially the elderly</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-lg mb-2 text-yellow-600">Hurricanes</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Know your evacuation zone and route</li>
                  <li>Prepare your home by covering windows and securing loose outdoor items</li>
                  <li>Have supplies for at least 7 days</li>
                  <li>Consider flood insurance well in advance (there's typically a 30-day waiting period)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Alert Severity Levels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Understanding Alert Severity Levels</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Weather alerts come with different severity levels to help you gauge the appropriate response:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Extreme</h3>
                <p>
                  Life-threatening situation requiring immediate action. These alerts indicate the highest level of danger with significant risk to life and property.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Severe</h3>
                <p>
                  Dangerous conditions that pose serious risks. Immediate precautions should be taken to ensure safety.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Moderate</h3>
                <p>
                  Potentially hazardous conditions that warrant caution and preparation, though the threat level is not as high as severe or extreme.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">Minor</h3>
                <p>
                  Conditions may cause inconvenience or minor problems but are not expected to be life-threatening if proper precautions are taken.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              The severity level is determined by meteorologists based on the potential impact of the weather event, considering factors such as:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
              <li>Intensity of the weather phenomenon</li>
              <li>Duration of the event</li>
              <li>Population density in the affected area</li>
              <li>Time of day (daytime vs. nighttime events)</li>
              <li>Existing conditions (e.g., saturated ground before heavy rain)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tool Demo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Try Our Weather Alerts Tool</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-8">
              Stay informed and prepared with customized weather alerts for your location.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <p className="text-gray-600 mb-6">Interactive alerts tool would appear here</p>
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
          <h2 className="text-3xl font-bold mb-6">Stay Ahead of Severe Weather</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get timely, accurate alerts customized to your location and needs.
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

export default WeatherAlertsPage;
