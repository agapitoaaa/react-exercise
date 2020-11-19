import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../component/Header';
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
    it('Displays header with text', () => {
        const wrapper = shallow(<Header/>);
        wrapper.setProps({
            headerText: 'Rick and Morty!!!'
        })
        const errorText = wrapper.find('.header-text');
        expect(errorText.text()).toBe("Rick and Morty!!!")
    })
})