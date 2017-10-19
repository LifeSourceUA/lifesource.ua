import React, { Component } from 'react';
import PropTypes from 'prop-types';
import svg from 'lib/svg';

@svg({
    width: 200,
    height: 240
})
/* eslint-disable */
export default class SortBy extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    };

    render () {
        const { color } = this.props;

        return (
            <g fill={ color }>
                <path
                    d="M73.5,196.4c-3.9-2.2-8.9-0.9-11.2,3l-15.4,14.3V8.1c0-4.5-3.7-8.1-8.2-8.1s-8.2,3.6-8.2,
                    8.1v205.5l-15.4-14.3c-2.3-3.9-7.2-5.2-11.2-3s-5.2,7.2-3,11.1l30.6,28.4c0.1,0.2,0.2,0.2,0.3,
                    0.4c0.2,0.3,0.4,0.6,0.6,0.8c0.3,0.3,0.5,0.6,0.8,0.8c0.3,0.2,0.5,0.5,0.9,0.7c0.1,0.1,0.2,0.2,0.4,
                    0.3c0.1,0.1,0.3,0.1,0.5,0.2c0.3,0.2,0.6,0.3,1,0.4c0.4,0.1,0.7,0.2,1.1,0.3c0.4,0.1,0.7,0.1,1,
                    0.1c0.2,0,0.3,0.1,0.5,0.1c0.2,0,0.3-0.1,0.5-0.1c0.4,0,0.7-0.1,1-0.1c0.4-0.1,0.7-0.2,
                    1.1-0.3c0.3-0.1,0.7-0.2,1-0.4c0.1-0.1,0.3-0.1,0.5-0.2c0.1-0.1,0.2-0.2,0.4-0.3c0.3-0.2,
                    0.6-0.4,0.9-0.7c0.3-0.3,0.6-0.5,0.8-0.8c0.2-0.3,0.4-0.5,0.6-0.8c0.1-0.1,0.2-0.2,
                    0.3-0.4l30.6-28.4C78.7,203.6,77.4,198.6,73.5,196.4z"
                />
                <path d="M191.8,30.5H82.2v16.3h109.7c4.5,0,8.2-3.6,8.2-8.1S196.3,30.5,191.8,30.5z"/>
                <path d="M167.3,111.9H86.3v16.3h81.1c4.5,0,8.2-3.6,8.2-8.1S171.9,111.9,167.3,111.9z"/>
                <path d="M142.9,193.2H91v16.3h51.8c4.5,0,8.2-3.6,8.2-8.1C151,196.9,147.4,193.2,142.9,193.2z"/>
            </g>
        );
    }
}