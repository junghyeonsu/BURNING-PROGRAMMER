import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// axios
import axios from "axios";

// expo-location
import * as Location from "expo-location";

// 외부 컴포넌트
import Loading from './Loading';
import AppleMap from './AppleMap';

//API KEY들
const API_KEY = '6420351a926dc59bf08ae6d12e5cc3f2';

export default class HomeScreen extends Component {

    state = {
      isLoading : true,
      temp : "",
      latitude : 0,
      longitude: 0
    }
  
    // 처음 시작되면 위치를 받아옴
    componentDidMount(){
      this.getLocation();
    }
  
    // 날씨 얻어오는 함수 : getLocation함수 안에 있음
    getWeather = async ( latitude, longitude ) => {
      const { data } = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
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
        } catch (error) {
          Alert.alert("당신의 위치를 찾을 수 없어요!", "슬퍼요");
        }
     }
     
     /* 렌더 부분         
       전체적인 구조
        <컨테이너>
           <애플 맵 />
           <위치 표시 />
        <컨테이너 /> */
     render() {
       const {isLoading, temp, latitude, longitude} = this.state;
      return (
        // 로딩이 안됐으면 Loading 컴포넌트를 띄움
         isLoading ? <Loading /> : 
         // 전체 Container
         <View style={styles.container}>
           <View style={styles.map}>
              <AppleMap />
           </View>
           <View style={{flex:1}}>
            <Text style={styles.location}>
                경도 : {latitude.toFixed(2)}{"\n"}
                위도 : {longitude.toFixed(2)}
            </Text>
           </View>
         </View>
         // 위로 올리고 싶은 component를 (z-index) 아래로 내림 
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
        fontSize: 20,
        textAlignVertical: 'center',
        fontWeight: "bold",
        marginTop: 35
      },
      map:{
        flex: 1,
        ...StyleSheet.absoluteFillObject
      }
  })