import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

class AppleMap extends Component {
  render(){
    return (
        <MapView style={{flex: 1}} />
    );
  }
};

const styles = StyleSheet.create({
    
})

export default AppleMap;