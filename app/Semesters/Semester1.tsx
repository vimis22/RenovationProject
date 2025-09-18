import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Navbar from "@/components/Navbar";
import NormalText from "@/components/NormalText"; // Assuming Navbar expects `navigation` as a prop

const Semester1 = ({navigation}: any) => {
    return(
        <View>
            <Navbar navigation={navigation} />
            <View style={styles.overAllContainer}>
                <NormalText text={"Semester 1"} />
                <Button title="Go to Semester 1" onPress={() => navigation.navigate('OOP')} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    overAllContainer: {
        alignItems: 'center',
    }
})
export default Semester1;
