import React, { useEffect } from 'react';

//reudx
import { connect } from 'react-redux';
import { getOffers } from '../redux/actions/offerActions';

//native
import { ScrollView, Text, StyleSheet, View } from 'react-native';

import theme from '../theme';

//components
import ShopCard from './ShopCard';

const Offers = (props) => {
    const { offers } = props.offers;

    useEffect( () => {
        props.getOffers();
    }, []);

    return (
        <View style={styles.root}>
            <Text style={styles.text}>
                Offers
            </Text>
            <View style={styles.cardContainer}>
            <ScrollView horizontal={true}>
                {
                    offers.map( (offer, index) => {
                        return (
                            <View key={offer.offerId} style={styles.card}>
                                <ShopCard shop={offer} displayOffer={true} key={offer.offerId} index={index} />
                            </View>
                        )
                    })
                }
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        margin: 4,
    },

    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },  

    text: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold'
    },

    card: {
        width: '32%',
        margin: 5,
    }
});

const mapStateToProps = (state) => ({
    offers: state.offers,
});

const mapActionsToProps = {
    getOffers,
}

export default connect(mapStateToProps, mapActionsToProps)(Offers);