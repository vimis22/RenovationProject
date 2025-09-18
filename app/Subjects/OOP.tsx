import React from 'react';
import {Button, View, Text, StyleSheet} from "react-native";
import Navbar from "@/components/Navbar";

const OOP = ({navigation}: any) => {
    return (
        <View>
            <Navbar navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.title}>OOP</Text>
                <Button title={'Go Back'} onPress={() => navigation.goBack()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    }
});

export default OOP;
