import React from 'react';
import { useNavigation } from '@react-navigation/native';

//redux
import { connect } from 'react-redux';

//react-native
import { StyleSheet, Text, View } from 'react-native';

//native base
import { List, ListItem, Left, Right, Button } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import theme from '../theme';

const Services = (props) => {
    const { shop } = props.shop;
    
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Book Appointment");
    }

    return (
        <View style={styles.root}>
            <List style={styles.list}>
                <ScrollView>
                    {
                        shop.services.map( (service, index) => {
                            return (
                                <ListItem key={index}>
                                    <Left>
                                        <Text>
                                            {service.name}
                                        </Text>
                                    </Left>
                                    <Right>
                                        <Text>
                                            {service.price}
                                        </Text>
                                    </Right>
                                </ListItem>
                            )
                        })
                    }
                    {
                        shop.services.map( (service, index) => {
                            return (
                                <ListItem key={index}>
                                    <Left>
                                        <Text>
                                            {service.name}
                                        </Text>
                                    </Left>
                                    <Right>
                                        <Text>
                                            {service.price}
                                        </Text>
                                    </Right>
                                </ListItem>
                            )
                        })
                    }
                    {
                        shop.services.map( (service, index) => {
                            return (
                                <ListItem key={index}>
                                    <Left>
                                        <Text>
                                            {service.name}
                                        </Text>
                                    </Left>
                                    <Right>
                                        <Text>
                                            {service.price}
                                        </Text>
                                    </Right>
                                </ListItem>
                            )
                        })
                    }
                </ScrollView>
            </List>
            <View>
                <Button block style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>
                        Book Appointment
                    </Text>
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        height: '90%'
    },

    list: {
        height: '77%'
    },

    button: {
        backgroundColor: theme.palette.primary.main,
        alignSelf: 'center',
        width: "100%"
    },

    buttonText:{
        color: 'white',
        fontWeight: 'bold'
    }
});

const mapStateToProps = (state) => ({
    shop: state.shop,
});

export default connect(mapStateToProps, null)(Services);