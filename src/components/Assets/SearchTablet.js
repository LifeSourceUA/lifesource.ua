import React, { Component } from 'react';
import PropTypes from 'prop-types';
import svg from 'lib/svg';

@svg({
    width: 56,
    height: 56
})
export default class SearchTablet extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    };

    render() {
        const { color } = this.props;

        return (
            <g>
                <path
                    fill={ color } d="M14,9.5c-0.8,0-1.5,0.6-1.5,1.4v0.2c0,0.8,0.7,1.4,1.5,1.4s1.5-0.6,
                    1.5-1.4v-0.2C15.5,10.1,14.8,9.5,14,9.5z"
                />
                <path
                    fill={ color } d="M30.9,9.9C27.2,7.7,22.6,7,18.4,8.1c-0.8,0.2-1.3,1-1.1,1.8c0.2,0.8,1,1.3,1.8,
                    1.1c3.4-0.8,7.2-0.3,10.2,1.5c0.2,0.1,0.5,0.2,0.8,0.2c0.5,0,1-0.3,1.3-0.7C31.8,11.3,31.6,10.3,
                    30.9,9.9z"
                />
                <path
                    fill={ color } d="M55.6,53.4L39.2,37.1c3.4-3.9,5.5-9.1,5.5-14.7C44.8,10,34.7,0,22.4,0C10,0,0,10,0,
                    22.4s10,22.4,22.4,22.4c5.6,0,10.8-2.1,14.7-5.5l16.3,16.3c0.3,0.3,0.7,0.4,1.1,0.4c0.4,0,0.8-0.1,
                    1.1-0.4C56.1,55,56.1,54,55.6,53.4z M3,22.4C3,11.7,11.7,3,22.4,3s19.4,8.7,19.4,19.4s-8.7,19.4-19.4,
                    19.4S3,33.1,3,22.4z"
                />
            </g>
        );
    }
}
