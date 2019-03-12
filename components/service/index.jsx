import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { font, color } from '../../variables/variables';

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
        color: color.white,
    },

    services_item_title: {
        fontSize: 24,
        fontWeight: font.WeightBold,
        textTransform: 'uppercase'
    },

    services_item_info: {
        fontSize: 12,
        fontWeight: font.WeightBold,
        lineHeight: '14px'
    }

});

storiesOf("One sevice", module)
    .add("One sevice", () => <div style={{ background: 'black' }}><Services img="/frame.png" name="Some" info="Ololololol" /></div>)
