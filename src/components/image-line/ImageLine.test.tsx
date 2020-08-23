import React from 'react';
import { render } from '@testing-library/react';
import ImageLine from './ImageLine';

test('Renders the ImageLine component', () => {
    const { container } = render(<ImageLine />);
    expect(container).toBeInTheDocument();
});
