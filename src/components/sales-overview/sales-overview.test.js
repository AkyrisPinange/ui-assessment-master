import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SalesOverview from './sales-overview';

// Mock sales data to pass to the SalesOverview component
const mockSalesData = {
  uploads: 10,
  successfulUploads: 2,
  linesAttempted: 100,
  linesSaved: 80,
  lastUploadDate: 1616161616161,
};

test('renders SalesOverview component with provided sales data', () => {
  // Render the SalesOverview component with the mock sales data
  render(<SalesOverview sales={mockSalesData} />);

  // Check if the Sales title is rendered
  expect(screen.getByText('Sales')).toBeInTheDocument();

  // Check if the uploads and linesAttempted are rendered in the subtext
  expect(screen.getByText(/10 uploads/i)).toBeInTheDocument();
  expect(screen.getByText(/100 lines/i)).toBeInTheDocument();

  // Check if the upload success rate is correctly calculated and rendered
  expect(screen.getByText('80.0%')).toBeInTheDocument();
  expect(screen.getByText('UPLOAD SUCCESS')).toBeInTheDocument();

  // Check if the lines saved rate is correctly calculated and rendered
  expect(screen.getByText('80.0%')).toBeInTheDocument();
  expect(screen.getByText('LINES SAVED')).toBeInTheDocument();
});
