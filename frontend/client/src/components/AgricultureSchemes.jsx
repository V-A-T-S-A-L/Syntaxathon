import { useState } from "react"

const schemes = [
    {
        name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
        description: "Income support of ₹6000 per year to all land holding farmer families.",
        link: "https://pmkisan.gov.in/",
        category: "Income Support",
    },
    {
        name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        description: "Crop insurance scheme to provide financial support to farmers suffering crop loss/damage.",
        link: "https://pmfby.gov.in/",
        category: "Insurance",
    },
    {
        name: "Kisan Credit Card (KCC)",
        description: "Provides farmers with timely access to credit.",
        link: "https://www.nabard.org/content1.aspx?id=502&catid=23&mid=530",
        category: "Credit",
    },
    {
        name: "Paramparagat Krishi Vikas Yojana (PKVY)",
        description: "Promotes organic farming practices.",
        link: "https://pgsindia-ncof.gov.in/pkvy/index.aspx",
        category: "Organic Farming",
    },
    {
        name: "National Mission for Sustainable Agriculture (NMSA)",
        description: "Promotes sustainable agriculture practices through climate change adaptation measures.",
        link: "https://nmsa.dac.gov.in/",
        category: "Sustainable Agriculture",
    },
]

const AgricultureSchemes = () => {
    const [filter, setFilter] = useState("All")

    const categories = ["All", ...new Set(schemes.map((scheme) => scheme.category))]

    const filteredSchemes = filter === "All" ? schemes : schemes.filter((scheme) => scheme.category === filter)

    return (
        <div className="agriculture-schemes min-h-96">
            <h2>Agriculture Schemes</h2>
            <div className="filter-buttons">
                {categories.map((category) => (
                    <button key={category} onClick={() => setFilter(category)} className={filter === category ? "active" : ""}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="schemes-list">
                {filteredSchemes.map((scheme, index) => (
                    <div key={index} className="scheme-item">
                        <h3>{scheme.name}</h3>
                        <p>{scheme.description}</p>
                        <a href={scheme.link} target="_blank" rel="noopener noreferrer">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
            <style jsx>{`
        .agriculture-schemes {
          max-width: 800px;
          margin: 0 auto;
        }
        h2 {
          color: #2e7d32;
          margin-bottom: 20px;
          text-align: center;
        }
        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .filter-buttons button {
          padding: 8px 12px;
          background-color: #e8f5e9;
          color: #2e7d32;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .filter-buttons button.active {
          background-color: #2e7d32;
          color: white;
        }
        .schemes-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .scheme-item {
          background-color: #f1f8e9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .scheme-item p {
          flex-grow: 1; /* Pushes the button to the bottom */
        }
        .scheme-item h3 {
          color: #2e7d32;
          margin-bottom: 10px;
        }
        .scheme-item p {
          margin-bottom: 15px;
        }
        .scheme-item a {
          display: inline-block;
          padding: 8px 12px;
          background-color: #4caf50;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s;
        }
        .scheme-item a:hover {
          background-color: #45a049;
        }
        .category-tag {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 4px 8px;
          background-color: #2e7d32;
          color: white;
          font-size: 0.8em;
          border-radius: 12px;
        }
      `}</style>
        </div>
    )
}

export default AgricultureSchemes

