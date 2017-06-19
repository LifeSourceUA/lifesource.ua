import React, { Component } from 'react';
import PropTypes from 'prop-types';
import svg from 'lib/svg';

@svg({
    width: 24,
    height: 24
})
export default class Search extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    };

    render() {
        const { color } = this.props;

        return (
            <path
                fill={ color } d="M23.7,22.3l-6.2-6.1c1.5-1.7,2.4-4,2.4-6.4C20,4.4,15.5,0,10,0S0,4.4,0,9.8c0,5.4,
                4.5,9.8,10,9.8c2.3,0,4.4-0.8,6.1-2.1l6.2,6.1c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3C24.1,23.3,
                24.1,22.7,23.7,22.3z M2,9.8C2,5.5,5.6,2,10,2s8,3.5,8,7.9s-3.6,7.9-8,7.9S2,14.2,2,9.8z"
            />
        );
    }
}
