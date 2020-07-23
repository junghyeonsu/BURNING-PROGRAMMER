import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// axios
import axios from "axios";

// expo-location
import * as Location from "expo-location";

// 외부 컴포넌트
import Loading from './Loading';

//API KEY들
const API_KEY = '6420351a926dc59bf08ae6d12e5cc3f2';

export default class HomeScreen extends Component {

    state = {
      isLoading : true,
      temp : "",
      latitude : 0,
      longitude: 0
    }
  
    componentDidMount(){
      this.getLocation();
    }
  
    // 날씨 얻어오는 함수 : getLocation함수 안에 있음
    getWeather = async ( latitude, longitude ) => {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      // console.log(data);
      this.setState({
        temp: data.main.temp,
        isLoading : false
      })
    }
  
     // 경도, 위도 받아오는 함수
     getLocation = async() => {
        try {
         await Location.requestPermissionsAsync();
          const { 
            coords: { latitude, longitude }
          } = await Location.getCurrentPositionAsync();
          this.getWeather(latitude, longitude);
          this.setState({
            latitude : latitude,
            longitude: longitude
          })
          // console.log(latitude, longitude);
        } catch (error) {
          Alert.alert("당신의 위치를 찾을 수 없어요!", "슬퍼요");
        }
     }
  
     render() {
       const {isLoading, temp, latitude, longitude} = this.state;
      return (
         isLoading ? <Loading /> : 
         <View style={styles.container}>
           <Text style={styles.location}>
              경도 : {latitude}
           </Text>
           <Text style={styles.location}>
              위도 : {longitude}
           </Text>
           <Text style={styles.temp}>
              온도 : {temp}
           </Text>
         </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
      container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#efeff5"
      },
      location:{
        flex: 1,
        fontSize: 15,
        textAlignVertical: 'center',
        fontWeight: "bold"
      },
      temp:{
        flex: 1,
        fontSize: 15,
        textAlignVertical: 'center',
        fontWeight: "bold"
      }
  })