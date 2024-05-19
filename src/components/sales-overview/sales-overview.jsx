// sales-overview.jsx
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import {
  SalesContainer,
  SalesHeader,
  SalesSubtext,
  SalesTitle,
  SalesMetrics,
  Metric,
  MetricValue,
  MetricLabel,
} from "./sales-overview.styles"; // Adjust the import path based on your project structure

const SalesOverview = ({ sales }) => {
  const uploadSuccessRate =
    (sales.successfulUploads / sales.uploads) * 100 || 0;
  const linesSavedRate = (sales.linesSaved / sales.linesAttempted) * 100 || 0;

  return (
    <SalesContainer>
      <SalesHeader>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon icon={faCloudUploadAlt} size="lg" color="#3eb0eb"/>
          <SalesTitle>Sales</SalesTitle>
        </div>
        <FontAwesomeIcon icon={faInfoCircle} color="#aaa" />
      </SalesHeader>
      <SalesSubtext>
        You had <strong>{sales.uploads} uploads</strong> and{" "}
        <strong>{sales.linesAttempted} lines</strong> added.
      </SalesSubtext>
      <SalesMetrics>
        <Metric>
          <MetricValue>{uploadSuccessRate.toFixed(1)}%</MetricValue>
          <MetricLabel>UPLOAD SUCCESS</MetricLabel>
        </Metric>
        <Metric>
          <MetricValue>{linesSavedRate.toFixed(1)}%</MetricValue>
          <MetricLabel>LINES SAVED</MetricLabel>
        </Metric>
      </SalesMetrics>
    </SalesContainer>
  );
};

SalesOverview.propTypes = {
  sales: PropTypes.shape({
    uploads: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
    lastUploadDate: PropTypes.number.isRequired,
  }).isRequired,
};

export default SalesOverview;
