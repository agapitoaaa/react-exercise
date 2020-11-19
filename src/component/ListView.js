import React from 'react';
import Header from '../component/Header';
import Card from '../component/Card';
import '../styles/listView.css';
import PropTypes from 'prop-types';

const ListView = props => {
    const { post } = props;
    const { results } = post;
    return (
        <div >
            <Header headerText="Rick and Morty Character List" />
            <div className="main-container">
                {
                    results ?
                        Object.keys(results).map((item) => <Card key={item} details={results[item]} id={results.id} imageSource={results[item].image} />)
                        : null
                }
            </div>
        </div>
    )
}

ListView.propTypes = {
    post: PropTypes.shape({
        results: PropTypes.array
    })
}

export default ListView