//CREATED BY: rodwell
'@vitest-environment jsdom'
import React from 'react'
import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event'
import Page from '../onboarding/page';
import MainPage from '../page';
import EditPage from '../edit/page';
import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

//integration test

describe('Onboarding Page', () => {
  render(
    <MemoryRouter>
      <MainPage />
      <Page />
      <EditPage />
    </MemoryRouter>
  );


  test('renders the page and onboarding component without crashing', () => {
    expect(screen.getByText(/Personalize your calendar 👩‍🎨/i)).toBeInTheDocument();
    expect(screen.getByText(/Back/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('onboarding-stepper')).toBeDefined();
  });

  test('navigates to "/" when Back link is clicked', async () => {
    await userEvent.click(screen.getByText(/Back/i));
    expect(screen.getByText(/Online advent calendars are awesome!/i)).toBeInTheDocument();

  });

  test('navigates to "/edit" when start link is clicked', async () => {
    await userEvent.click(screen.getByText(/start/i));
    expect(screen.getByText(/Set up your advent calendar/i)).toBeInTheDocument();
  });

  test('createCalendar component renders to edit page without crashing'), () => {
    expect(screen.getByText(/Calendar title/i)).toBeInTheDocument();
    expect(screen.getByText(/Calendar author/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancel/i)).toBeInTheDocument();
    expect(screen.getByText(/Next/i)).toBeInTheDocument();
  }
})
