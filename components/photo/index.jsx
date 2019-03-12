import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { color } from '../../variables/variables';

export default class Photo extends React.PureComponent {
    render() {
        const { photo } = this.props;
        return (
            <div tabindex="0" className={css(styles.portfolio_img)}><img src={photo} /></div>
        );
    }
}

const styles = StyleSheet.create({
    portfolio_img: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 270,
        height: 270,
        margin: '0 30px 30px 0',
        outline: 'none',
        ':nth-child(4n)': {
            margin: 0,
        },
        ':hover:after': {
            content: "+",
            position: 'absolute',
            color: color.white,
            fontSize: 50,
        },
        ':focus:after': {
            content: "+",
            position: 'absolute',
            color: color.white,
            fontSize: 50,
        },
        ':hover:before': {
            content: "",
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'rgba(51, 51, 51, .5)',
        },
        ':focus:before': {
            content: "",
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'rgba(51, 51, 51, .5)',
        },
    },
});
