import React from 'react';
import {View, Text, Button} from 'react-native';

const Semester3 = ({navigation}: any) => {
    return (
        <View>
            <Text>Semester 1</Text>
            <Button title="Go to Semester 3" onPress={() => navigation.navigate('OOP')} />
        </View>
    )
}

export default Semester3;
