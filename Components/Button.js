import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

export default props => {
    const stylesButton = [Estilo.button]
    if (props.double) stylesButton.push(Estilo.buttonDouble)
    if (props.triple) stylesButton.push(Estilo.buttonTriple)
    if (props.operation) stylesButton.push(Estilo.operationButton)

    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const Estilo=StyleSheet.create({

    button:{
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#fa7042',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        color: '#fff'
    },
    operationButton: {
        color: '#fff',
        backgroundColor:  '#aa3d98',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width /4) * 2,
    },
    buttonTriple:{
        width: (Dimensions.get('window').width / 4) * 3,
    }
})