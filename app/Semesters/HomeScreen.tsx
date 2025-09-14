import React from 'react';
import {View, Button, StyleSheet} from "react-native";

const HomeScreen = ({navigation}: any) => {
  return (
      <View style={styles.overAllBoxFrame}>
          <View style={styles.buttonContainer}>
              <Button title={'1'} onPress={() => navigation.navigate('Semester1')} />
          </View>
          <View style={styles.buttonContainer}>
              <Button title={'2'} onPress={() => navigation.navigate('Semester2')} />
          </View>
          <View style={styles.buttonContainer}>
              <Button title={'3'} onPress={() => navigation.navigate('Semester3')} />
          </View>
          <View style={styles.buttonContainer}>
              <Button title={'4'} onPress={() => navigation.navigate('Semester4')} />
          </View>
          <View style={styles.buttonContainer}>
              <Button title={'5'} onPress={() => navigation.navigate('Semester5')} />
          </View>
          <View style={styles.buttonContainer}>
              <Button title={'6'} onPress={() => navigation.navigate('Semester6')} />
          </View>
      </View>
  )
};

const styles = StyleSheet.create({
    overAllBoxFrame: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    buttonContainer: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
});

export default HomeScreen;
