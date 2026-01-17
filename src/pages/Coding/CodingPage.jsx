import React, { useState } from "react";
import "./CodingPage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar";
library.add(fas);

const CodingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const questions = [
    {
      summary: "The Library’s Fine Calculator Story: Alice manages the local library and wants a way to calculate...",
      testCount: 3,
      language: "Python",
    },
    {
      summary: "The Library’s Fine Calculator Story: Alice manages the local library and wants a way to calculate...",
      testCount: 3,
      language: "Python",
    },
    {
      summary: "The Library’s Fine Calculator Story: Alice manages the local library and wants a way to calculate...",
      testCount: 3,
      language: "Python",
    },
    {
      summary: "The Library’s Fine Calculator Story: Alice manages the local library and wants a way to calculate...",
      testCount: 3,
      language: "Python",
    },
    {
      summary: "The Library’s Fine Calculator Story: Alice manages the local library and wants a way to calculate...",
      testCount: 3,
      language: "Python",
    },
    {
      summary: "The Library’s Fine Calculator Story: Alice manages the local library and wants a way to calculate...",
      testCount: 3,
      language: "Python",
    },
  ];

  const filteredQuestions = questions.filter((q) =>
    q.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="coding-page">

        <Navbar/>

      {/* Title */}
      <h1 className="coding-title">
        <span className="coding-red">Coding</span>
        <span className="coding-blue"> Questions</span>
      </h1>

      {/* Search + Language Bar */}
      <div className="search-filter-row">
        <div className="search-bar">
          <input
            placeholder="Search ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FontAwesomeIcon icon={["fas", "magnifying-glass"]} className="search-icon" />
        </div>

        <div className="language-bar">
          <span>Language ...</span>
          <FontAwesomeIcon icon={["fas", "chevron-down"]} className="lang-icon" />
        </div>
      </div>

      {/* Table */}
      <div className="coding-table">
        <div className="coding-table-header">
          <div>Question Summary</div>
          <div>Test Case Count</div>
          <div>Language</div>
          <div>Actions</div>
        </div>

        {filteredQuestions.map((q, index) => (
          <div key={index} className="coding-row">
            <div className="summary-col">{q.summary}</div>
            <div className="test-col">{q.testCount}</div>
            <div className="lang-col">{q.language}</div>
            <div className="action-col">
              <button className="solve-btn">
                {/* < alt="" className="solve-icon" /> */}
                Solve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingPage;
