import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// native
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  StyleSheet, Image, Text, View,
} from 'react-native';

// redux
import { connect } from 'react-redux';
import { getPromotions } from '../redux/actions/promotionActions';

const Promotion = (props) => {
  const { promotions } = props.promotion;

  const [ind, setInd] = useState(0);

  useEffect(() => {
    props.getPromotions();
  }, []);

  const handleNextImage = () => {
    setInd((ind + 1) % promotions.length);
  };

  return (
      <View style={{ elevation: 0 }}>
          <Text style={styles.header}>
              Deals of the Day
          </Text>

          <View>
              <TouchableOpacity onPress={handleNextImage}>
                  <Image source={promotions[ind]} style={styles.image} />
              </TouchableOpacity>
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 350,
  },

  header: {
    margin: 4,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
});

const mapStateToProps = (state) => ({
  promotion: state.promotion,
});

const mapActionsToProps = {
  getPromotions,
};

Promotion.propTypes = PropTypes({
  promotion: PropTypes.object.isRequired,
  getPromotions: PropTypes.object.isRequired,
});

export default connect(mapStateToProps, mapActionsToProps)(Promotion);
