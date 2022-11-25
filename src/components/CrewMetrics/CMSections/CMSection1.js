import React from "react";
import CMSections from "./CMSections.css";

const CMSection1 = () => {
  const cMtemplateLogo2 = () => {
    return <div className="Browsertemplate2"></div>;
  };

  const cmSection1Text = () => {
    return (
      <div class="cn-section1-text">
        <p className="BoldText">Keep your team Engaged with</p>
        <p className="learning">Learning...</p>
      </div>
    );
  };

  const cmTemplateLogo1 = () => {
    return (
      <div>
        <div className="template1-image">
          Hello hjfjefhjefejhg kjfhefj efh ewjkf efh ewf ejhf JEW FEF HKE F E
          KWEF IF kew f gkewf ifF IFEW
        </div>
      </div>
    );
  };

  return (
    <div className="cm-section1-container">
      {cmTemplateLogo1()}
      {cmSection1Text()}
      {cMtemplateLogo2}
    </div>
  );
};

export { CMSection1 };
