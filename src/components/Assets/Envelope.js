import React, { Component } from 'react';
import PropTypes from 'prop-types';
import svg from 'lib/svg';

@svg({
    width: 40,
    height: 30
})
export default class Envelope extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    };

    render() {
        const { color } = this.props;

        return (
            <g>
                <path
                    fill={ color } d="M35.1,0H4.9C2.2,0,0,2.2,0,4.8v20.4C0,27.8,2.2,30,4.9,30h30.2c2.7,0,4.9-2.2,
                    4.9-4.8V4.8C40,2.2,37.8,0,35.1,0z M37.8,25.2c0,1.4-1.2,2.6-2.7,2.6H4.9c-1.5,
                    0-2.7-1.2-2.7-2.6V4.8c0-1.4,1.2-2.6,2.7-2.6h30.2c1.5,0,2.7,1.2,2.7,2.6L37.8,25.2L37.8,25.2z"
                />
                <path
                    fill={ color } d="M25.2,14.7L35,6.1c0.5-0.4,0.5-1.1,0.1-1.6c-0.4-0.4-1.1-0.5-1.6-0.1L20,
                    16.4l-2.6-2.3c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.2L6.5,4.5C6,4,5.3,4.1,4.9,4.5C4.5,5,4.5,5.7,5,
                    6.1l9.9,8.7L5,23.9c-0.4,0.4-0.5,1.1,0,1.6c0.2,0.2,0.5,0.4,0.8,0.4c0.3,0,0.5-0.1,0.8-0.3l10-9.2l2.7,
                    2.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.8-2.5l9.9,9.3c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,
                    0.8-0.3c0.4-0.4,0.4-1.1,0-1.6L25.2,14.7z"
                />
            </g>
        );
    }
}
