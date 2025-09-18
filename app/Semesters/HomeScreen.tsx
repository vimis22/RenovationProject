import React from 'react';
import {View, StyleSheet} from "react-native";
import Navbar from "@/components/Navbar";
import NormalButtons from "@/components/NormalButtons";

const HomeScreen = ({navigation}: any) => {
  return (
      <View style={styles.container}>
          <View style={styles.navbarContainer}>
              <Navbar navigation={navigation} />
          </View>

          <View style={styles.overAllBoxFrame}>
              <View style={styles.buttonRow}>
                  <View style={styles.buttonContainer}>
                      <NormalButtons
                          height={80}
                          width={80}
                          borderRadius={40}
                          borderColor="#ffb000"
                          borderWeight={2}
                          backgroundColor="#f0f8ff"
                          textColor="#ffb000"
                          fontSize={24}
                          text="1"
                          textAlign="center"
                          onPress={() => navigation.navigate('Semester1')}
                      />
                  </View>
                  <View style={styles.buttonContainer}>
                      <NormalButtons
                          height={80}
                          width={80}
                          borderRadius={40}
                          borderColor="#ffb000"
                          borderWeight={2}
                          backgroundColor="#f0f8ff"
                          textColor="#ffb000"
                          fontSize={24}
                          text="2"
                          textAlign="center"
                          onPress={() => navigation.navigate('Semester2')}
                      />
                  </View>
              </View>

              <View style={styles.buttonRow}>
                  <View style={styles.buttonContainer}>
                      <NormalButtons
                          height={80}
                          width={80}
                          borderRadius={40}
                          borderColor="#ffb000"
                          borderWeight={2}
                          backgroundColor="#f0f8ff"
                          textColor="#ffb000"
                          fontSize={24}
                          text="3"
                          textAlign="center"
                          onPress={() => navigation.navigate('Semester3')}
                      />
                  </View>
                  <View style={styles.buttonContainer}>
                      <NormalButtons
                          height={80}
                          width={80}
                          borderRadius={40}
                          borderColor="#ffb000"
                          borderWeight={2}
                          backgroundColor="#f0f8ff"
                          textColor="#ffb000"
                          fontSize={24}
                          text="4"
                          textAlign="center"
                          onPress={() => navigation.navigate('Semester4')}
                      />
                  </View>
              </View>

              <View style={styles.buttonRow}>
                  <View style={styles.buttonContainer}>
                      <NormalButtons
                          height={80}
                          width={80}
                          borderRadius={40}
                          borderColor="#ffb000"
                          borderWeight={2}
                          backgroundColor="#f0f8ff"
                          textColor="#ffb000"
                          fontSize={24}
                          text="5"
                          textAlign="center"
                          onPress={() => navigation.navigate('Semester5')}
                      />
                  </View>
                  <View style={styles.buttonContainer}>
                      <NormalButtons
                          height={80}
                          width={80}
                          borderRadius={40}
                          borderColor="#ffb000"
                          borderWeight={2}
                          backgroundColor="#f0f8ff"
                          textColor="#ffb000"
                          fontSize={24}
                          text="6"
                          textAlign="center"
                          onPress={() => navigation.navigate('Semester6')}
                      />
                  </View>
              </View>
          </View>
      </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    navbarContainer: {
        marginBottom: 10,
    },
    overAllBoxFrame: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingVertical: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
    },
    buttonContainer: {
        marginHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen;
