import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { styles } from './style';
import  CardView  from '../../components/CardView';

export function GarageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.cameraBox}>
                <View style={styles.triangleCorner}></View>
                <View style={[styles.triangleCorner, styles.triangleCornerTopRight]}></View>
                <View style={[styles.triangleCorner, styles.triangleCornerBottomLeft]}></View>
                <View style={[styles.triangleCorner, styles.triangleCornerBottomRight]}></View>
                <CardView />
            </View>
            
            <StatusBar style="auto" />
        </View>
    );
}