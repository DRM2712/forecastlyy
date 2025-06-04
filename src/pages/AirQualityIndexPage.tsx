import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/button/Button';

const AirQualityIndexPage = () => {
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
                Air Quality Index Tool
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Monitor and understand air quality for better health and informed decisions
            </p>
          </div>
        </div>
      </section>

      {/* What is AQI Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is the Air Quality Index?</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              The Air Quality Index (AQI) is a standardized system used globally to communicate how polluted the air currently is or how polluted it is forecast to become. It translates complex air quality data into simple numbers and colors that help you understand the health implications of local air quality and how to protect your health.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              The AQI focuses on health effects you may experience within a few hours or days after breathing polluted air. Different countries may use slightly different AQI systems, but they all serve the same purpose: to help you make informed decisions about your outdoor activities and health protection based on air quality.
            </p>
            
            <div className="bg-blue-50 rounded-lg p-8 mb-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">How AQI is Calculated</h3>
              
              <p className="text-gray-700 mb-4">
                The AQI is calculated using measurements of several air pollutants, including:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li><strong>Ground-level ozone</strong> - Created by chemical reactions between oxides of nitrogen and volatile organic compounds in sunlight</li>
                <li><strong>Particulate matter (PM2.5 and PM10)</strong> - Tiny particles from smoke, dust, and other sources that can penetrate deep into the lungs and even the bloodstream</li>
                <li><strong>Carbon monoxide</strong> - A colorless, odorless gas produced by incomplete combustion</li>
                <li><strong>Sulfur dioxide</strong> - Produced from burning fossil fuels containing sulfur</li>
                <li><strong>Nitrogen dioxide</strong> - Primarily from vehicle emissions and power plants</li>
              </ul>
              
              <p className="text-gray-700">
                For each pollutant, a sub-index is calculated using concentration breakpoints. The highest sub-index value becomes the AQI value, and the associated pollutant becomes the "main pollutant." This approach ensures that the AQI reflects the pollutant with the most significant health impact at that time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AQI Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Understanding AQI Categories</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              The AQI scale is divided into six categories, each represented by a color and associated with different levels of health concern:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-r-lg">
                <h3 className="font-bold text-xl mb-1">Good (0-50, Green)</h3>
                <p className="text-gray-700">Air quality is considered satisfactory, and air pollution poses little or no risk.</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Recommendation:</strong> It's a great day to be active outside.</p>
              </div>
              
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h3 className="font-bold text-xl mb-1">Moderate (51-100, Yellow)</h3>
                <p className="text-gray-700">Air quality is acceptable; however, there may be some concern for a very small number of people who are unusually sensitive to air pollution.</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Recommendation:</strong> Unusually sensitive people should consider reducing prolonged or heavy exertion.</p>
              </div>
              
              <div className="bg-orange-100 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <h3 className="font-bold text-xl mb-1">Unhealthy for Sensitive Groups (101-150, Orange)</h3>
                <p className="text-gray-700">Members of sensitive groups may experience health effects. The general public is not likely to be affected.</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Recommendation:</strong> People with heart or lung disease, older adults, children, and teenagers should reduce prolonged or heavy exertion.</p>
              </div>
              
              <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-bold text-xl mb-1">Unhealthy (151-200, Red)</h3>
                <p className="text-gray-700">Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Recommendation:</strong> Sensitive groups should avoid prolonged or heavy exertion. Everyone else should reduce prolonged or heavy exertion.</p>
              </div>
              
              <div className="bg-purple-100 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <h3 className="font-bold text-xl mb-1">Very Unhealthy (201-300, Purple)</h3>
                <p className="text-gray-700">Health alert: everyone may experience more serious health effects.</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Recommendation:</strong> Sensitive groups should avoid all physical activity outdoors. Everyone else should avoid prolonged or heavy exertion.</p>
              </div>
              
              <div className="bg-red-200 border-l-4 border-red-800 p-4 rounded-r-lg">
                <h3 className="font-bold text-xl mb-1">Hazardous (301-500, Maroon)</h3>
                <p className="text-gray-700">Health warnings of emergency conditions. The entire population is more likely to be affected.</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Recommendation:</strong> Everyone should avoid all physical activity outdoors; sensitive groups should remain indoors and keep activity levels low.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Impacts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Health Impacts of Air Pollution</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Air pollution affects different people in different ways, depending on their health status, age, and level of exposure. Understanding these impacts can help you make informed decisions about your activities when air quality is compromised.
            </p>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">Short-Term Health Effects</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Respiratory System</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Irritation of the airways</li>
                    <li>Coughing or difficulty breathing</li>
                    <li>Decreased lung function</li>
                    <li>Aggravated asthma symptoms</li>
                    <li>Increased susceptibility to respiratory infections</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Cardiovascular System</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Irregular heartbeat</li>
                    <li>Increased blood pressure</li>
                    <li>Chest pain or discomfort</li>
                    <li>Reduced oxygen delivery to the heart and other organs</li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Other Systems</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Eye, nose, and throat irritation</li>
                    <li>Headaches and dizziness</li>
                    <li>Fatigue and reduced mental clarity</li>
                    <li>Nausea or other digestive discomfort</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-2">Sensitive Groups</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Children (developing lungs)</li>
                    <li>Older adults</li>
                    <li>People with asthma, COPD, or other respiratory conditions</li>
                    <li>People with heart disease</li>
                    <li>Pregnant women</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Long-Term Health Effects</h3>
            
            <p className="text-gray-700 mb-4">
              Prolonged exposure to air pollution can lead to more serious health problems, including:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Reduced lung function and development</li>
              <li>Development of chronic respiratory diseases</li>
              <li>Increased risk of heart disease and stroke</li>
              <li>Higher susceptibility to respiratory infections</li>
              <li>Potential links to neurological disorders</li>
              <li>Increased risk of certain cancers</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Did You Know?</h4>
              <p className="text-gray-700">
                According to the World Health Organization, air pollution is responsible for an estimated 7 million premature deaths worldwide every year. By monitoring air quality and taking appropriate precautions, you can reduce your exposure and protect your health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Protecting Yourself Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Protecting Yourself from Poor Air Quality</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              When air quality is compromised, there are several strategies you can employ to reduce your exposure and protect your health:
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Stay Informed
                </h3>
                <p className="text-gray-700">
                  Regularly check the AQI in your area using Forecastlyy's Air Quality Index tool. Set up alerts to notify you when air quality reaches concerning levels.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Adjust Your Activities
                </h3>
                <p className="text-gray-700">
                  When air quality is poor, consider rescheduling outdoor activities or moving them indoors. If you must be outside, try to limit strenuous activities and take more breaks.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                  Use Protective Equipment
                </h3>
                <p className="text-gray-700">
                  Consider wearing an N95 or KN95 mask when air quality is poor, especially if you have a respiratory condition. These masks can filter out many harmful particles when properly fitted.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  Create Clean Air Spaces
                </h3>
                <p className="text-gray-700">
                  Keep indoor air as clean as possible by keeping windows and doors closed during poor air quality events. Use air purifiers with HEPA filters if available, and avoid activities that create indoor pollution (smoking, burning candles, etc.).
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Stay Hydrated
                </h3>
                <p className="text-gray-700">
                  Drink plenty of water when exposed to air pollution. Staying hydrated helps your body remove toxins and can reduce some symptoms of exposure.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Pay Attention to Symptoms
                </h3>
                <p className="text-gray-700">
                  Be aware of how your body responds to air pollution. If you experience symptoms like unusual coughing, wheezing, or difficulty breathing, consider reducing your exposure and consult a healthcare provider if symptoms persist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Demo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Try Our Air Quality Index Tool</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-8">
              Monitor air quality in your area and make informed decisions to protect your health.
            </p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <p className="text-gray-600 mb-6">Interactive air quality monitoring tool would appear here</p>
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
          <h2 className="text-3xl font-bold mb-6">Breathe Easier with Knowledge</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Monitor air quality in your area and make informed decisions to protect your health.
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

export default AirQualityIndexPage;
