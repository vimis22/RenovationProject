import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OOP from "@/app/Subjects/OOP";
import Semester1 from "@/app/Semesters/Semester1";
import Semester2 from "@/app/Semesters/Semester2";
import Semester3 from "@/app/Semesters/Semester3";
import Semester4 from "@/app/Semesters/Semester4";
import Semester5 from "@/app/Semesters/Semester5";
import Semester6 from "@/app/Semesters/Semester6";
import HomeScreen from "@/app/Semesters/HomeScreen";
import DMA from "@/app/Subjects/DMA";
import AD from "@/app/Subjects/AD";
import COS from "@/app/Subjects/COS";
import VOP from "@/app/Subjects/VOP";
import SDA from "@/app/Subjects/SDA";
import CS from "@/app/Subjects/CS";
import CLA from "@/app/Subjects/CLA";
import DM from "@/app/Subjects/DM";
import HCSD from "@/app/Subjects/HCSD";
import ICPS from "@/app/Subjects/ICPS";
import KI from "@/app/Subjects/KI";
import MAI from "@/app/Subjects/MAI";
import OSDS from "@/app/Subjects/OSDS";
import POM from "@/app/Subjects/POM";
import SA from "@/app/Subjects/SA";
import VT from "@/app/Subjects/VT";
export default function App(){
    const Stack = createNativeStackNavigator();
    return (
      <GestureHandlerRootView style={{flex: 1}}>
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
      </GestureHandlerRootView>
  )
};

const Stack = createNativeStackNavigator();
const Subjects = () => {
    return(
        <GestureHandlerRootView style={{flex: 1}}>
            <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{headerShown: false}}>
                <Stack.Screen name={'OOP'} component={OOP} />
                <Stack.Screen name={'COS'} component={COS} />
                <Stack.Screen name={'DMA'} component={DMA} />
                <Stack.Screen name={'AD'} component={AD} />
                <Stack.Screen name={'VOP'} component={VOP} />
                <Stack.Screen name={'SDA'} component={SDA} />
                <Stack.Screen name={'CS'} component={CS} />
                <Stack.Screen name={'CLA'} component={CLA} />
                <Stack.Screen name={'DM'} component={DM} />
                <Stack.Screen name={'HCSD'} component={HCSD} />
                <Stack.Screen name={'ICPS'} component={ICPS} />
                <Stack.Screen name={'KI'} component={KI} />
                <Stack.Screen name={'MAI'} component={MAI} />
                <Stack.Screen name={'OSDS'} component={OSDS} />
                <Stack.Screen name={'POM'} component={POM} />
                <Stack.Screen name={'SA'} component={SA} />
                <Stack.Screen name={'VT'} component={VT} />
            </Stack.Navigator>
        </GestureHandlerRootView>
    )
}
