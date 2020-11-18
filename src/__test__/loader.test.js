import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../component/Loader';
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<Loader/>, div);
})
