import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from '../store/Store'
import Page1 from '../pages/Page1';

describe('Page 1', () => {
    beforeEach(()=>{
      render(
        <Provider store={Store}>
        <Page1 />
        </Provider>
        )
    })
    it('Textbox available', () => {
        expect(screen.getByTestId('page_number')).toBeInTheDocument()
  });
  it('Go button available',()=>{
    expect(screen.getByTestId('go_button')).toBeInTheDocument()
  })
});