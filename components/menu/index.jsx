import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import MenuItem from '../menuItem';

export default class Menu extends React.PureComponent {
    render() {
        const { menuItems, className } = this.props;
        console.log(className);
        return (
            <nav className={css(styles.menu_list)}>
                {
                    menuItems.map(item => {
                        return <MenuItem className={className} title={item.title} href={item.href} />;
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
