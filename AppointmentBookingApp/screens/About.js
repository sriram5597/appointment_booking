import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

// react-native
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const About = (props) => {
  const { shops } = props.shop;

  return (
      <View style={styles.root}>
          <ScrollView>
              <View style={styles.content}>
                  <Text style={styles.text}>
                      {shops[0].about}
                  </Text>
              </View>
          </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 3,
    height: '92%',
  },

  content: {
    height: '100%',
  },

  text: {
    fontSize: 15,
    alignSelf: 'stretch',
    lineHeight: 25,
    flexWrap: 'wrap',
  },
});

const mapStateToProps = (state) => ({
  shop: state.shop,
});

About.propTypes = PropTypes({
  shop: PropTypes.object.isRequired,
});

export default connect(mapStateToProps, null)(About);
