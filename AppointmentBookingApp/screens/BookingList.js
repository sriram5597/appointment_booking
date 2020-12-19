import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { getAllBookings } from '../redux/actions/bookingAction';

// react-native

// components
import BookingCard from '../components/BookingCard';

import theme from '../theme';

const BookingList = (props) => {
  const { bookings } = props.booking;

  useEffect(() => {
    props.getAllBookings();
  }, []);

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.title}>
          Your Appointments
        </Text>
      </View>
      <View>
        {
            bookings.length == 0 ? (
              <View style={styles.content}>
                <Icon name="alarm-off" style={styles.icon} />
                <Text style={styles.text}>
                  No Appointments
                </Text>
              </View>
            ) : (
              <View>
                <ScrollView>
                  {
                    bookings.map((booking, index) => (
                      <BookingCard key={index} booking={booking} />
                    ))
                  }
                </ScrollView>
              </View>
            )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: '6%',
    marginLeft: '2%',
  },
  title: {
    fontSize: 20,
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
  content: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    fontSize: 80,
    color: theme.palette.alert.main,
  },
  text: {
    fontSize: 15,
    fontStyle: 'italic',
    color: theme.palette.alert.main,
  },
});

const mapStateToProps = (state) => ({
  booking: state.booking,
});

const mapActionsToProps = {
  getAllBookings,
};

BookingList.propTypes = PropTypes({
  bookings: PropTypes.object.isRequired,
  getAllBookings: PropTypes.func.isRequired,
});

export default connect(mapStateToProps, mapActionsToProps)(BookingList);
