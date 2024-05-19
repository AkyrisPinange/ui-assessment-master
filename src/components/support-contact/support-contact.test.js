import { render, screen } from '@testing-library/react';
import SupportContact from './support-contact'; // Adjust the import path as necessary

// Mock contact data
const mockContactData = {
  name: 'Jane Doe',
  email: 'jane.do@example.com',
  phone: '020 3362 4208',
};

test('renders SupportContact component with provided contact data', () => {
  render(<SupportContact contact={mockContactData} />);

  // Check if the contact name is rendered
  expect(screen.getByText(mockContactData.name)).toBeInTheDocument();


});
