//CREATED BY: rodwell
'@vitest-environment jsdom'
import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom/vitest'
import CalenderForm from '../components/create-calendar-form';
import { createCalendar } from '../lib/actions';

describe('Create Calender Form Component', () => {


  const handleSubmit = vi.fn(event => event.preventDefault());
  render(<CalenderForm onSubmit={handleSubmit} />);

  test('renders the form and its fields', () => {

    expect(screen.getByText(/Calendar title/i)).toBeInTheDocument();
    expect(screen.getByText(/Calendar author/i)).toBeInTheDocument();
  });

  test('accepts input in text fields', () => {
    const titleInput = screen.getByPlaceholderText('Enter the title of your calendar');
    const authorInput = screen.getByPlaceholderText('Enter your name');

    fireEvent.change(titleInput, { target: { value: 'Marvels Calender' } });
    fireEvent.change(authorInput, { target: { value: 'Deadpool' } });

    expect(titleInput).toHaveValue('Marvels Calender');
    expect(authorInput).toHaveValue('Deadpool');
  });

  test('submits the form with valid data', () => {

    const titleInput = screen.getByPlaceholderText('Enter the title of your calendar');
    const authorInput = screen.getByPlaceholderText('Enter your name');
    const submitButton = screen.getByRole('button', { name: /Next/i });

    fireEvent.change(titleInput, { target: { value: 'Marvels Calender' } });
    fireEvent.change(authorInput, { target: { value: 'Deadpool' } });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalled();
  });

});
