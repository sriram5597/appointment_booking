import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

//redux
import { connect } from 'react-redux';
import { getShop } from '../redux/actions/shopActions';

//native
import { StyleSheet, Text, View } from 'react-native';

//native-base
import Tabs from 'react-native-tabs';

import theme from '../theme';

//components
import ShopHead from '../components/ShopHead';

//screen
import About from './About';
import Services from './Services';
import Location from './Location';

const Shop = (props) => {
    const { shop } = props.shop;
    const route = useRoute();

    const [page, setPage] = useState('services');
    
    useEffect( () => {
        props.getShop(route.params.index);
    }, []);

    const handleTab = (e) => {
        setPage(e.props.name);
    }

    return (
        <View>
            {
                shop && Object.keys(shop).length == 0 ? (
                    <View>
                        <Text>
                            Loading...
                        </Text>
                    </View>
                ) : (
                    <View>
                        <View style={styles.head}>
                            <ShopHead />
                        </View>
                        <View style={styles.content}>
                            {
                                page === 'services' ? (
                                    <Services />
                                ) : (
                                    page === 'about' ? (
                                        <About />
                                    ) : (
                                        <Location />
                                    )
                                )
                            }
                        </View>
                        <View style={styles.tabContainer}>
                            <Tabs selected={page} onSelect={handleTab} style={styles.tabs}>
                                <Text name="services" selectedStyle={styles.selectedStyle} style={styles.tabStyle}>
                                    Services
                                </Text>
                                <Text name="about" selectedStyle={styles.selectedStyle} style={styles.tabStyle}>
                                    About
                                </Text>
                                <Text name="location" selectedStyle={styles.selectedStyle} style={styles.tabStyle}>
                                    Location
                                </Text>
                            </Tabs>
                        </View>
                    </View>
               )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        position: "absolute",
        width: '100%',
        top: '90%'
    },

    tabs: {
        elevation: 1,
        backgroundColor: '#fff',
        padding: 10,
    },

    content: {
        height: '92%'
    },

    selectedStyle: {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        borderBottomColor: theme.palette.primary.main,
        borderBottomWidth: 3,
    },

    tabStyle: {
        fontSize: 15,
        color: '#000'
    },

    head: {
        height: '13%'
    }
});

const mapStateToProps = (state) => ({
    shop: state.shop,
});

const mapActionsToProps = {
    getShop,
}

export default connect(mapStateToProps, mapActionsToProps)(Shop);