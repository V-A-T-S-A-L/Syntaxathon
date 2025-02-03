import SpotlightCard from './SpotlightCard';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCloud, FaMoneyBillAlt, FaChartLine, FaHandshake } from 'react-icons/fa';

function GetStartedTodaySection() {
  const items = [
    {
      title: "Income / Weather Prediction",
      description:
        "AI-powered forecasts for weather conditions and crop yield, helping farmers estimate income and plan efficiently.",
      link: "predict-income&weather",
      icon: <FaCloud className="text-4xl text-green-500 animate-pulse" />,
    },
    {
      title: "Agricultural Needs Prediction",
      description:
        "Predicts fertilizer, water, seed, pesticide, and nutrient requirements for your crops based on land size, crop type, etc.",
      link: "agricultural-needs",
      icon: <FaMoneyBillAlt className="text-4xl text-green-500 animate-bounce" />,
    },
    {
      title: "Crop Price Forecasting",
      description: "Predict the price of crops based on the current market trends and seasonal effects to estimate profits effectively.",
      link: "crop-price-forecast",
      icon: <FaChartLine className="text-4xl text-green-500 animate-pulse" />,
    },
    {
      title: "Loan Recommendation",
      description:
        "Receive tailored loan recommendations based on your financial health and business needs.",
      link: "financial-advisory",
      icon: <FaHandshake className="text-4xl text-green-500 animate-tada" />,
    },
  ];

  return (
    <section
      id="get-started"
      className="py-16 bg-gradient-to-b from-[#1b3a28] to-[#0f2b1e] text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeIn">
          Get Started Today
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard
                className="bg-gradient-to-t from-[#1b3a28] to-[#0f2b1e] p-6 shadow-lg rounded-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-white/20 hover:bg-white/30"
                spotlightColor="rgba(0, 255, 0, 0.4)"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 rounded-full bg-green-100">
                    {item.icon}
                  </div>
                  <Link to={item.link}>
                    <FaArrowRight className="text-2xl text-green-500 hover:text-green-700 transition duration-300" />
                  </Link>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white mb-4 text-sm">{item.description}</p>
                <Link to={item.link}>
                  <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300 transform hover:scale-110">
                    Learn More
                  </button>
                </Link>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GetStartedTodaySection;
