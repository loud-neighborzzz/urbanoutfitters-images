import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<App />)
   })
  
   it('should have 2 buttons', () => {
    const wrapper = shallow(<App />)

    const button = wrapper.find('button')

    expect(button.length).toBe(2)
  })
  
  it('should have 4 image tags', () => {
    const wrapper = shallow(<App />)

    const button = wrapper.find('img')

    expect(button.length).toBe(4)
    
  })
});
