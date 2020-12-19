import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

// redux
import { connect } from 'react-redux';

// react-native
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

// native-base
import { List, ListItem, Button } from 'native-base';

// components
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import ShopHead from '../components/ShopHead';

import theme from '../theme';

const BookAppointment = (props) => {
  const { shop } = props.shop;

  const navigation = useNavigation();

  const [selectedServices, setSelectedServices] = useState([]);
  const [billAmt, setBillAmt] = useState(0);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    if (mode == 'date') {
      setAppointmentDate(`${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`);
    } else {
      setAppointmentTime(`${currentDate.getHours()}:${currentDate.getMinutes()}`);
    }
  };

  const showMode = (curMode) => {
    setShow(true);
    setMode(curMode);
  };

  const showDatePicker = () => {
    showMode('date');
  };

  const showTimePicker = () => {
    showMode('time');
  };

  const calculate = (price) => {
    setBillAmt(billAmt + price);
  };

  const handlePress = (serviceId) => () => {
    if (selectedServices.indexOf(serviceId) === -1) {
      setSelectedServices([...selectedServices, serviceId]);
      calculate(shop.services[serviceId].price);
    } else {
      const temp = selectedServices.filter((service) => service !== serviceId);
      setSelectedServices(temp);
      calculate(-shop.services[serviceId].price);
    }
  };

  const handleSubmit = () => {
    navigation.navigate('Review Appointment', {
      selectedServices,
      billAmt,
      appointmentDate,
      appointmentTime,
    });
  };

  return (
      <View style={styles.root}>
          <View style={styles.head}>
              <ShopHead />
          </View>
          <View style={styles.content}>
              <ScrollView>
                  <View style={styles.listContainer}>
                      <View>
                          <Text style={styles.label}>
                              Select Services
                          </Text>
                      </View>
                      <List style={styles.list}>
                          <ScrollView>
                              {
                                  shop.services.map((service, index) => (
                                      <TouchableHighlight
                                        onPress={handlePress(index)}
                                        activeOpacity={0.5}
                                        underlayColor="rgba(0,0,0,0.1)"
                                        key={service.serviceId}
                                      >
                                          <ListItem style={styles.item}>
                                              <Text>
                                                  {service.name}
                                              </Text>
                                              <Text style={styles.servicePrice}>
                                                  {service.price}
                                              </Text>
                                              {
                                              selectedServices.indexOf(index) !== -1 && (
                                                  <Icon style={styles.icon} name="check" />
                                              )
                                          }
                                          </ListItem>
                                      </TouchableHighlight>
                                  ))
                              }
                              {
                                shop.services.map((service, index) => (
                                    <TouchableHighlight
                                      onPress={handlePress(shop.services.length + index)}
                                      activeOpacity={0.5}
                                      underlayColor="rgba(0,0,0,0.1)"
                                      key={service.serviceId}
                                    >
                                        <ListItem style={styles.item}>
                                            <Text>
                                                {service.name}
                                            </Text>
                                            <Text style={styles.servicePrice}>
                                                {service.price}
                                            </Text>
                                            {
                                                // eslint-disable-next-line max-len
                                                selectedServices.indexOf(shop.services.length + index) !== -1 && (
                                                    <Icon style={styles.icon} name="check" />
                                                )
                                            }
                                        </ListItem>
                                    </TouchableHighlight>
                                ))
                            }
                          </ScrollView>
                      </List>
                      <View style={styles.pickerContiner}>
                          <Text style={styles.pickerHead}>
                              Book Your Appointment
                          </Text>
                          <View style={styles.pickerControls}>
                              <Button onPress={showDatePicker} bordered style={styles.pickerButton}>
                                  <Icon name="date-range" style={styles.pickerIcon} />
                                  <Text style={styles.pickerText}>
                                      Select Date
                                  </Text>
                              </Button>

                              <Button onPress={showTimePicker} bordered style={styles.pickerButton}>
                                  <Icon name="alarm" style={styles.pickerIcon} />
                                  <Text style={styles.pickerText}>
                                      Select Time
                                  </Text>
                              </Button>
                          </View>
                          <View style={styles.pickerControls}>
                              {
                                  appointmentDate.length > 0 && (
                                      <View>
                                          <Text style={styles.pickerData}>
                                              {`Date: ${appointmentDate}`}
                                          </Text>
                                      </View>
                                  )
                              }
                              {
                    appointmentTime.length > 0 && (
                        <View>
                            <Text style={styles.pickerData}>
                                {`Time: ${appointmentTime}`}
                            </Text>
                        </View>
                    )
                }
                          </View>
                      </View>
                  </View>
              </ScrollView>
          </View>
          <View>
              <Text style={styles.billAmount}>
                  {`Bill Amount: ${billAmt}`}
              </Text>
              <Button block style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>
                      Book Appointment
                  </Text>
              </Button>
          </View>
          <View>
              {
            show && (
                <DateTimePicker
                  testId="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={false}
                  display="default"
                  onChange={onChange}
                />
            )
        }
          </View>
      </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
  },

  head: {
    flexGrow: 0.2,
    height: '15%',
  },

  listContainer: {
    height: '35%',
    margin: 3,
  },

  list: {
    borderWidth: 1,
  },

  label: {
    fontSize: 15,
    margin: 4,
    fontWeight: 'bold',
  },

  pickerContiner: {
    margin: 5,
  },

  pickerText: {
    fontSize: 15,
    color: theme.palette.primary.main,
    padding: 10,
  },

  pickerData: {
    fontSize: 15,
    margin: 10,
  },

  pickerControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  pickerButton: {
    borderColor: theme.palette.primary.main,
    margin: 10,
  },

  pickerIcon: {
    color: theme.palette.primary.main,
    fontSize: 15,
    padding: 5,
  },

  pickerHead: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  serviceName: {
    alignSelf: 'stretch',
  },

  servicePrice: {
    position: 'absolute',
    left: '80%',
  },

  icon: {
    position: 'absolute',
    left: '95%',
    fontSize: 25,
    color: theme.palette.success.main,
  },

  content: {
    height: '70%',
  },

  billAmount: {
    fontSize: 20,
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  footer: {
    position: 'relative',
  },

  button: {
    backgroundColor: theme.palette.primary.main,
  },

  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

const mapStateToProps = (state) => ({
  shop: state.shop,
});

const mapActionsToProps = {

};

export default connect(mapStateToProps, mapActionsToProps)(BookAppointment);
