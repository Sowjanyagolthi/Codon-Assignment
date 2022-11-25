import React from "react";

import { CMHeader } from "./CMHeader/CMHeader";
import {CMSection1} from "./CMSections/CMSection1"
import {CMSection2} from "./CMSections/CMSection2"
import {CMFeatures} from "./CMFeatures/CMFeatures"
import {CMFooter} from "./CMFooter/CMFooter"


import "./CrewMetrics.css";

function CrewMetrics() {
  return (
    <div className="crewMetricsContainer">
      <CMHeader />
      <CMSection1/>
      <CMSection2/>
      <CMFeatures/>
      <CMFooter/>
    </div>
  );
}

export default CrewMetrics;
