import React from 'react';
import {View, Text, Button} from 'react-native';

const Semester5 = ({navigation}: any) => {
    return (
        <View>
            <Text>Semester 1</Text>
            <Button title="Go to Semester 5" onPress={() => navigation.navigate('OOP')} />
        </View>
    )
}

export default Semester5;
