import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AccountOverview from './account-overview';

// Mocking the child components
jest.mock('../support-contact/support-contact', () => () => <div>Mocked SupportContact</div>);
jest.mock('../sales-overview/sales-overview', () => () => <div>Mocked SalesOverview</div>);

const mockData = {
  supportContact: {
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  salesOverview: {
    uploads: 10,
    successfulUploads: 8,
    linesAttempted: 100,
    linesSaved: 80,
    lastUploadDate: 1616161616161,
  },
};

test('renders AccountOverview component with provided data', () => {
  render(<AccountOverview data={mockData} />);

  // Check if the header is rendered
  expect(screen.getByText('Account Overview')).toBeInTheDocument();

  // Check if the SupportContact component is rendered
  expect(screen.getByText('Mocked SupportContact')).toBeInTheDocument();

  // Check if the SalesOverview component is rendered
  expect(screen.getByText('Mocked SalesOverview')).toBeInTheDocument();
});
