import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import OOP from "@/app/Subjects/OOP";
import COS from "@/app/Subjects/COS";
import DMA from "@/app/Subjects/DMA";
import AD from "@/app/Subjects/AD";
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

const Stack = createNativeStackNavigator();
export default function Subjects() {
    return(
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
    )
}
