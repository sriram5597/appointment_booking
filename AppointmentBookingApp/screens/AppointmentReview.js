import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

//redux
import { connect } from 'react-redux';
import { addBooking } from '../redux/actions/bookingAction';
import { getShop } from '../redux/actions/shopActions';

//react native
import { View, Text, StyleSheet, ToastAndroid } from 'react-native';

//native base
import { Button, ListItem, List } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../theme';

const AppointmentReview = (props) => {
    const { shop } = props.shop;
    const route = useRoute();
    const navigation = useNavigation();

    const handleCancel = () => {
        navigation.goBack();
    }

    const handleConfirm = () => {
        const data = {
            shop: shop.shopId,
            appointmentDate: route.params.appointmentDate,
            appointmentTime: route.params.appointmentTime,
            selectedServces: route.params.selectedServces,
            billAmt: route.params.billAmt,
        }

        props.addBooking(data);

        ToastAndroid.showWithGravity(
            "Appointment has been booked successfully",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        );

        navigation.navigate("Appointments");
    }

    return (
        <View>
            {
                Object.keys(route.params).length === 0 ? (
                    <Text>
                        Loading...
                    </Text>
                ) : (
                    <ScrollView>
                        <View style={styles.container}>
                            <Text style={styles.content}>
                                {`Shop: ${shop.shopName}`}
                            </Text>
                            <Text style={styles.content}>
                                {`Address: ${shop.address}`}
                            </Text>
                            <Text style={styles.content}>
                                {`Appointment Date: ${route.params.appointmentDate}`}
                            </Text>
                            <Text style={styles.content}>
                                {`Appointment Time: ${route.params.appointmentTime}`}
                            </Text>
                            <View>
                                <Text style={styles.content}>
                                    Selected Services: 
                                </Text>
                                <List>
                                    {
                                        route.params.selectedServices.map( (serviceId, index) => {
                                            return (
                                                <ListItem key={index}>
                                                    <Text style={{width: '90%'}}>
                                                        {shop.services[serviceId].name}
                                                    </Text>
                                                    <Text>
                                                        {shop.services[serviceId].price}
                                                    </Text>
                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>
                            </View>
                            <View>
                                <Text style={ { ...styles.content, fontWeight: 'bold' }}>
                                    {`Bill Amount: ${route.params.billAmt}`}
                                </Text>
                            </View>
                            <View style={styles.controls}>
                                <Button style={styles.cancelButton} onPress={handleCancel}>
                                    <Text style={styles.buttonText}>
                                        Cancel
                                    </Text>
                                </Button>
                                <Button style={styles.acceptButton} onPress={handleConfirm}>
                                    <Text style={styles.buttonText}>
                                        Confirm
                                    </Text>
                                </Button>
                            </View>
                        </View>
                    </ScrollView>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    container: {
        margin: 10,
    },

    content: {
        fontSize: 16,
        margin: 5,
    },

    controls: {
        margin: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    acceptButton: {
        backgroundColor: theme.palette.primary.main,
    },

    cancelButton: {
        backgroundColor: theme.palette.alert.main,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10,
    }
});

const mapStateToProps = (state) => ({
    shop: state.shop,
});

const mapActionsToProps = {
    addBooking,
    getShop,
}

export default connect(mapStateToProps, mapActionsToProps)(AppointmentReview);