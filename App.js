import React from 'react';

// 네비게이터
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// icon
import Ionicons from 'react-native-vector-icons/Ionicons';

// 외부 컴포넌트
import SettingsScreen from './component/SettingsScreen';
import MyinfoScreen   from './component/KSK/MyinfoScreen';
import HomeScreen     from './component/JHS/HomeScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Myinfo: {
      screen: MyinfoScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Myinfo') {
          iconName = 'ios-person';
        } else if (routeName === 'Settings') {
          iconName = 'ios-settings';
        }
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 33}
            color={tintColor}
          />
        );
      },
      // bar option들
      tabBarOptions: {
        activeTintColor: '#ffffff',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'black',
        },
        showLabel: false,
      },
    }),
  },
);
export default createAppContainer(TabNavigator);