import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainView from '../component/MainView';
import ListView from '../component/ListView';
import ErrorView from '../component/ErrorView';
import "@testing-library/jest-dom/extend-expect";

Enzyme.configure({ adapter: new Adapter() });

describe('MainView', () => {
    it('Will show Listview when error is false', () => {
        const details = {
            name: 'Rick',
            status: 'Alive',
            species: 'Hunan',
            gender: 'Male',
            origin: {
                name: 'Earth'
            }
        }
        const wrapper = shallow(<MainView/>);
        wrapper.setProps({
            details: details,
            err: false,
        })
        expect(wrapper.containsMatchingElement(<ListView />)).toBeTruthy()
    })

    it('Will show ErrorView when error is true', () => {
        const details = {
            name: 'Rick',
            status: 'Alive',
            species: 'Hunan',
            gender: 'Male',
            origin: {
                name: 'Earth'
            }
        }
        const wrapper = shallow(<MainView/>);
        wrapper.setProps({
            details: details,
            err: true,
        })
        expect(wrapper.containsMatchingElement(<ErrorView />)).toBeTruthy()
    })
})