import React from 'react';
import Header from '../component/Header';
import Card from '../component/Card';
import '../styles/Styles.css';

class ListView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { post } = this.props;
        const { results } = post;
        return (
            <div >
                <Header headerText="Rick and Morty Character List" />
                <div className="main-container">
                    {
                        results ?
                            Object.keys(results).map((item, i) =>
                                (
                                    <Card details={results[item]} id={results.id} imageSource={results[item].image} />
                                )
                            )
                            : null
                    }
                </div>
            </div>
        )
    }
}

export default ListView