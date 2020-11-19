import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from '../component/Loader';
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new Adapter() });

describe('Loader', () => {
    it('Loader image displayed', () => {
        const wrapper = shallow(<Loader/>);
        expect(wrapper.containsMatchingElement(<img/>)).toBeTruthy();
    })
})