import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class Home extends React.Component {
    render() {
        return (
            <div>
                Home page
            </div>
        );
    }
}

export default connect(mapStateToProps,null )(Home);