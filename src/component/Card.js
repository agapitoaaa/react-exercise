import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css'

class Card extends React.Component {

    state = {
        isClicked: false,
    }

    showDetails = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render() {
        const { id, imageSource, details } = this.props;
        const { isClicked } = this.state;
        return (
            <div key={id} className="box-container card" style={{ backgroundImage: `url(${imageSource})` }} onClick={this.showDetails}>
                {
                    isClicked
                        ?
                        <div onClick={this.showDetails} className="character-details">
                            <div className="name-text"> {details.name} </div>
                            <div className="status-container">
                                <div className={`circle status-${details.status}`} />
                                <div className="details-text">
                                    {details.status.toUpperCase()} - {details.species}
                                </div>
                            </div>
                            <div>
                                <div className="details-text">
                                    Gender: {details.gender}
                                </div>
                            </div>
                            <div>
                                <div className="details-text">
                                    Origin: {details.origin.name}
                                </div>
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }

}

Card.propTypes = {
    id: PropTypes.number,
    imageSource: PropTypes.string,
    details: PropTypes.shape({
        name: PropTypes.string,
        status: PropTypes.string,
        species: PropTypes.string,
        gender: PropTypes.string,
        origin: PropTypes.shape({
            name: PropTypes.string,
        })
    }),

}

export default Card;
