import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { font, color } from '../../variables/variables';

export default class MenuItem extends React.PureComponent {
    render() {
        const { title, href, className } = this.props;
        return (
            <li className={css(styles.menu_item, className)}><a className={css(styles.menu_item_link)} href={href}>{title}</a></li>
        );
    }
}

const styles = StyleSheet.create({
    menu_item: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'transparent',
        cursor: 'pointer',
        outline: 'none',
        listStyle: 'none',
        color: color.white,
        ':hover': {
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: color.blue,
            color: color.blue,
        },
        ':focus': {
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: color.blue,
        }

    },

    // menu_item:hover menu_item_link,
    // menu_item_link: focus {
    //     color: color.blue,
    // },


    menu_item_link: {
        display: 'block',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        width: '100%',
        height: '100%',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'transparent',
        color: 'inherit',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: font.WeightBold,
        outline: 'none',
        ':focus': {
            color: color.blue,
        }
    }

});

storiesOf("MenuItem", module)
    .add("MenuItem", () => <div style={{ background: 'black' }}> <MenuItem href="#" title="Some" /></div>);