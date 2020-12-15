import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icons
import Icon from 'react-native-vector-icons/MaterialIcons';

//screen
import Home from './Home';
import Explore from './Explore';
import BookingList from './BookingList';

import theme from '../theme';

const Main = (props) => {
    const Tab = createBottomTabNavigator();

    const screenOptions = ({ route }) => ({
        tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.name) {
                case 'Home':
                    iconName = 'home';
                    break;
            
                case 'Explore':
                    iconName = 'explore'
                    break;

                case 'Appointments':
                    iconName = 'date-range';
                    break;

                default:
                    break;
            }

            return <Icon name={iconName} size={25} color={color} />
        }
    });

    const tabOptions = {
        activeTintColor: theme.palette.primary.main,
        inactiveTintColor: 'darkgray'
    }

    return (
        <Tab.Navigator initialRouteName="Home" 
            screenOptions={screenOptions} tabBarOptions={tabOptions}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Appointments" component={BookingList} />
            <Tab.Screen name="Explore" component={Explore} />
        </Tab.Navigator>
    )
}

export default Main;