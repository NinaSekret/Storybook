import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { font, color } from '../../variables/variables';
import Menu from '../menu';
import Gallery from '../gallery';

export default class Portfolio extends React.PureComponent {
    render() {
        return (
            <div className={css(styles.portfolio_container)}>
                <div className={css(styles.portfolio)}>
                    <div className={css(styles.portfolio_header)}>
                        <h2 className={css(styles.title_header)}>portfolio</h2>
                        <Menu menuItems={menuItems} className={styles._menu_link_portfolio} />
                    </div>
                    <Gallery />
                </div>
            </div>
        );
    }
}

const menuItems = [
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

const styles = StyleSheet.create({
    _menu_link_portfolio: {
        color: '#515f67',
    },

    portfolio_container: {
        padding: '80px 0',
        display: 'flex',
        justifyContent: 'center',
        color: color.grey
    },

    portfolio: {
        maxWidth: '63%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        flexGrow: 2
    },

    portfolio_header: {
        paddingBottom: 80,
        display: 'flex',
        justifyContent: 'space-between'
    },

    title_header: {
        position: 'relative',
        margin: 0,
        fontSize: 30,
        fontWeight: font.WeightNormal,
        textTransform: 'uppercase',
        ':after': {
            content: "''",
            width: 45,
            height: 2,
            position: 'absolute',
            top: 33,
            left: 2,
            backgroundColor: color.grey
        },
    },
});

storiesOf("Portfolio", module)
    .add("Portfolio", () => <Portfolio />)
