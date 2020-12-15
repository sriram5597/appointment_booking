import React, { useEffect } from 'react';

//redux
import { connect } from 'react-redux';
import { getAllBookings } from '../redux/actions/bookingAction';

//react-native
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//components
import BookingCard from '../components/BookingCard';

import theme from '../theme';
import { ScrollView } from 'react-native-gesture-handler';

const BookingList = (props) => {
    const { bookings } = props.booking;

    useEffect( () => {
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
                                    bookings.map( (booking, index) => {
                                        return (
                                            <BookingCard key={index} booking={booking} />
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        marginTop: '6%',
        marginLeft: '2%'
    },
    title: {
        fontSize: 20,
        color: theme.palette.primary.main,
        fontWeight: 'bold'
    },
    content: {
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
    },
    icon: {
        fontSize: 80,
        color: theme.palette.alert.main
    },
    text: {
        fontSize: 15,
        fontStyle: 'italic',
        color: theme.palette.alert.main
    }
});

const mapStateToProps = (state) => ({
    booking: state.booking,
});

const mapActionsToProps = {
    getAllBookings,
}

export default connect(mapStateToProps, mapActionsToProps)(BookingList);