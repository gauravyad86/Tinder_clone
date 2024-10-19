import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation
import { Entypo, FontAwesome, FontAwesome6, Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function HompagestarSelect () {
    const navigation = useNavigation();  // Initialize navigation

    return (
        <SafeAreaView style={ styles.safeContainer }>
            <ScrollView style={ styles.container0 } contentContainerStyle={ { flexGrow: 1 } }>
                <View style={ styles.container }>
                    {/* Cross Icon */ }
                    <View style={ { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }>
                        <Text style={ styles.crossText }>Google Play</Text> 
                        <TouchableOpacity style={ styles.crossText } onPress={ () => navigation.goBack() }>
                            <Entypo name="cross" size={ 24 } color="white" /> 
                        </TouchableOpacity>
                    </View>
                    <View
                        style={ {
                            borderBottomColor: '#C4C5B3',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            marginTop: 10
                        } }
                    />
                    <View style={ styles.purchaseDetails }>
                        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
                            <View style={ styles.tindericonBackground }>
                                <Fontisto size={ 18 } name='tinder' color="white"></Fontisto>
                            </View>
                            <View style={ { marginLeft: 15 } }>
                                <Text style={ styles.purchaseItem }>15 Super Likes</Text>
                                <Text style={ styles.email }>priyankaiitd22@gmail.com</Text>
                            </View>
                        </View>
                        <Text style={ styles.purchasePrice }>₹2,700.00</Text>
                    </View>
                    <Text style={ styles.description }>Add a payment method to your Google Account to complete your purchase. Your payment information is only visible to Google</Text>
                    {/* payemnt option */ }
                    <View style={ styles.paymentOptions }>
                        <TouchableOpacity style={ [styles.paymentButton, {  flexDirection: "row" }] }>
                                <FontAwesome6 name="amazon-pay" size={ 24 } color="#b0cefe" />
                                <Text style={ { color: "#e2e3e5", marginLeft: 10 } }>Pay with UPI</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ [styles.paymentButton, {  flexDirection: "row" }] } onPress={ () => navigation.navigate( "addcarddetails" ) }>
                                <MaterialIcons name="payment" size={ 24 } color="#b0cefe" />
                                <Text style={ { color: "white", marginLeft: 10 } } >Add credit or debit card</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity style={ [styles.paymentButton, {  flexDirection: "row" }] } onPress={ () => {
                            navigation.navigate( "bank" )
                        } }>
                                <FontAwesome name="bank" size={ 24 } color="#b0cefe" />
                                <Text style={ { color: "#e2e3e5", marginLeft: 10 } } >Add Netbanking</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ [styles.paymentButton, {  flexDirection: "row" }] }>
                                <MaterialIcons name="redeem" size={ 24 } color="#b0cefe" />
                                <Text style={ { color: "#e2e3e5", marginLeft: 10 } } >Redeem code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ [styles.paymentButton, {  flexDirection: "row" }] }>
                                <Ionicons name="people-sharp" size={ 24 } color="#b0cefe" />
                                <Text style={ { color: "#e2e3e5", marginLeft: 10 } } >Ask someone else to pay{'\n'}</Text>
                                <Text style={ { color: "red", marginLeft: 35 } }>Unavailable for purchases over ₹1000.00</Text>  
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create( {
    safeContainer: {
        flex: 1,
        backgroundColor: '#131313',
    },
    container0: {
        // flex: 1,
        paddingHorizontal: 10,
        width: '100%',
        // justifyContent:"flex-start"
        marginTop: 10
    },
    crossButton: {
        // position: 'absolute',
        // top: 20,
        // right: 20,
        zIndex: 1,
    },
    crossText: {
        fontSize: 17,
        color: '#b6b8b7',
    },
    discountText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        marginTop: 20,  // Adjust this to avoid overlap with the cross icon
    },

    description: {
        color: '#cdcdcd',
        marginVertical: 10,
        fontSize: 17
    },
    tindericonBackground: {
        width: 30,
        height: 30,
        backgroundColor: "#ff3a70",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    applyButton: {
        // backgroundColor: '#333',
        // padding: 10,
        // alignItems: 'center',
        // borderRadius: 5,
        marginVertical: 10,
    },
    applyText: {
        color: 'lightblue',
        fontSize: 16,
    },
    purchaseDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    purchaseItem: {
        color: 'white',
        fontSize: 22,
        fontWeight: "500"
    },
    purchasePrice: {
        color: 'white',
        fontSize: 18,
    },
    email: {
        color: '#5a5052',
    },
    paymentOptions: {
        marginVertical: 5,
    },
    paymentButton: {
        backgroundColor: '#202125',
        padding: 15,
        marginVertical: 2,
        borderRadius: 5,
        borderColor: "#4f5052",
        borderWidth: .2,
    },
    disabledButton: {
        padding: 15,
        marginVertical: 10,
    },
    disabledText: {
        color: '#ff4d4d',
    },
} );
