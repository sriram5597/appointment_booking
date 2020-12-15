import React from 'react';

//redux
import { connect } from 'react-redux';

//react-native
import { StyleSheet, Text, View, } from 'react-native';

//maps
import MapView from 'react-native-maps';
import theme from '../theme';

const Location = (props) => {
    const { shop } = props.shop;

    return (
        <View style={styles.root}>
            <View style={styles.address}>
                <Text style={styles.header}>
                    Address
                </Text>
                <Text>
                    {shop.address}
                </Text>
            </View>
            <View>
                <MapView style={styles.map} 
                    zoomEnabled={true}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        height: '92%'
    },
    map: {
        width: '95%',
        height: '90%',
        alignSelf: 'center',
        padding: 10,
    },
    address: {
        margin: 2,
        padding: 10,
    },
    header: {
        fontSize: 20,
        color: theme.palette.primary.main,
        fontWeight: 'bold'
    }
});

const mapStateToProps = (state) => ({
    shop: state.shop,
});

export default connect(mapStateToProps, null)(Location);