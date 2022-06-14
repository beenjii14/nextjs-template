import React from 'react';
import { render } from '@testing-library/react';
import Home from 'pages/index';

describe('<Home />', () => {
  it('should render Home Component', () => {
    const { getByTestId } = render(<Home />);

    const homeComponent = getByTestId('home-test-id');
    expect(homeComponent).toBeDefined();

    jest.clearAllMocks();
  });
});
