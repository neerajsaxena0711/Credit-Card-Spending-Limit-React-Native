import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Platform,
    TextInput
} from 'react-native';

const SpendingLimit = ({ navigation }) => {
    const [text, onChangeText] = React.useState("");
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Spending Limit</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.text_footer}>Set a weekly debit card spending limit</Text>
                <View style={styles.amount_container}>
                    <Text style={styles.chip}>$$</Text>
                    <TextInput underlineColorAndroid='rgba(0,0,0,0)'
                        style={styles.text_limit_amount}
                        onChangeText={onChangeText}
                        value={text}
                    />
                </View>
                <View style={styles.separtor} />
                <Text style={styles.disclaimer}>Here weekly means the last 7 days - not the calendar week.</Text>
                <View style={styles.amount_container} >
                    <Text style={styles.chip_two}>$$ 5,000</Text>
                    <Text style={styles.chip_two}>$$ 10,000</Text>
                    <Text style={styles.chip_two}>$$ 20,000</Text>
                </View>
                <Text onPress={() => navigation.popToTop()} style={styles.submit}>Save</Text>
            </View>
        </View>
    )
}

export default SpendingLimit;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C365A'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        paddingBottom: 90
    },
    text_footer: {
        color: '#808080',
        fontSize: 14,
        fontWeight: '900'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    text_limit_amount: {
        color: '#222222',
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 10
    },
    disclaimer: {
        color: '#D9D9D9',
        fontWeight: '700',
        fontSize: 11,
        marginTop: 20
    },
    chip:
    {
        width: 50,
        height: 30,
        padding: 5,
        backgroundColor: '#01D167',
        color: '#FFF',
        fontWeight: '700',
        textAlign: 'center',
        borderRadius: 5
    },
    amount_container:
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
    chip_two:
    {
        marginHorizontal: 5,
        width: 110,
        height: 30,
        padding: 5,
        backgroundColor: '#EFFCF4',
        color: '#4EDE95',
        fontWeight: '700',
        textAlign: 'center',
        borderRadius: 5,
        marginTop: 20,
        fontSize: 12
    },
    submit:
    {
        borderRadius: 25,
        paddingHorizontal: 140,
        paddingVertical: 15,
        backgroundColor: '#01D167',
        color: '#FFF',
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
    },
    separtor: {
        marginTop: 12,
        borderBottomColor: '#F9F9F9',
        borderBottomWidth: 1,
    },
});