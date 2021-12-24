import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithWrappers } from '~/react-testing-library-helpers';
import UncachedChart from './UncachedChart';

const renderComponent = () => renderWithWrappers(<UncachedChart />);

describe('UncachedChart', () => {
  it('renders and exists in the document', async () => {
    renderComponent();
    expect(await screen.findByTestId('uncached-chart')).toBeInTheDocument();
  });
});
