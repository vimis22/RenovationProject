import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Semester1 from "@/app/Semesters/Semester1";
import Semester2 from "@/app/Semesters/Semester2";
import Semester3 from "@/app/Semesters/Semester3";
import Semester4 from "@/app/Semesters/Semester4";
import Semester5 from "@/app/Semesters/Semester5";
import Semester6 from "@/app/Semesters/Semester6";
import HomeScreen from "@/app/Semesters/HomeScreen";
import Subjects from "@/app/Subjects";

export default function App(){
    const Stack = createNativeStackNavigator();
    return (
      <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
              <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{headerShown: false}}>
                  <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
                  <Stack.Screen name={'Semester1'} component={Semester1} />
                  <Stack.Screen name={'Semester2'} component={Semester2} />
                  <Stack.Screen name={'Semester3'} component={Semester3} />
                  <Stack.Screen name={'Semester4'} component={Semester4} />
                  <Stack.Screen name={'Semester5'} component={Semester5} />
                  <Stack.Screen name={'Semester6'} component={Semester6} />
                  <Stack.Screen name={'Subjects'} component={Subjects} />
              </Stack.Navigator>
          </NavigationContainer>
      </GestureHandlerRootView>
  )
};
