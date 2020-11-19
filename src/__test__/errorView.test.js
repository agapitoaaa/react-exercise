import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorView from '../component/ErrorView';
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new Adapter() });

describe('ErrorView', () => {
    it('Displays Error text', () => {
        const wrapper = shallow(<ErrorView/>);
        const errorText = wrapper.find('.error-text');
        expect(errorText.text()).toBe("Error")
    })
})