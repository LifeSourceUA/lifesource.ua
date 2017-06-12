import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 16,
    height: 64
})

/* eslint-disable react/prefer-stateless-function */
export default class LabelEdge extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        color1: PropTypes.string.isRequired
    };

    render() {
        const { color, color1 } = this.props;

        const style = {
            opacity: color === '' ? 0 : 1
        };

        return (
            <g>
                <g>
                    <path
                        fill={ color } style={ style } d="M16,0H6.4C1.8,0-1.3,4.8,0.6,9l9.1,20.4c0.7,1.7,0.7,3.5,0,
                        5.2L0.6,55c-1.9,4.2,1.2,9,5.8,9H16V0z"
                    />
                </g>
                <path
                    fill={ color1 } d="M16,60H6.4c-1.2,0-1.8-0.8-2-1.1c-0.2-0.3-0.7-1.2-0.2-2.3l9.1-20.4c1.2-2.7,
                    1.2-5.8,0-8.4L4.2,7.4c-0.5-1.1,0-2,0.2-2.3C4.6,4.8,5.2,4,6.4,4H16V0H6.4C1.8,0-1.3,4.8,0.6,9l9.1,
                    20.4c0.7,1.7,0.7,3.5,0,5.2L0.6,55c-1.9,4.2,1.2,9,5.8,9H16V60z"
                />
            </g>
        );
    }
}
