import styled from "styled-components";

const SalesContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const SalesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;

const SalesTitle = styled.h2`
  display: flex;
  align-items: center;
  margin: 0 10px;
  font-size: 1.2em;
`;

const SalesSubtext = styled.div`
  align-items: flex-start;
  margin: 0 20px 20px;
  color: #777;
  text-align: left;
`;

const SalesMetrics = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Metric = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
`;

const MetricValue = styled.div`
  display: flex;
  align-items: right;
  font-size: 2.5em;
  color: green;
`;

const MetricLabel = styled.div`
  display: flex;
  align-items: right;
  font-size: 1em;
  color: #555;
  margin-top: 10px;
`;

export {
  SalesContainer,
  SalesHeader,
  SalesSubtext,
  SalesTitle,
  SalesMetrics,
  Metric,
  MetricValue,
  MetricLabel,
};
