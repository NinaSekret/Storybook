import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StyleSheet, css } from 'aphrodite/no-important';

export default class MenuItem extends React.PureComponent {
    render() {
        const { title, href } = this.props;
        return (
            <li className={css(styles.menu_item)}><a className={css(styles.menu_item_link)} href={href}>{title}</a></li>
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
        color: '#fff',
        ':hover': {
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: '#4bcaff',
            color: '#4bcaff',
        },
        ':focus': {
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: '#4bcaff',
        }

    },


    // menu_item:hover menu_item_link,
    // menu_item_link: focus {
    //     color: '#4bcaff',
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
        fontWeight: 700,
        outline: 'none',
        ':focus': {
            color: '#4bcaff',
        }
    }

});

storiesOf("MenuItem", module)
    .add("MenuItem", () => <div style={{ background: 'black' }}> <MenuItem href="#" title="Some" /></div>);