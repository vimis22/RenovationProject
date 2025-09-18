import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from "react-native";

interface NormalButtonsProps {
    height: any;
    width: any;
    borderRadius: number;
    borderColor: string;
    borderWeight?: number;
    backgroundColor: string;
    textColor: string;
    fontSize: number;
    text: string;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    onPress: () => void;
    style?: any;
    visible?: boolean;
}

const NormalButtons = (props: NormalButtonsProps) => {
    const { visible = true } = props;

    if (!visible) return null;

    return (
        <TouchableOpacity
            style={[{
                height: props.height,
                width: props.width,
                backgroundColor: props.backgroundColor,
                borderColor: props.borderColor,
                borderWidth: props.borderWeight,
                borderRadius: props.borderRadius,
                justifyContent: 'center',
                alignItems: 'center',
            }, props.style]}
            onPress={props.onPress}
        >
            <Text style={{
                color: props.textColor,
                textAlign: props.textAlign,
                fontSize: props.fontSize,
                fontWeight: 'bold',
                letterSpacing: 0.5,
                paddingHorizontal: 4,
            }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

export default NormalButtons;
