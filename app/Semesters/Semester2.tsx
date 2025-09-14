import React from 'react';
import {Button, Text, View} from 'react-native';

const Semester2 = ({navigation}: any) => {
    return (
        <View>
            <Text>Semester 1</Text>
            <Button title="Go to Semester 2" onPress={() => navigation.navigate('OOP')} />
        </View>
    )
}

export default Semester2;
