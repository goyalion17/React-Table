import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Loader from './Loader.jsx';

describe('Loader', () => {
  it('exposes an accessible loading status', () => {
    render(<Loader />);
    expect(screen.getByRole('status', { name: /loading/i })).toBeInTheDocument();
  });
});
