import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from "@/components/Navbar";
import NormalText from "@/components/NormalText";
import NormalButtons from "@/components/NormalButtons";

const Semester1 = ({navigation}: any) => {
    return(
        <View>
            <Navbar navigation={navigation} />
            <View style={styles.overAllContainer}>
                <NormalText text={"Semester 1"} fontSize={24} fontWeight={'bold'}/>
                <NormalButtons text={'OOP'} height={80} width={80} onPress={() => navigation.navigate('OOP')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} />
                <NormalButtons text={'SDA'} height={80} width={80} onPress={() => navigation.navigate('SDA')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'COS'} height={80} width={80} onPress={() => navigation.navigate('COS')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
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
