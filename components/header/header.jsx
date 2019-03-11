import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Menu from '../menu';

export default class Header extends React.PureComponent {
    render() {
        return (
            <header className={css(styles.header)}>
                <div className={css(styles.header_nav_wrap)}>
                    <div className={css(styles.header_nav)}>
                        <p className={css(styles.header_logo)}>blu<span className={css(styles.header_logo__color)}>e</span>asy</p>
                        <Menu />
                    </div>
                </div>
                <div className={css(styles.header_info)}>
                    <h1 className={css(styles.header_title)}>
                        <span className={css(styles.header_subTitle)}>“I’m looking for the unexspanected.</span>
                        <span className={css(styles.header_subTitle)}> I’m looking for things I’ve never seen before.”</span>
                    </h1>
                </div>
            </header>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 600,
        display: 'flex',
        flexDirection: 'column',
        background: 'url(/background.png) 100% 100% no-repeat',
        backgroundSize: 'cover',
    },

    header_nav_wrap: {
        display: 'flex',
        justifyContent: 'center',
        background: 'rgba(51, 51, 51, .5)',
    },

    header_nav: {
        maxWidth: '63%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingBottom: 40,
        flexGrow: 2,
    },

    header_logo: {
        display: 'block',
        margin: 0,
        color: '#fff',
        fontSize: 30,
        fontWeight: 700,
        textTransform: 'uppercase',
    },

    header_logo__color: {
        color: '#4bcaff',
    },

    header_info: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    },

    header_title: {
        maxWidth: '63%',
        fontSize: 42,
        textTransform: 'uppercase',
        color: '#fff',
        margin: 0,
    },

    header_subTitle: {
        display: 'block',
        margin: 0,
        marginBottom: 15,
        background: 'rgba(51, 51, 51, .5)',
    }
});

storiesOf("Header", module)
    .add("Header", () => <Header />);