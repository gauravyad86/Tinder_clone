import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation
import { Entypo, FontAwesome, FontAwesome6, Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function PurchaseScreen () {
  const navigation = useNavigation();  // Initialize navigation

  return (
    <ScrollView>
      <View style={ styles.container }>
        {/* Cross Icon */ }
        <View style={ { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }>
          <Text style={ styles.crossText }>Google Play</Text> {/* You can replace 'X' with an actual icon if needed */ }
          <TouchableOpacity onPress={ () => navigation.goBack() }>
            <Text style={ styles.crossText }><Entypo name="cross" size={24} color="white" /></Text> {/* You can replace 'X' with an actual icon if needed */ }
          </TouchableOpacity>
        </View>
        <Text style={ styles.discountText }>₹60 Play discount</Text>
        <Text style={ styles.description }>Use it on an app, game, or in-app item over ₹60. Use now or expires 7 days after the offer is applied.
        </Text>
        <TouchableOpacity style={ styles.applyButton }>
          <Text style={ styles.applyText }>Apply</Text>
        </TouchableOpacity>
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
              <Fontisto size={ 18 } name='tinder' color="white"  ></Fontisto></View>
            <View style={ { marginLeft: 15 } }>
              <Text style={ styles.purchaseItem }>15 Super Likes</Text>
              <Text style={ styles.email }>priyankaiitd22@gmail.com</Text>
            </View>
          </View>
          <Text style={ styles.purchasePrice }>₹2,700.00</Text>
        </View>
        <Text style={ styles.description }>Add a payment method to your Google Account to complete your purchase. Your payment information is only visible to Google </Text>
        {/* payemnt option */ }
        <View style={ styles.paymentOptions }>
          <TouchableOpacity style={ styles.paymentButton }>
            <View style={ { color: "white", flexDirection: "row" } }

            > <FontAwesome6 name="amazon-pay" size={ 24 } color="#1865BD" /><Text style={ { color: "white", marginLeft: 10 } } >Pay with UPI</Text></View>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.paymentButton } onPress={()=>navigation.navigate("addcarddetails")}>
            <Text style={ { color: "white" } } > <MaterialIcons name="payment" size={ 24 } color="#1865BD" /> <Text style={ { color: "white", marginLeft: 10 } } >Add credit or debit card</Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.paymentButton } onPress={()=>{
            navigation.navigate("addbank")
          }}>
            <Text style={ { color: "white" } } > <FontAwesome name="bank" size={ 24 } color="#1865BD" /> <Text style={ { color: "white", marginLeft: 10 } } >Add Netbanking</Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.paymentButton }>
            <Text style={ { color: "white" } } > <MaterialIcons name="redeem" size={ 24 } color="#1865BD" /> <Text style={ { color: "white", marginLeft: 10 } } > Redeem code</Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={ styles.paymentButton }>
            <Text style={ { color: "white" } } > <Ionicons name="people-sharp" size={ 24 } color="#1865BD" /> <Text style={ { color: "white", marginLeft: 10 } } >Ask someone else to pay
            {'\n'}
              <Text style={ { color: "red", marginLeft: 35 } }>Unavailable for purchases over ₹1000.00</Text>
            </Text></Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 15,
  },
  crossButton: {
    // position: 'absolute',
    // top: 20,
    // right: 20,
    zIndex: 1,
  },
  crossText: {
    fontSize: 15,
    color: '#fff',
  },
  discountText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    marginTop: 20,  // Adjust this to avoid overlap with the cross icon
  },

  description: {
    color: '#F7F7EC',
    marginVertical: 10,
    fontSize: 17
  },
  tindericonBackground: {
    width: 30,
    height: 30,
    backgroundColor: "red",
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
    fontSize: 18,
  },
  purchasePrice: {
    color: 'white',
    fontSize: 18,
  },
  email: {
    color: '#999',
  },
  paymentOptions: {
    marginVertical:5,
  },
  paymentButton: {
    backgroundColor: '#252530',
    padding: 15,
    marginVertical: 2,
    borderRadius: 5,
    borderColor:"#C4C5B3",
    borderWidth:.2,
  },
  disabledButton: {
    padding: 15,
    marginVertical: 10,
  },
  disabledText: {
    color: '#ff4d4d',
  },
} );
