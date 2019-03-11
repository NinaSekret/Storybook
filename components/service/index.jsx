import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StyleSheet, css } from 'aphrodite/no-important';

export default class Services extends React.PureComponent {
    render() {
        const { img, name, info } = this.props;
        return (
            <div className={css(styles.services_item)}>
                <img src={img} />
                <h2 className={css(styles.services_item_title)}>{name}</h2>
                <p className={css(styles.services_item_info)}>{info}</p>
            </div >
        );
    }
}

const someStyles = {};

const styles = StyleSheet.create({
    services_item: {
        width: '20%',
        ...someStyles,
        color: '#fff',
    },

    services_item_title: {
        fontSize: 24,
        fontWeight: 600,
        textTransform: 'uppercase'
    },

    services_item_info: {
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 1.8
    }

});

storiesOf("One sevice", module)
    .add("One sevice", () => <div style={{ background: 'black' }}><Services img="/frame.png" name="Some" info="Ololololol" /></div>)
