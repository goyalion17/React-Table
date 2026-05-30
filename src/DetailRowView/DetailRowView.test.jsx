import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DetailRowView from './DetailRowView.jsx';

const samplePerson = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'sincere@april.biz',
  phone: '1-770-736-8031',
  website: 'hildegard.org',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
  },
  company: { name: 'Romaguera-Crona' },
};

describe('DetailRowView', () => {
  it('renders the selected user details', () => {
    render(<DetailRowView person={samplePerson} />);

    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
    expect(screen.getByText('(@Bret)')).toBeInTheDocument();
    expect(screen.getByText('sincere@april.biz')).toBeInTheDocument();
    expect(screen.getByText('Kulas Light, Apt. 556')).toBeInTheDocument();
    expect(screen.getByText('Gwenborough')).toBeInTheDocument();
    expect(screen.getByText('Romaguera-Crona')).toBeInTheDocument();
  });
});
