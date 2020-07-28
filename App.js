import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 네비게이터
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// icon
import Ionicons from 'react-native-vector-icons/Ionicons';

// 외부 컴포넌트
import SettingsScreen from './component/SettingsScreen';
import MyinfoScreen   from './component/KSK/MyinfoScreen';
import HomeScreen     from './component/JHS/HomeScreen';
import SearchScreen   from './component/KCH/SearchScreen';
import AddPostScreen  from './component/LJW/AddPostScreen';

// App 컴포넌트 (메인임)
export default class App extends Component {
  render(){
    return(
      <AppContainer />
      );
    }
};

// 밑에 네비게이션 바 나타내는 부분
const bottomTabNavigator = createBottomTabNavigator(
  // 네비게이션
  {
    현수: {
      screen: HomeScreen,
      navigationOptions: {

      },
    },

    서경: {
      screen: MyinfoScreen,
    },

    지원: {
      screen: AddPostScreen
    },

    충환: {
      screen: SearchScreen
    }
  },
  //네비게이션 각종 설정들
  {
    //처음 시작 화면
    initialRouteName: '현수',
    //밑에 bar 옵션들
    tabBarOptions: {
      labelStyle: {
        fontSize: 20,
        margin: 0,
        padding: 0,
      },
    },

  },
);

// bottomTabNavigator를 컴포넌트화 시켜줌
const AppContainer = createAppContainer(bottomTabNavigator);