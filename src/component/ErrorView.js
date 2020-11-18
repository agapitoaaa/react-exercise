import React from 'react'
import Header from './Header'
import '../styles/error.css'

const ErrorView = () => {
    return (
        <div>
            <Header headerText="Rick and Morty Errorrrr!!" />
            <div className="error-container">
                <div className="error-text">
                    Error
                </div>
            </div>
        </div>
    )
}

export default ErrorView