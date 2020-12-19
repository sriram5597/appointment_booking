import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// native base
import {
  Header, Body, Title, Right, Subtitle,
} from 'native-base';

// icons
import Icon from 'react-native-vector-icons/MaterialIcons';

import theme from '../theme';

const HeaderComponent = () => {
  const handleNotification = () => {
    console.log('pressed');
  };

  return (
      <Header transparent>
          <Body>
              <Title style={styles.title}>
                  Welcome User
              </Title>
              <Subtitle style={styles.subtitle}>
                  Lives in Location
              </Subtitle>
          </Body>
          <Right>
              <TouchableOpacity onPress={handleNotification}>
                  <Icon name="notifications" color={theme.palette.primary.main} size={20} />
              </TouchableOpacity>
          </Right>
      </Header>
  );
};

const styles = StyleSheet.create({
  title: {
    color: theme.palette.primary.main,
    fontSize: 20,
    fontWeight: 'bold',
  },

  subtitle: {
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 15,
    color: 'darkgray',
  },
});

export default HeaderComponent;
