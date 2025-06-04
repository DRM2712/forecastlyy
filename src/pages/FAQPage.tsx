import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/button/Button';

const FAQPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Forecastlyy?",
      answer: "Forecastlyy is a comprehensive weather platform designed to provide accurate, detailed, and easy-to-understand weather information. It was created by Dhairya Mistry, a dedicated developer, over two years through constant feedback and improvement, without the use of AI in its core development. Our platform features various tools like Weather Comparison, Weather Alerts, Air Quality Index, Weather Maps, and detailed Forecasts, all powered by the OpenWeatherMap API and enhanced by our custom algorithms."
    },
    {
      question: "How accurate are the forecasts on Forecastlyy?",
      answer: "We strive for the highest accuracy possible. Forecastlyy uses data from the reliable OpenWeatherMap API, which is then processed and refined by our proprietary algorithms developed in-house. While weather forecasting inherently involves some uncertainty, especially for longer-range predictions, our system is designed to provide highly reliable forecasts for short-term (1-3 days) and medium-term (3-7 days) periods. We recommend checking forecasts regularly for the latest updates."
    },
    {
      question: "What data sources does Forecastlyy use?",
      answer: "Our primary data source is the OpenWeatherMap API, which provides extensive global weather data. We supplement this with our custom-built algorithms that enhance localization, refine predictions, and integrate various data points for a more comprehensive view. Our AI chatbot feature utilizes separate, custom in-house built algorithms."
    },
    {
      question: "How often is the weather data updated?",
      answer: "Weather data on Forecastlyy is updated frequently. Real-time data like radar imagery and current conditions are updated every few minutes. Forecasts are typically updated multiple times per day as new model runs become available. Our system constantly monitors for new data releases to ensure you have the most current information."
    },
    {
      question: "Can I get weather alerts for my location?",
      answer: "Yes, Forecastlyy offers a customizable Weather Alerts tool. You can set up alerts for specific locations and weather conditions, such as severe thunderstorms, heavy rain, high winds, extreme temperatures, or poor air quality. You'll receive notifications based on your preferences to help you stay informed and safe."
    },
    {
      question: "What does the Air Quality Index (AQI) measure?",
      answer: "The Air Quality Index (AQI) measures the level of air pollution and its potential health effects. It typically considers pollutants like ground-level ozone, particulate matter (PM2.5 and PM10), carbon monoxide, sulfur dioxide, and nitrogen dioxide. The AQI is presented on a scale with corresponding color codes to help you quickly understand air quality levels and take necessary precautions."
    },
    {
      question: "How can I use the Weather Comparison tool?",
      answer: "The Weather Comparison tool allows you to compare weather conditions and forecasts for multiple locations side-by-side. This is useful for planning travel, comparing conditions between different areas, or understanding regional weather variations. Simply enter the locations you want to compare, and the tool will display key weather parameters for each."
    },
    {
      question: "Are there educational resources available on Forecastlyy?",
      answer: "Absolutely! We believe in empowering our users with knowledge. Our Weather Education Center offers a wealth of resources, including articles on weather basics, explanations of weather phenomena, guides to using weather tools, safety information, and a comprehensive weather glossary. We also have a blog with in-depth articles on various weather topics."
    },
    {
      question: "Who created Forecastlyy?",
      answer: "Forecastlyy was conceived, designed, and built entirely by Dhairya Mistry. It represents two years of dedicated work, driven by user feedback and a passion for creating a high-quality, reliable weather platform. Importantly, the core platform and its forecasting enhancements were developed without relying on generative AI, focusing instead on robust algorithms and meteorological principles."
    },
    {
      question: "Is Forecastlyy free to use?",
      answer: "Forecastlyy offers a range of free features providing essential weather information and forecasts. Some advanced features or premium content might be available through subscription plans in the future, but our core commitment is to provide valuable weather insights accessible to everyone."
    },
    {
      question: "How does the AI chatbot work?",
      answer: "Our AI chatbot uses custom, in-house built algorithms designed specifically for weather-related queries. It can answer questions about current conditions, forecasts, weather concepts, and help you navigate the platform's features. While the main platform development didn't use generative AI, this specific feature leverages our custom AI technology to provide helpful, conversational assistance."
    },
    {
      question: "How can I provide feedback or report an issue?",
      answer: "We highly value user feedback as it has been integral to Forecastlyy's development. You can typically find a 'Contact Us' or 'Feedback' link in the website footer or navigation menu. Please share your suggestions, report any issues you encounter, or ask questions. Your input helps us continuously improve the platform."
    }
  ];

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
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about Forecastlyy, weather forecasting, and our tools.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Common Questions</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none"
                  >
                    <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-6 w-6 text-blue-500 transition-transform duration-300 ${openFAQ === index ? 'transform rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="p-4 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Can't Find Your Answer?</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-8">
              If you have a question that isn't covered here, please don't hesitate to reach out. We value your feedback and are happy to help.
            </p>
            
            <Button href="/contact" size="lg" animated>
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore Forecastlyy?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Access our full suite of weather tools, forecasts, and educational resources.
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

export default FAQPage;
