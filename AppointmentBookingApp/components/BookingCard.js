import React from 'react';

// redux
import { connect } from 'react-redux';

// react native
import {
  View, Image, Text, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// native-base
import { Card, CardItem } from 'native-base';
import theme from '../theme';

const BookingCard = (props) => {
  const { booking } = props;
  const { shops } = props.shop;

  const getShopDetails = (shopId) => {
    const bookingShop = shops.filter((s) => s.shopId === shopId);
    return bookingShop[0];
  };

  const shop = getShopDetails(booking.shop);

  return (
      <Card style={styles.card}>
          <CardItem style={styles.content}>
              <Image source={shop.image} style={styles.image} />
              <View style={styles.details}>
                  <View>
                      <Text style={styles.shopName}>
                          {shop.shopName}
                      </Text>
                      <Text style={styles.text}>
                          {`Date: ${booking.appointmentDate}`}
                      </Text>
                      <Text style={styles.text}>
                          {`Bill Amount: ${booking.billAmt}`}
                      </Text>
                  </View>
                  <Icon name="arrow-forward" style={styles.icon} />
              </View>
          </CardItem>
      </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },

  card: {
    margin: '5%',
  },

  image: {
    position: 'relative',
    width: '30%',
    height: '100%',
    marginRight: '5%',
  },

  shopName: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },

  text: {
    fontSize: 15,
  },

  details: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  icon: {
    color: theme.palette.primary.main,
    fontSize: 25,
    left: '95%',
  },
});

const mapStateToProps = (state) => ({
  shop: state.shop,
});

export default connect(mapStateToProps, null)(BookingCard);
