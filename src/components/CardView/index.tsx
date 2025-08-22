import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import { styles } from './style';
import Logo from '../../../assets/logo.png';
import { CAR_ASSETS_BASE_URL } from '../../constants/car';
import { CarModel } from './props';
import { handleNextItem, handlePreviousItem, loadCarData } from './action';

export default function CardView() {
    const [carData, setCarData] = useState<CarModel | null>(null);

    useEffect(() => {
        (async () => {
            await loadCarData(5, setCarData);
        })();
    }, []);

    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image style={styles.imageLogo} source={Logo} />
        </View>
    );

    const renderCarDetail = () => (
        <View style={styles.carDetailContainer}>
            <Text style={styles.carName}>{carData?.carName}</Text>
            <Text style={styles.releaseYear}>{carData?.releaseYear}</Text>
        </View>
    );

    const renderPreviousButton = () => (
        <View style={styles.previousButtonContainer}>
            <Button
                color={'#000000'}
                title='<'
                onPress={() => handlePreviousItem(carData, setCarData)}>
            </Button>
        </View>
    );

    const renderCarImage = () => (
        <Image style={styles.carImage} source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }} />
    );

    const renderNextButton = () => (
        <View style={styles.nextButtonContainer}>
            <Button
                color={'#000000'}
                title='>'
                onPress={() => handleNextItem(carData, setCarData)}>
            </Button>
        </View>
    );

    const renderBuyButton = () => (
        <View style={styles.buyContainer}>
            <TouchableOpacity style={styles.buyButton}>
                <AntDesign name="shoppingcart" size={24} color="#000000" />
                <Text style={styles.text}>Buy Now</Text>
            </TouchableOpacity>
        </View>
    )

    const renderPriceControls = () => (
        <View style={styles.priceControlsContainer}>
            <Text style={styles.price}>{carData?.price}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {renderLogoBox()}
            {renderCarDetail()}
            {renderPreviousButton()}
            {renderCarImage()}
            {renderNextButton()}
            {renderBuyButton()}
            {renderPriceControls()}
        </View>
    );
}