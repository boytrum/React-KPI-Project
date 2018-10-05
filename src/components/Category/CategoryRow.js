import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {

    };
}

class CategoryRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.row.Id}</td>
                <td className="hidden-xs">{this.props.row.Name}</td>
                <td></td>
                <td className="hidden-xs"></td>
                <td></td>
            </tr>
        );
    }
}

export default connect(
    mapStateToProps,
)(CategoryRow);