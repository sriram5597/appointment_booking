import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

// redux
import { connect } from 'react-redux';

// react-native
import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

// native-base
import {
  List, ListItem, Left, Right,
} from 'native-base';
import { AirbnbRating } from 'react-native-ratings';
import { getAllShops } from '../redux/actions/shopActions';

import theme from '../theme';

const Explore = (props) => {
  const navigation = useNavigation();

  const { shops } = props.shop;

  useEffect(() => {
    props.getAllShops();
  }, []);

  const handlePress = (index) => () => {
    navigation.navigate('Shop', {
      index,
    });
  };

  return (
      <View style={styles.root}>
          <View>
              <Text style={styles.header}>
                  Shops
              </Text>
          </View>
          <View>
              <ScrollView>
                  <List>
                      {
                        shops.map((shop, index) => (
                            <TouchableHighlight
                              key={shop.shopId}
                              onPress={handlePress(index)}
                              activeOpacity={0.3}
                              underlayColor="#ddddd"
                            >
                                <ListItem>
                                    <Left>
                                        <View>
                                            <Image source={shop.image} style={styles.image} />
                                        </View>
                                        <View style={styles.details}>
                                            <Text style={styles.shopName}>
                                                {shop.shopName}
                                            </Text>
                                            <AirbnbRating
                                              defaultRating={shop.rating}
                                              size={14}
                                              showRating={false}
                                              isDisabled
                                            />
                                        </View>
                                    </Left>
                                    <Right>
                                        <Icon name="keyboard-arrow-right" style={styles.icon} />
                                    </Right>
                                </ListItem>
                            </TouchableHighlight>
                        ))
                    }
                  </List>
              </ScrollView>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: '6%',
    marginLeft: '2%',
  },

  image: {
    width: 50,
    height: 60,
  },

  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    margin: '2%',
  },

  details: {
    padding: 10,
  },

  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },

  icon: {
    fontSize: 25,
    color: theme.palette.primary.main,
  },
});

const mapStateToProps = (state) => ({
  shop: state.shop,
});

const mapActionsToProps = {
  getAllShops,
};

Explore.propTypes = PropTypes({
  shop: PropTypes.object.isRequired,
  getAllShops: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapActionsToProps)(Explore);
