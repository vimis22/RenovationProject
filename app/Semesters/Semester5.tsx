import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Navbar from "@/components/Navbar";
import NormalText from "@/components/NormalText";

const Semester5 = ({navigation}: any) => {
    return (
        <View>
            <Navbar navigation={navigation} />
            <View style={styles.overAllContainer}>
                <NormalText text={"Semester 5"} fontSize={24} fontWeight={'bold'}/>
                <Button title="Go to Semester 5" onPress={() => navigation.navigate('OOP')} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    overAllContainer: {
        alignItems: 'center',
    }
})

export default Semester5;
