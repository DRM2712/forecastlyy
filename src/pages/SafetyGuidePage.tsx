import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/button/Button';

const SafetyGuidePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-red-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div 
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Weather Safety Guide
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Essential information to stay safe during various weather conditions
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Be Prepared, Stay Safe</h2>
            <div className="w-20 h-1 bg-red-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Weather can change rapidly and sometimes pose significant risks. Being prepared and knowing how to respond to different weather hazards is crucial for protecting yourself, your family, and your property. This guide provides essential safety information for various weather conditions, drawing on expert recommendations and best practices.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              Forecastlyy is committed not only to providing accurate forecasts but also to promoting weather safety awareness. Use this guide in conjunction with our Weather Alerts tool and real-time forecasts to make informed safety decisions.
            </p>
            
            <div className="bg-red-50 rounded-lg p-8 mb-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">General Weather Safety Tips</h3>
              
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Stay Informed</strong>: Regularly check weather forecasts and alerts from reliable sources like Forecastlyy. Have multiple ways to receive warnings (weather radio, mobile apps, local news).</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Have a Plan</strong>: Develop emergency plans for your home, workplace, and school. Know evacuation routes and designated safe locations for different hazards.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <span><strong>Build an Emergency Kit</strong>: Prepare a kit with essentials like water, non-perishable food, flashlight, batteries, first-aid supplies, medications, and important documents.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span><strong>Communicate</strong>: Establish communication plans with family and friends. Designate an out-of-town contact person.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Know Your Risks</strong>: Understand the specific weather hazards common to your area and season.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Hazard Sections */}      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Safety for Specific Weather Hazards</h2>
            <div className="w-20 h-1 bg-red-500 mb-8"></div>

            {/* Thunderstorms & Lightning */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Thunderstorms & Lightning
              </h3>
              <p className="text-gray-700 mb-4">
                All thunderstorms produce lightning, which can be deadly. Remember the phrase: "When thunder roars, go indoors!"
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Seek shelter immediately in a substantial building or a hard-top vehicle.</li>
                <li>Avoid open fields, hilltops, tall isolated trees, and bodies of water.</li>
                <li>Do not use corded phones, electrical appliances, or plumbing during a thunderstorm.</li>
                <li>Wait at least 30 minutes after the last clap of thunder before resuming outdoor activities.</li>
                <li>If caught outdoors with no shelter, crouch low to the ground, minimize contact with the ground, and avoid tall objects.</li>
              </ul>
            </div>

            {/* Tornadoes */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-red-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> {/* Placeholder icon */}
                </svg>
                Tornadoes
              </h3>
              <p className="text-gray-700 mb-4">
                Tornadoes are violently rotating columns of air extending from a thunderstorm to the ground. Know the signs: dark, greenish sky; large hail; a loud roar like a freight train.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Go to a pre-designated safe room, basement, storm cellar, or the lowest level of the building.</li>
                <li>If no basement, go to an interior room on the lowest floor (closet, hallway) away from windows.</li>
                <li>Get under a sturdy piece of furniture and cover your head and neck with your arms.</li>
                <li>If in a vehicle, mobile home, or outdoors, get to the nearest substantial shelter immediately. Do not try to outrun a tornado in a vehicle.</li>
                <li>If no shelter is available, lie flat in a nearby ditch or depression and cover your head.</li>
              </ul>
            </div>

            {/* Flooding */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /> {/* Placeholder icon */}
                </svg>
                Flooding
              </h3>
              <p className="text-gray-700 mb-4">
                Flooding is a major cause of weather-related deaths. Remember: "Turn Around, Don't Drown!"
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Never drive or walk through floodwaters. Just six inches of moving water can knock you down, and one foot can sweep your vehicle away.</li>
                <li>Be aware of streams, drainage channels, canyons, and other areas known to flood suddenly.</li>
                <li>If evacuated, return home only when authorities say it is safe.</li>
                <li>Avoid contact with floodwater; it may be contaminated with sewage, chemicals, or debris.</li>
                <li>Check for structural damage before entering your home after a flood.</li>
              </ul>
            </div>

            {/* Hurricanes */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-purple-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /> {/* Placeholder icon */}
                </svg>
                Hurricanes
              </h3>
              <p className="text-gray-700 mb-4">
                Hurricanes bring high winds, heavy rain, storm surge, and tornadoes. Preparation is key.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Know your evacuation zone and routes. Follow evacuation orders immediately.</li>
                <li>Secure your home: board up windows, bring in outdoor furniture, trim trees.</li>
                <li>Have enough supplies (food, water, medications) for several days.</li>
                <li>During the storm, stay indoors away from windows and doors.</li>
                <li>Be aware that the calm "eye" is deceptive; dangerous conditions will return.</li>
                <li>Avoid downed power lines and flooded areas after the storm.</li>
              </ul>
            </div>

            {/* Winter Storms */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-indigo-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /> {/* Placeholder icon */}
                </svg>
                Winter Storms & Extreme Cold
              </h3>
              <p className="text-gray-700 mb-4">
                Heavy snow, ice, and extreme cold can be dangerous. Stay warm and safe.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Stay indoors during severe winter weather.</li>
                <li>Dress in layers, wear hats and gloves to prevent heat loss.</li>
                <li>Watch for signs of frostbite (numbness, white or grayish skin) and hypothermia (shivering, confusion, drowsiness).</li>
                <li>Keep emergency supplies in your vehicle (blankets, flashlight, food, water, jumper cables).</li>
                <li>Avoid overexertion when shoveling snow.</li>
                <li>Ensure proper ventilation when using alternative heating sources to prevent carbon monoxide poisoning.</li>
                <li>Check on elderly neighbors and family members.</li>
              </ul>
            </div>

            {/* Extreme Heat */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-orange-600 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Extreme Heat
              </h3>
              <p className="text-gray-700 mb-4">
                Heat can be dangerous, leading to heat exhaustion or heat stroke. Stay cool and hydrated.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Stay in air-conditioned buildings as much as possible.</li>
                <li>Drink plenty of water, even if you don't feel thirsty. Avoid alcohol and caffeine.</li>
                <li>Wear lightweight, light-colored, loose-fitting clothing.</li>
                <li>Limit outdoor activity, especially during the hottest part of the day (usually mid-afternoon).</li>
                <li>Never leave children or pets unattended in vehicles.</li>
                <li>Watch for signs of heat exhaustion (heavy sweating, weakness, dizziness, nausea) and heat stroke (high body temperature, confusion, loss of consciousness - a medical emergency).</li>
                <li>Check on vulnerable individuals (elderly, infants, those with chronic illnesses).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Preparedness Checklist Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Weather Preparedness Checklist</h2>
            <div className="w-20 h-1 bg-red-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Use this checklist to ensure you are prepared for various weather emergencies:
            </p>
            
            <div className="bg-red-50 rounded-lg p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <div className="flex items-center">
                  <input type="checkbox" id="chk1" className="form-checkbox h-5 w-5 text-red-600 rounded mr-3" />
                  <label htmlFor="chk1" className="text-gray-700">Know your local weather risks</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="chk2" className="form-checkbox h-5 w-5 text-red-600 rounded mr-3" />
                  <label htmlFor="chk2" className="text-gray-700">Have multiple ways to receive warnings</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="chk3" className="form-checkbox h-5 w-5 text-red-600 rounded mr-3" />
                  <label htmlFor="chk3" className="text-gray-700">Develop a family emergency plan</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="chk4" className="form-checkbox h-5 w-5 text-red-600 rounded mr-3" />
                  <label htmlFor="chk4" className="text-gray-700">Identify safe locations in your home</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="chk5" className="form-checkbox h-5 w-5 text-red-600 rounded mr-3" />
                  <label htmlFor="chk5" className="text-gray-700">Know evacuation routes</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="chk6" className="form-checkbox h-5 w-5 text-red-600 rounded mr-3" />
                  <label htmlFor="chk6" className="text-gray-700">Build an emergency supply kit</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="chk7" className="form-checkbox h-5 w-5 text-red-600 rounded mr-3" />
                  <label htmlFor="chk7" className="text-gray-700">Include medications and special needs items</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="chk8" className="form-checkbox h-5 w-5 text-red-600 rounded mr-3" />
                  <label htmlFor="chk8" className="text-gray-700">Have copies of important documents</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="chk9" className="form-checkbox h-5 w-5 text-red-600 rounded mr-3" />
                  <label htmlFor="chk9" className="text-gray-700">Establish a communication plan</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="chk10" className="form-checkbox h-5 w-5 text-red-600 rounded mr-3" />
                  <label htmlFor="chk10" className="text-gray-700">Plan for pets</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="chk11" className="form-checkbox h-5 w-5 text-red-600 rounded mr-3" />
                  <label htmlFor="chk11" className="text-gray-700">Learn basic first aid</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="chk12" className="form-checkbox h-5 w-5 text-red-600 rounded mr-3" />
                  <label htmlFor="chk12" className="text-gray-700">Review and update plans/kits regularly</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Informed, Stay Safe</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Use Forecastlyy's tools and alerts to stay ahead of the weather and make informed safety decisions.
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

export default SafetyGuidePage;
