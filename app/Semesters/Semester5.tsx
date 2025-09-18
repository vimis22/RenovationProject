import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from "@/components/Navbar";
import NormalText from "@/components/NormalText";
import NormalButtons from "@/components/NormalButtons";

const Semester5 = ({navigation}: any) => {
    return (
        <View>
            <Navbar navigation={navigation} />
            <View style={styles.overAllContainer}>
                <NormalText text={"Semester 5"} fontSize={24} fontWeight={'bold'}/>
                <NormalButtons text={'HCSD'} height={80} width={80} onPress={() => navigation.navigate('HCSD')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} />
                <NormalButtons text={'ICPS'} height={80} width={80} onPress={() => navigation.navigate('ICPS')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'MAI'} height={80} width={80} onPress={() => navigation.navigate('MAI')}
                               borderRadius={10} borderColor={'#ccc'} backgroundColor={'#000000'} textColor={'#ffffff'} fontSize={16} marginTop={10}/>
                <NormalButtons text={'CS'} height={80} width={80} onPress={() => navigation.navigate('CS')}
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

export default Semester5;
