import React, { Component } from 'react';
import PropTypes from 'prop-types';
import svg from 'lib/svg';

@svg({
    width: 98,
    height: 56
})
export default class Logo extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    };

    render() {
        const { color } = this.props;

        return (
            <path
                fill={ color } d="M44.5,14.1C43.9,9,40,5.7,38.8,4.9c-1.2-0.8-3.8-2.1-8.3-3.3c-4.6-1.3-12.3-0.5-17.7,
                0.1C10.1,2,2.5,4.1,2.1,4.4C1.7,4.8,0.9,6.2,0.7,6.7S0.6,7.3,0.9,7.4c0.3,0,2.9-0.4,3.2-0.5s12.1-3.8,
                23.2-2C40.5,7.1,39,17.5,39,17.5h5.4C44.5,17.4,44.9,15.5,44.5,14.1z M70.7,21.4l1-4h-5.8c0,0-1.7,3.3-1.9,
                4C65.4,21.4,70.7,21.4,70.7,21.4z M31.2,30.2c-9,7.1-19.6,6.3-19.6,6.3l7.8-29.4l-5.2-0.2l-3,11.9c0,0-4.7,
                17.7-4.9,18.5c0,0.5-0.8,0.4-0.8,0.4H1.7c0,0-0.5,0-0.7,0.4S0.2,40.2,0,41c0.4,0.4,1.4,0.4,1.4,0.4s3.8,0,
                9.3-0.1c5.5-0.5,13.9-1.8,22.7-7S44,21.4,44,21.4h-5.5C38.2,21.4,37.1,25.9,31.2,30.2z M39,17.4c-2.8,0-5.7,
                0-5.7,0l-1.3,4h6.2C38.2,21.4,39.1,19,39,17.4zM54.8,17.4l2.8-11.2h-5l-2.9,11.2h-5.2c0,0-0.4,3.5-0.7,
                4c1.4,0,4.8,0,4.8,0L39.3,56h5.2l9.1-34.6h4.7c0,0,1.4-3.7,1.6-4C59.3,17.5,54.8,17.4,54.8,17.4z M97.9,
                7.1C97.8,5.2,95-2.6,80.3,0.9C66.4,4.9,60,17.4,60,17.4h5.9C69.7,10.9,76.4,7,76.4,7s7.3-4.9,11.4-3.8c8,
                2.2,3.6,13.5,3.6,13.5s4.2,0,4.8-0.1c0.3-0.3,1.4-3.6,1.4-3.6S98.2,11.2,97.9,7.1z M61,36.8c1.4,1.3,6.1,
                5.8,15.4,4.4c9.3-1.4,16.9-5.1,17.5-5.5c0.6-0.5,0.7-0.8,0.8-1.2c0.2-0.5,0.3-2.4,0.3-2.4s-9.9,4.9-20.7,
                4.4C58.3,35.6,64,21.4,64,21.4h-5.6C58.4,21.4,55.5,31,61,36.8z"
            />
        );
    }
}