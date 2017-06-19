import React, { Component } from 'react';
import PropTypes from 'prop-types';
import svg from 'lib/svg';

@svg({
    width: 44,
    height: 40
})
export default class Hamburger extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        isMenuVisible: PropTypes.bool.isRequired
    };

    render() {
        const { color, isMenuVisible } = this.props;

        return isMenuVisible ? (
            <path
                fill={ color } d="M24,20L41.3,3.7c0.8-0.8,0.9-2.1,0.1-3c-0.7-0.9-2-0.9-2.8-0.1L21,17.2L3.4,
                0.5C2.5-0.2,1.3-0.2,0.5,0.7c-0.7,0.9-0.7,2.2,0.1,3L18,20L0.7,36.3c-0.8,0.8-0.9,2.1-0.1,3C0.9,
                39.8,1.5,40,2,40c0.5,0,1-0.2,1.4-0.5L21,22.8l17.6,16.6C39,39.8,39.5,40,40,40c0.6,0,1.1-0.2,
                1.5-0.7c0.7-0.9,0.7-2.2-0.1-3L24,20z"
            />
        ) : (
            <g>
                <path
                    fill={ color } d="M2.1,4.2h39.8c1.2,0,2.1-0.9,2.1-2.1C44,0.9,43.1,0,41.9,0H2.1C0.9,0,0,0.9,0,
                    2.1C0,3.3,0.9,4.2,2.1,4.2z"
                />
                <path
                    fill={ color } d="M41.9,35.8H2.1c-1.2,0-2.1,0.9-2.1,2.1C0,39.1,0.9,40,2.1,40h39.8c1.2,0,2.1-0.9,
                    2.1-2.1C44,36.7,43.1,35.8,41.9,35.8z"
                />
                <path
                    fill={ color } d="M41.9,17.9H2.1C0.9,17.9,0,18.8,0,20c0,1.2,0.9,2.1,2.1,2.1h39.8c1.2,0,2.1-0.9,
                    2.1-2.1C44,18.8,43.1,17.9,41.9,17.9z"
                />
            </g>
        );
    }
}
