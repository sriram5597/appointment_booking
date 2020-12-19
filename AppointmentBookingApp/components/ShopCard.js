import React from 'react';
import PropTypes from 'prop-types';

import { useNavigation } from '@react-navigation/native';

// react native
import {
  View, Text, StyleSheet, Image,
} from 'react-native';

// native base
import {
  CardItem, Card, Badge, Button,
} from 'native-base';
import { AirbnbRating } from 'react-native-ratings';

import theme from '../theme';

const ShopCard = (props) => {
  const navigation = useNavigation();

  const { shop, displayOffer } = props;

  const handlePress = () => {
    navigation.navigate('Shop', {
      index: props.index,
    });
  };

  return (
      <Card style={{ position: 'relative' }}>
          <CardItem header>
              <Image source={shop.image} style={styles.image} />
          </CardItem>
          <CardItem cardBody>
              <View style={{ marginLeft: 10 }}>
                  <View style={styles.header}>
                      <View>
                          <View>
                              <Text style={styles.headerText}>
                                  {shop.shopName}
                              </Text>
                          </View>
                      </View>
                      {
                            displayOffer && (
                                <View>
                                    <Badge style={styles.offer}>
                                        <Text style={{ color: '#fff' }}>
                                            {shop.offer}
                                            %
                                        </Text>
                                    </Badge>
                                </View>
                            )
                        }
                  </View>
                  <View>
                      <AirbnbRating
                        size={15}
                        showRating={false}
                        count={5}
                        isDisabled
                        style={styles.rating}
                        defaultRating={shop.rating}
                      />
                  </View>
              </View>
          </CardItem>
          <CardItem footer>
              <Button transparent onPress={handlePress} style={styles.button}>
                  <Text style={styles.footerText}>
                      VIEW
                  </Text>
              </Button>
          </CardItem>
      </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'relative',
    width: '100%',
    height: 100,
    alignSelf: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  offer: {
    position: 'relative',
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    height: 15,
    flexGrow: 1,
  },

  button: {
    marginLeft: 40,
  },

  footerText: {
    position: 'relative',
    color: theme.palette.primary.main,
    fontSize: 15,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  rating: {
    position: 'relative',
    padding: 0,
    margin: 1,
  },
});

ShopCard.propTypes = PropTypes({
  index: PropTypes.number.isRequired,
  displayOffer: PropTypes.bool,
  shop: PropTypes.object.isRequired,
});

export default ShopCard;
