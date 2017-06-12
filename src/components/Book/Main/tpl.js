/**
 * [IL]
 * Library Import
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

/**
 * [IBP]
 * Pixel Perfect and Breakpoints
 */
import PixelPerfect from 'vendor/PixelPerfect/component';
// import BP from 'lib/breakpoints';

/**
 * [ICONF]
 * Config Import
 */
import config from './config';

/**
 * [IV]
 * View Import
 */
import Common from './Views/Common/tpl';

/**
 * [IRDX]
 * Redux connect (optional)
 */
@connect((state) => {
    return {
        mediaType: state.browser.mediaType
    };
})
class Main extends Component {
    /**
     * [CPT]
     * Component prop types
     */
    static propTypes = {
        mediaType: PropTypes.string.isRequired
    };

    /**
     * [CR]
     * Render function
     */
    render = () => {
        const { mediaType } = this.props;

        /**
         * [RCD]
         * Config destructuring
         */
        const { id } = config;

        /**
         * [RR]
         * Return Component
         */
        return (
            <PixelPerfect component={ id }>
                { <Common mediaType={ mediaType }/> }
            </PixelPerfect>
        );
    }
}

/**
 * [IE]
 * Export
 */
export default Main;
