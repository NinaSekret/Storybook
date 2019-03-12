import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StyleSheet, css } from 'aphrodite/no-important';
import Service from '../service';
import { font, color } from '../../variables/variables';

export default class ServicesHolder extends React.PureComponent {
    render() {
        return (
            <div className={css(styles.services_container)}>
                <div className={css(styles.services)}>
                    <h2 className={css(styles.title_header)}>services</h2>
                    <div className={css(styles.services_wrap)}>
                        {
                            services.map(service => {
                                return <Service img={service.img} name={service.name} info={service.info} />;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    services_container: {
        paddingTop: 30,
        paddingBottom: 30,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#33ccff'
    },

    services: {
        maxWidth: '63%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        color: color.white
    },

    services_wrap: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingTop: 52,
        ':last-child': {
            paddingRight: 0
        }
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
            backgroundColor: color.white
        },
    },
});

const services = [
    {
        img: "/coffee.png",
        name: "coffee",
        info: "Apple pie icing sweet. Brownie jelly-o applicake applicake sweet roll liquorice bear claw. Jujubes carrot cake cotton candy sweet tart brownie. Tiramisu applicake jujubes."
    },
    {
        img: "/instant.png",
        name: "instant",
        info: "Apple pie icing sweet. Brownie jelly-o applicake applicake sweet roll liquorice bear claw. Jujubes carrot cake cotton candy sweet tart brownie. Tiramisu applicake jujubes."
    },
    {
        img: "/dslr.png",
        name: "serious",
        info: "Apple pie icing sweet. Brownie jelly-o applicake applicake sweet roll liquorice bear claw. Jujubes carrot cake cotton candy sweet tart brownie. Tiramisu applicake jujubes."
    },
    {
        img: "/frame.png",
        name: "frame",
        info: "Apple pie icing sweet. Brownie jelly-o applicake applicake sweet roll liquorice bear claw. Jujubes carrot cake cotton candy sweet tart brownie. Tiramisu applicake jujubes."
    }
];

storiesOf("ServicesHolder", module)
    .add("ServicesHolder", () => <ServicesHolder />)
