import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 8,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 200,
    },
    imageLogo: {
        flex: 1,
        width: '40%',
        height: '40%',
        resizeMode: 'contain',
    },
    carDetailContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: .5,
        borderTopColor: '#ccc',
    },
    carName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        fontStyle: 'italic',
        marginTop: 20,
        textAlign: 'center',
    },
    releaseYear: {
        fontSize: 18,
        color: '#c5c5c5',
    },
    carImage: {
        flex: 5,
        alignSelf: 'center',
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
        marginTop: 16,
    }, 
    previousButtonContainer: {
        position: 'absolute',
        left: 8,
        top: '50%',
        transform: [{ translateY: -24 }],
    },
    nextButtonContainer: {
        position: 'absolute',
        right: 8,
        top: '50%',
        transform: [{ translateY: -24 }],
    },
    buyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: .5,
        borderTopColor: '#ccc',
    },
    buyButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        backgroundColor: '#dda326',
        padding: 12,
        borderRadius: 5,
        width: '80%',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
    priceControlsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    }
});