/*
<<<<<<< HEAD
👥 Team Members:
👤 Igal Khalfin    313190811
👤 Itay Halaf      205585193
👤 Tamara Slotzki  318875846
=======
Team Members:
Igal Khalfin    313190811
Itay Halaf      205585193
Tamara Slouzky  318875846
>>>>>>> 459bf6253ebd4d8d42c6aa50d634d643251e112f
*/

// Import necessary modules and components for testing
import { render, screen } from '@testing-library/react';
import App from './App';

// Define a test case to check if 'learn react' link is rendered
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
