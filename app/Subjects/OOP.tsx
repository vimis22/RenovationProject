import React from 'react';
import {View, StyleSheet, Animated} from "react-native";
import Navbar from "@/components/Navbar";
import NormalText from "@/components/NormalText";
import NormalButtons from "@/components/NormalButtons";
import ScrollView = Animated.ScrollView;

const OOP = ({navigation}: any) => {
    return (
        <ScrollView>
            <Navbar navigation={navigation} />
            <View style={styles.container}>
                <NormalText text={"Objectoriented Programming"} fontSize={24} fontWeight={'bold'}/>
                <NormalButtons text={'Lecture 1'} height={80} width={180} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} />
                <NormalButtons text={'Lecture 2'} height={80} width={180} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'Lecture 3'} height={80} width={180} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'Lecture 4'} height={80} width={180} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'Lecture 5'} height={80} width={180} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'Lecture 6'} height={80} width={180} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'Lecture 7'} height={80} width={180} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'Lecture 8'} height={80} width={180} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'Lecture 9'} height={80} width={180} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'Lecture 10'} height={80} width={180} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'Lecture 11'} height={80} width={180} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'Lecture 12'} height={80} width={180} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
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

export default OOP;
