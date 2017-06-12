import React, { Component, PropTypes } from 'react';
import svg from 'helpers/svg';

@svg({
    width: 56,
    height: 56
})

export default class UA extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    };

    render = () => {
        return (
            <g>
                <path fill="#0AB6CC" d="M28,0C12.5,0,0,12.5,0,28h56C56,12.5,43.5,0,28,0z"/>
                <path fill="#FFDA42" d="M28,56c15.5,0,28-12.5,28-28H0C0,43.5,12.5,56,28,56z"/>
            </g>
        );
    }
}
