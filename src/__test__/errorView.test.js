import React from 'react';
import ReactDOM from 'react-dom';
import ErrorView from '../component/ErrorView';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<ErrorView/>, div);
})
