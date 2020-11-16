import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state={
            isClicked: false,
        }
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
            <div key={id} className="box-container card" style={{backgroundImage: `url(${imageSource})`}} onClick={this.showDetails}>
                {
                    isClicked 
                    ? 
                        <div onClick={this.showDetails} className="character-details"> 
                            <text className="name-text"> {details.name} </text>
                            <div className="status-container">
                                <text className={`circle status-${details.status}`}/>
                                <text className="details-text">
                                    {details.status.toUpperCase()} - {details.species}
                                </text>
                            </div>
                            <div>
                                <text className="details-text">
                                    Gender: {details.gender}
                                </text>
                            </div>
                            <div>
                                <text className="details-text">
                                    Origin: {details.origin.name}
                                </text>
                            </div>
                        </div>  
                    : null
                }
            </div>
        )
    }

}

export default Card;
