import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Dimensions,
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 0,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: "center",
        alignItems: "flex-end",
        padding: 20,
        width: Dimensions.get('window').width
    },
    txtName: {
        color: '#fff',
        paddingBottom: 160,
        fontSize: 25,
        marginRight: 53
    }
})

export default props => {
    return (
        <View style={styles.display}>
            <ImageBackground source={require('../img/imagem.png')} style={styles.imageBackground}>
                <Text style={styles.txtName}>Jacqueliny Calculator</Text>
            <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
            </ImageBackground>
        </View>
    )
}