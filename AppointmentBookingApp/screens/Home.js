import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// components
import Header from '../components/Header';
import Promotion from '../components/Promotion';
import Offers from '../components/Offers';
import ShopList from '../components/ShopsList';

const Home = () => (
    <ScrollView style={styles.root}>
        <Header />
        <Promotion />
        <Offers />
        <ShopList />
    </ScrollView>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Home;
