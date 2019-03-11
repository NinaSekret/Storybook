import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StyleSheet, css } from 'aphrodite/no-important';
import MenuItem from '../menuItem';

export default class Menu extends React.PureComponent {
    render() {
        return (
            <nav className={css(styles.menu_list)}>
                {
                    menuItem1.map(item => {
                        return <MenuItem title={item.title} href={item.href} />;
                    })
                }
            </nav>
        );
    }
}

const styles = StyleSheet.create({
    menu_list: {
        padding: 0,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    }
});

const menuItem1 = [
    {
        title: 'home',
        href: '#',
    },
    {
        title: 'services',
        href: '#',
    },
    {
        title: 'features',
        href: '#',
    },
    {
        title: 'portfolio',
        href: '#',
    },
    {
        title: 'contact',
        href: '#',
    }
];

const menuItem2 = [
    {
        title: 'all',
        href: '#',
    },
    {
        title: 'panoramas',
        href: '#',
    },
    {
        title: 'portraits',
        href: '#',
    },
    {
        title: 'macro',
        href: '#',
    },
    {
        title: 'journal',
        href: '#',
    }
];

storiesOf("Menu", module)
    .add("Menu", () => <Menu />);