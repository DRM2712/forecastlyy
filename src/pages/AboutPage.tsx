import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/button/Button';

const AboutPage = () => {
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
                About Forecastlyy
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The story behind your complete weather intelligence platform
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Forecastlyy is the result of one developer's passion for meteorology and commitment to creating accessible, accurate weather information for everyone. What began as a personal project has evolved into a comprehensive weather intelligence platform trusted by users worldwide.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-2xl font-bold mb-4">The One-Man Army Behind Forecastlyy</h3>
              <p className="text-gray-700 mb-4">
                Forecastlyy was created and is maintained entirely by <strong>Dhairya Mistry</strong>, a dedicated developer who has single-handedly built this platform over the span of 2 years through constant feedback and improvement. Unlike many modern platforms that rely heavily on artificial intelligence for development, Forecastlyy was created through genuine human expertise, dedication, and a deep understanding of both meteorology and user experience design.
              </p>
              <p className="text-gray-700">
                Dhairya's journey began with a simple question: why can't weather information be both comprehensive and accessible? Frustrated by existing weather services that were either too simplistic or overwhelmingly technical, he set out to create a platform that would bridge this gap. What started as a basic forecast tool has evolved through countless iterations, each refined based on real user feedback and practical applications.
              </p>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              The development of Forecastlyy represents thousands of hours of coding, research, and user testing—all conducted by a single developer committed to excellence. This unique approach has allowed for a cohesive vision and consistent quality across all aspects of the platform, from the accuracy of forecasts to the intuitive nature of the user interface.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              At Forecastlyy, our mission is to democratize weather intelligence by providing accurate, accessible, and actionable weather information to everyone. We believe that understanding weather patterns and forecasts should not require specialized knowledge or training—it should be available to anyone who needs it, presented in a way that's clear, comprehensive, and immediately useful.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                {
                  title: "Accuracy",
                  description: "Deliver the most accurate weather forecasts and data possible through continuous refinement of our algorithms and data sources"
                },
                {
                  title: "Accessibility",
                  description: "Make complex meteorological concepts accessible through clear explanations and educational resources"
                },
                {
                  title: "Empowerment",
                  description: "Empower users to make informed decisions based on reliable weather intelligence"
                },
                {
                  title: "Improvement",
                  description: "Continuously improve our platform based on user feedback and emerging technologies"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-blue-600">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Forecastlyy leverages the power of OpenWeatherMap API as our primary data source, ensuring access to comprehensive global weather data. However, what truly sets us apart is our custom in-house built algorithms that process, refine, and enhance this raw data to provide more accurate, localized forecasts and insights.
            </p>
            
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-lg text-white mb-8">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white rounded-full p-2 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Human-Powered Innovation</h3>
              <p className="mb-4">
                Unlike many modern platforms that rely heavily on artificial intelligence for development and content creation, Forecastlyy represents the power of human expertise and dedication. Every feature, every line of code, and every piece of content has been carefully crafted by our developer to ensure the highest quality and most intuitive user experience possible.
              </p>
              <p>
                This human-centered approach allows us to create a platform that truly understands and addresses the real needs of our users, rather than following algorithmic trends or automated development patterns.
              </p>
            </div>
            
            <p className="text-lg text-gray-700 mb-6">
              Our platform is built on modern web technologies, with a focus on performance, reliability, and accessibility. We've designed Forecastlyy to be responsive and intuitive across all devices, ensuring you can access critical weather information whether you're at home on your desktop or on the go with your mobile device.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
            <div className="w-20 h-1 bg-blue-500 mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              We understand that weather information is not just interesting—it's essential. From planning your daily commute to preparing for severe weather events, the accuracy and accessibility of weather data can have real impacts on your life and safety.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4">That's why we're committed to:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Continuous improvement based on user feedback and emerging technologies</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transparency about our data sources and methodologies</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Accessibility for users of all technical backgrounds and abilities</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Reliability during critical weather events when you need information most</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Educational resources that help you understand and interpret weather data</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-700 mb-8">
              Thank you for choosing Forecastlyy as your weather intelligence platform. We're honored to be part of your daily decision-making process and committed to earning your trust through accurate forecasts, intuitive tools, and exceptional service.
            </p>
            
            <p className="text-lg text-gray-700">
              Join us on this journey as we continue to refine and expand our platform, always with the goal of providing you with the most comprehensive, accessible, and reliable weather intelligence available.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Forecastlyy Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover why thousands of users trust our platform for their weather intelligence needs.
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

export default AboutPage;
