import React, { Component, PropTypes } from 'react';
import svg from 'lib/svg';

@svg({
    width: 38,
    height: 32
})
export default class Book extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    };

    render() {
        const { color } = this.props;

        return (
            <g>
                <path
                    fill={ color } d="M36.5,19.4h-35C0.7,19.4,0,20,0,20.8s0.7,1.5,1.5,1.5h35c0.8,0,1.5-0.7,
                    1.5-1.5S37.3,19.4,36.5,19.4z"
                />
                <path
                    fill={ color } d="M36.5,29.1H12.3c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5h24.2c0.8,0,1.5-0.7,
                    1.5-1.5C38,29.7,37.3,29.1,36.5,29.1z"
                />
                <path
                    fill={ color } d="M36.5,9.7H11.3c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5h25.2c0.8,0,1.5-0.7,
                    1.5-1.5S37.3,9.7,36.5,9.7z"
                />
                <path
                    fill={ color } d="M1.5,2.9h35c0.8,0,1.5-0.7,1.5-1.5S37.3,0,36.5,0h-35C0.7,0,0,0.7,0,1.5S0.7,2.9,
                    1.5,2.9z"
                />
            </g>
        );
    }
}
