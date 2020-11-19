import React from 'react';
import ReactDOM from 'react-dom';
import MainView from '../component/MainView';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<MainView/>, div);
})
