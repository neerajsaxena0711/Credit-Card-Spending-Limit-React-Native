import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch, ActivityIndicator, } from 'react-native';
import Progress from '../Components/ProgressBar';
import { getUserData } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const DebitCard = ({ navigation }) => {

    const [isWeeklyEnabled, setWeeklyEnabled] = useState(false);
    const toggleWeekly = () => {
        setWeeklyEnabled(previousState => !previousState);
    }

    const [isFreezeEnabled, setFreezeEnabled] = useState(false);
    const toggleFreeze = () => {
        setFreezeEnabled(previousState => !previousState);
    }

    const { userData } = useSelector(state => state.userDataReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData());
    }, []);

    function renderCard() {
        return (
            <View style={styles.card_container}>
                <Text style={styles.debitCardName}>
                    {userData.name}
                </Text>
                <Text style={styles.debitCardNum}>
                    {userData.card_no}
                </Text>
                <Text style={styles.debitCardNum}>
                    {userData.validity} CVV: {userData.cvv}
                </Text>
            </View>
        )
    }

    if (!userData) {
        return (
            <ActivityIndicator style={styles.spinner} size="large" color="black" />
        )
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Debit Card</Text>
                    <Text style={styles.text_balance}>Available balance</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Text style={styles.chip}>$$</Text>
                        <Text style={styles.text_balance_amount}>{userData.balance}</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                    {renderCard()}
                    <Progress step={1} steps={10} height={20}></Progress>

                    <View style={styles.item_container}>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.square}></View>
                                <Text style={styles.itemTitleText}>Top-up account</Text>
                            </View>
                        </View>
                        <Text style={styles.itemDescText}>Deposit money to use your account to use with card</Text>
                    </View>

                    <View style={styles.item_container}>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.square}></View>
                                <Text style={styles.itemTitleText} onPress={() => navigation.navigate("SpendingLimit")}>Weekly Spending Limit</Text>
                            </View>
                            <View style={styles.switch}>
                                <Switch trackColor={{ false: "#EFEFEF", true: "#01D167" }}
                                    thumbColor={isWeeklyEnabled ? "#01D167" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => toggleWeekly()}
                                    value={isWeeklyEnabled}></Switch>
                            </View>
                        </View>
                        <Text style={styles.itemDescText}>You haven't set any spending limit on card</Text>
                    </View>


                    <View style={styles.item_container}>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <View style={styles.square}></View>
                                <Text style={styles.itemTitleText}>Freeze Card</Text>
                            </View>
                            <View style={styles.switch}>
                                <Switch trackColor={{ false: "#EFEFEF", true: "#01D167" }}
                                    thumbColor={isFreezeEnabled ? "#01D167" : "#f4f3f4"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={() => toggleFreeze()}
                                    value={isFreezeEnabled}></Switch>
                            </View>
                        </View>
                        <Text style={styles.itemDescText}>
                            Your debit card is currently active
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default DebitCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C365A'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 100
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
        marginBottom: 25
    },
    text_balance: {
        color: '#fff',
        fontSize: 13,
        marginBottom: 10
    },
    text_balance_amount: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 10
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    debitCardName: {
        color: '#FFF',
        fontWeight: '700',
        fontSize: 20,
        marginTop: 30
    },
    debitCardNum: {
        color: '#FFF',
        fontWeight: '400',
        fontSize: 16,
        marginTop: 20
    },
    progress: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 20
    },
    item: {
        backgroundColor: '#FFF',
        paddingHorizontal: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingTop: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 26,
        height: 26,
        backgroundColor: '#325BAF',
        borderRadius: 12,
        marginRight: 15,
    },
    itemTitleText: {
        maxWidth: '90%',
        color: '#7E87A0',
        fontWeight: '700',
        fontSize: 15,
    },
    itemDescText: {
        maxWidth: '100%',
        fontSize: 11,
        color: '#DFDFDF',
        fontWeight: '700',
        paddingLeft: 50,
    },
    switch: {
    },
    chip: {
        width: 50,
        height: 30,
        padding: 5,
        backgroundColor: '#01D167',
        color: '#FFF',
        fontWeight: '700',
        textAlign: 'center',
        borderRadius: 5
    },
    spinner:
    {
        flex: 1,
        alignSelf: 'center'
    },
    card_container:
    {
        marginTop: -70,
        marginHorizontal: 5,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 10,
        backgroundColor: '#01D167',
    },
    item_container:
    {
    }
});