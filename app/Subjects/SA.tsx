import React from 'react';
import ScrollView = Animated.ScrollView;
import {Animated, StyleSheet, View} from "react-native";
import Navbar from "@/components/Navbar";
import NormalText from "@/components/NormalText";

const SA = ({navigation}: any) => {
    return (
        <ScrollView>
            <Navbar navigation={navigation} />
            <View style={styles.container}>
                <NormalText text={"Software Architecture"} fontSize={24} fontWeight={'bold'}/>
                {/* Paste here the Lectures. */}
            </View>
        </ScrollView>
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

export default SA;
