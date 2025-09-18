import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, Platform, Image } from 'react-native';
import NormalButtons from '@/components/NormalButtons';

type Props = { navigation: any };

const BUTTON_HEIGHT = 48;
const LOGO_WIDTH   = 110;

const Navbar: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor="#000000" />
            <View style={styles.wrapper}>
                <View style={styles.buttonsRow}>

                    {/* Logo i samme højde som knapperne */}
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('@/assets/vimis22.png')}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>

                    {/* Knapper */}
                    <View style={styles.buttonWrapper}>
                        <NormalButtons
                            height={'100%'}
                            width={'100%'}
                            borderRadius={12}
                            borderColor={'#ffb000'}
                            backgroundColor={'#0a0a0a'}
                            textColor={'#ffffff'}
                            fontSize={16}
                            text={'About & Contact'}
                            textAlign={'center'}
                            borderWeight={2.5}
                            onPress={() => navigation.navigate('About')}
                            style={styles.buttonStyle}
                        />
                    </View>

                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#000000',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        zIndex: 100,
    },
    wrapper: {
        backgroundColor: '#000000',
        height: Platform.OS === 'ios' ? 70 : 66,
        justifyContent: 'center',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 10,
        elevation: 12,
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(255,176,0,0.4)',
    },
    buttonsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 22,
        gap: 20,
    },
    imageContainer: {
        height: BUTTON_HEIGHT,
        width: LOGO_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
    },
    buttonWrapper: {
        height: BUTTON_HEIGHT,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 180,
        borderRadius: 12,
    },
    buttonStyle: {
        shadowColor: '#ffb000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 12,
        elevation: 8,
        borderWidth: Platform.OS === 'ios' ? 2.5 : 2,
        borderColor: '#ffb000',
        backgroundColor: '#0a0a0a',
    },
});

export default Navbar;
