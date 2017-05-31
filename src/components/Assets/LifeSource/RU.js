import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 56,
    height: 56
})

/* eslint-disable */
export default class RU extends Component {
    static propTypes = {
        color: PropTypes.string
    };

    static defaultProps = {
        color: ''
    };

    render() {
        const { color } = this.props;


        return (
            <g>
                <path fill="#F6F6F6" d="M54.4,18.7H1.6C5.4,7.8,15.8,0,28,0S50.6,7.8,54.4,18.7z"/>
                <path
                    fill="#0AA5C9" d="M56,28c0,3.3-0.6,6.4-1.6,9.3H1.6C0.6,34.4,0,31.3,0,28s0.6-6.4,1.6-9.3h52.8C55.4,
                    21.6,56,24.7,56,28z"
                />
                <path fill="#F1766E" d="M54.4,37.3C50.6,48.2,40.2,56,28,56S5.4,48.2,1.6,37.3H54.4z"/>
            </g>
        );
    }
}
