import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 8,
    height: 14
})

/* eslint-disable react/prefer-stateless-function */
export default class Arrow extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    };

    render() {
        const { color } = this.props;

        return (
            <path
                fill={ color } d="M0.2,13.8L0.2,13.8c-0.3-0.3-0.3-0.8,0-1.1L6.2,7L0.2,1.3c-0.3-0.3-0.3-0.8,
                0-1.1l0,0c0.3-0.3,0.8-0.3,1.1,0l6.5,6.3c0.3,0.3,0.3,0.8,0,1.1l-6.5,6.3C1,14.1,0.5,14.1,0.2,13.8z"
            />
        );
    }
}
