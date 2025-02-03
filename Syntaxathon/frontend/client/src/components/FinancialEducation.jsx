import { useState } from "react"

const educationContent = [
  {
    title: "Budgeting for Farmers",
    content:
      "Learn how to create and maintain a budget specifically tailored for agricultural businesses. This guide covers income forecasting, expense tracking, and cash flow management.",
    videoUrl: "https://www.youtube.com/embed/tAnq0Ii-5BM",
  },
  {
    title: "Understanding Agricultural Loans",
    content:
      "Explore different types of agricultural loans, their terms, and how to choose the right one for your farming needs. This module also covers loan application processes and tips for approval.",
    videoUrl: "https://www.youtube.com/embed/JEx6j9mo6Js",
  },
  {
    title: "Risk Management in Farming",
    content:
      "Discover strategies to mitigate financial risks in farming, including crop insurance, diversification, and hedging. Learn how to protect your farm business from unpredictable events.",
    videoUrl: "https://www.youtube.com/embed/r27foEf5vb0",
  },
  {
    title: "Sustainable Farming Practices",
    content:
      "Explore sustainable farming techniques that can improve your yield while reducing costs. This guide covers topics like crop rotation, water conservation, and organic farming methods.",
    videoUrl: "https://www.youtube.com/embed/y002Fkb9iaQ",
  },
]

const FinancialEducation = () => {
  const [activeModule, setActiveModule] = useState(0)

  return (
    <div className="financial-education">
      <h2>Financial Education for Farmers</h2>
      <div className="education-container">
        <div className="module-list">
          {educationContent.map((module, index) => (
            <button
              key={index}
              onClick={() => setActiveModule(index)}
              className={activeModule === index ? "active" : ""}
            >
              {module.title}
            </button>
          ))}
        </div>
        <div className="module-content">
          <h3>{educationContent[activeModule].title}</h3>
          <p>{educationContent[activeModule].content}</p>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={educationContent[activeModule].videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <style jsx>{`
        .financial-education {
          max-width: 900px;
          margin: 0 auto;
        }
        h2 {
          color: #2e7d32;
          margin-bottom: 20px;
          text-align: center;
        }
        .education-container {
          display: flex;
          gap: 20px;
        }
        .module-list {
          width: 30%;
        }
        .module-list button {
          display: block;
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          background-color: #e8f5e9;
          color: #2e7d32;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-align: left;
          transition: all 0.3s ease;
        }
        .module-list button.active {
          background-color: #2e7d32;
          color: white;
        }
        .module-content {
          width: 70%;
        }
        .module-content h3 {
          color: #2e7d32;
          margin-bottom: 10px;
        }
        .module-content p {
          margin-bottom: 20px;
        }
        .video-container {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          height: 0;
          overflow: hidden;
        }
        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  )
}

export default FinancialEducation

