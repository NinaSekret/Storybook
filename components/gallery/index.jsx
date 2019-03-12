import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Photo from '../photo';

export default class Gallery extends React.PureComponent {
    render() {
        return (
            <div className={css(styles.portfolio_img_wrap)}>
                {photos.map(photo => {
                    return <Photo photo={photo} />
                })}
            </div>
        );
    }
}

const photos = [
    '/portfolio.jpg',
    '/portfolioV2.jpg',
    '/portfolioV3.jpg',
    '/portfolioV4.jpg',
    '/portfolioV5.jpg',
    '/portfolioV6.jpg',
    '/portfolioV7.jpg',
    '/portfolioV8.jpg',
]

const styles = StyleSheet.create({
    portfolio_img_wrap: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
    }
});

storiesOf("Gallery", module)
    .add("Gallery", () => <Gallery />)