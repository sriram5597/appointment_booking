import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

// redux
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getAllShops } from '../redux/actions/shopActions';

// react native
import theme from '../theme';

// components
import ShopCard from './ShopCard';

const ShopList = (props) => {
  const navigation = useNavigation();

  const { shops } = props.shop;

  useEffect(() => {
    props.getAllShops();
  }, []);

  const handlePress = () => {
    navigation.navigate('Explore');
  };

  return (
      <View>
          <View style={styles.header}>
              <View>
                  <Text style={styles.title}>
                      Explore Shops
                  </Text>
              </View>
              <View>
                  <TouchableOpacity onPress={handlePress}>
                      <Icon name="arrow-forward" style={styles.icon} />
                  </TouchableOpacity>
              </View>
          </View>
          <View style={styles.cardContainer}>
              {
                    shops.map((shop, index) => (
                        <View style={styles.shopCard} key={shop.shopId}>
                            <ShopCard shop={shop} key={shop.shopId} index={index} />
                        </View>
                    ))
                }
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  icon: {
    fontSize: 25,
    color: theme.palette.primary.main,
    marginRight: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },

  shopCard: {
    width: '45%',
    padding: 3,
  },
});

const mapStateToProps = (state) => ({
  shop: state.shop,
});

const mapActionsToProps = {
  getAllShops,
};

ShopList.propTypes = PropTypes({
  shop: PropTypes.object.isRequired,
  getAllShops: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapActionsToProps)(ShopList);
