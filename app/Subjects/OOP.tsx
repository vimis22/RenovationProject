import React from 'react';
import {Button, View, Text} from "react-native";

const OOP = ({navigation}: any) => {
    return (
        <View>
            <Text>OOP</Text>
            <Button title={'KLIK'} onPress={() => navigation.navigate('OOP')} />
        </View>
    )
}

export default OOP;
