import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Platform,
} from 'react-native';

const Progress = ({ step, steps, height }) => {
    return (
        <>
            <View style={styles.container}>
            <Text style={styles.text}>Debit card spending limit</Text>
            <Text style={styles.limit}>$345 | $5,000</Text>
            </View>
            <View style={styles.outerbar}>
                <View style={styles.innerbar} />
            </View>
        </>
    )
}

export default Progress;

const styles = StyleSheet.create({
    text:
    {
        fontSize: 12,
        fontWeight: '900',
        marginTop: 30
    },
    outerbar:
    {
            height: 20,
            backgroundColor: '#E5FAF0',
            borderRadius: 20,
            width: '100%',
            overflow: 'hidden',
            marginTop: 10
    },
    innerbar:{
        height: 20,
        borderRadius: 20,
        backgroundColor: '#01D167',
        width: '30%',
        position: 'absolute',
        left: 0,
        top: 0,
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    limit:
    {
        fontSize:12,
        marginTop: 30,
        fontWeight:'700'
    }
})