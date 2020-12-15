import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

//expo
import { useFonts } from 'expo-font';

//components
import Main from './screens/Main';

//screens
import Shop from './screens/Shop';
import BookAppointment from './screens/BookAppointment';
import ReviewAppointment from './screens/AppointmentReview';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')
  });

  const StackNavigator = createStackNavigator();

  return (
    <Provider store={store}>
        <NavigationContainer>
          {
            !fontsLoaded ? (
              <View>
                <Text>
                  Loading....
                </Text>
              </View>
            ) : (
                  <StackNavigator.Navigator initialRouteName='Main'>
                    <StackNavigator.Screen name="Main" component={Main} options={{ headerShown: false }} />
                    <StackNavigator.Screen name="Shop" component={Shop} />
                    <StackNavigator.Screen name="Book Appointment" component={BookAppointment} />
                    <StackNavigator.Screen name="Review Appointment" component={ReviewAppointment} />
                  </StackNavigator.Navigator>
            )
          }
        </NavigationContainer >
    </Provider>
  );
}