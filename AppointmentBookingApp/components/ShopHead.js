import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

// react-native
import {
  View, Text, Image, StyleSheet,
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import theme from '../theme';

const ShopHead = (props) => {
  const { shop } = props.shop;

  return (
      <View style={styles.head}>
          <View style={styles.headImage}>
              <Image source={shop.image} style={styles.image} />
          </View>
          <View>
              <Text style={styles.title}>
                  {shop.shopName}
              </Text>
              <AirbnbRating defaultRating={shop.rating} size={20} showRating={false} isDisabled />
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },

  headImage: {
    flexGrow: 0.4,
    margin: 2,
  },

  title: {
    color: theme.palette.primary.main,
    fontSize: 25,
    fontWeight: 'bold',
  },

  head: {
    margin: 10,
    flexDirection: 'row',
  },
});

const mapStateToProps = (state) => ({
  shop: state.shop,
});

ShopHead.propTypes = PropTypes({
  shop: PropTypes.object.isRequired,
});

export default connect(mapStateToProps, null)(ShopHead);
