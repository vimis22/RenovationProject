import React from 'react';
import {View, Text, Button} from 'react-native';

const Semester4 = ({navigation}: any) => {
    return (
        <View>
            <Text>Semester 1</Text>
            <Button title="Go to Semester 4" onPress={() => navigation.navigate('OOP')} />
        </View>
    )
}

export default Semester4;
