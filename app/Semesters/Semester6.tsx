import React from 'react';
import {View, Text, Button} from 'react-native';

const Semester6 = ({navigation}: any) => {
    return (
        <View>
            <Text>Semester 1</Text>
            <Button title="Go to Semester 6" onPress={() => navigation.navigate('OOP')} />
        </View>
    )
}

export default Semester6;
