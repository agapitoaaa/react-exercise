import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../component/Card';
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new Adapter() });

describe('Card', () => {
    it('Card details should show when image is clicked', () => {
        const details = {
            name: 'Rick',
            status: 'Alive',
            species: 'Hunan',
            gender: 'Male',
            origin: {
                name: 'Earth'
            }
        }
        const wrapper = shallow(<Card />);
        wrapper.setProps({
            details: details
        })
        const image = wrapper.find('div');
        image.simulate('click');
        const statusAndSpecies = wrapper.find('.status-species');
        const name = wrapper.find('.name-text');
        const gender = wrapper.find('.gender');
        const origin = wrapper.find('.origin');
        expect(name.text()).toBe(` ${details.name} `)
        expect(gender.text()).toBe(`Gender: ${details.gender}`)
        expect(origin.text()).toBe(`Origin: ${details.origin.name}`)
        expect(statusAndSpecies.text()).toBe(`${details.status.toUpperCase()} - ${details.species}`)
    })
})