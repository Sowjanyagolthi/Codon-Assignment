import React from "react";

import CrewMetricsLogo from "../Icons/CrewMetricsLogo";

import "./CMHeader.css";

const CMHeader = () => {
  const renderHeaderNavbar = () => {
    return (
      <div className="cm-header-navbar">
        <ul className="cm-header-nav-links-list">
          <li className="cm-header-nav-link selected">Home</li>
          <li className="cm-header-nav-link">Product Features</li>
          <li className="cm-header-nav-link">Use cases</li>
        </ul>
        <button className="cm-header-nav-action-btn">Let's Talk</button>
      </div>
    );
  };

  const renderHeaderLogo = () => {
    return <CrewMetricsLogo />;
  };

  return (
    <div className="cm-header-container">
      {renderHeaderLogo()}
      {renderHeaderNavbar()}
    </div>
  );
};

export { CMHeader };
