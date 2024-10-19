import { FontAwesome, Fontisto } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import DiscoverySettings from './DiscoverySetting';
import { useNavigation } from 'expo-router';
const Settings = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={ styles.container }>
      <TouchableOpacity style={ styles.header } onPress={ navigation.goBack() }>
        <View style={ styles.header }>
          <Ionicons name="arrow-back" size={ 24 } color="red" />
          <Text style={ { color: "white", marginLeft: 5 } }>Settings</Text>
        </View>
      </TouchableOpacity>
      <View style={ styles.subscriptionSection }>
        {/* Tinder Premium */ }
        <TouchableOpacity style={ styles.subscriptionOption }>
          <Text style={ styles.optionTitle }>tinder Platinum</Text>
          <Text style={ styles.optionDesc }>Priority Likes, See Who Likes You & More!</Text>
        </TouchableOpacity>
        {/* Tinder Gold */ }
        <TouchableOpacity style={ styles.subscriptionOption }>
          <View style={ styles.box }>
            <Fontisto name="tinder" size={ 15 } color="gold" style={ styles.icon } />
            <Text style={ styles.optionTitle }>tinder Gold</Text>
          </View>
          <Text style={ styles.optionDesc }>See Who Likes You & More!</Text>
        </TouchableOpacity>

        {/* Tinder Plus */ }
        <TouchableOpacity style={ styles.subscriptionOption }>
          <View style={ styles.box }>
            <Fontisto name="tinder" size={ 15 } color="#FF4500" style={ styles.icon } />
            <Text style={ styles.optionTitle }>tinder</Text>
            <AntDesign name="plus" size={ 15 } color="red" />
          </View>
          <Text style={ styles.optionDesc }>Unlimited Likes & More!</Text>
        </TouchableOpacity>
      </View>

      {/* Get Super Likes & Boosts */ }
      <View style={ styles.actionSection }>
        <TouchableOpacity style={ styles.actionButton } onPress={ () => {
          navigation.navigate( 'getsuperlikes' )
        } }  >
          <View style={ styles.buttons }><FontAwesome name="star" size={ 17 } color="#1597fa" /></View>

          <Text style={ styles.actionText }>Get Super Likes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.actionButton }>

          <View style={ styles.buttons }>
            <FontAwesome name="flash" size={ 17 } color="#c145ec" />
          </View>
          <Text style={ styles.actionText }>Get Boosts</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={ styles.incognito }>
        <View style={ { flexDirection: "row" } }>
          <View style={ styles.buttons }>
            <Entypo name="eye-with-line" size={ 14 } color="grey" />
          </View>
        </View>
        <Text style={ styles.optionTitle }>Go Incognito</Text>
      </TouchableOpacity>
      {/* <Text> Account Setting</Text> */ }
      <DiscoverySettings></DiscoverySettings>
    </ScrollView>
  );
};

const styles = StyleSheet.create( {

  container: {
    flex: 1,
    padding: 9,
    backgroundColor: '#000000',
  },
  box: {
    flexDirection: "row",
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    fontSize: 15,
    height: "3%",
    // fontWeight: 'bold',
    marginBottom: 10,
    backgroundColor: "#111419",
    color: "white",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  subscriptionSection: {
    marginBottom: 20,
  },
  subscriptionOption: {
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: "#111419",
    // padding: 2,
    borderRadius: 2,
    height: "45%"

  },
  icon: {
    // marginRight: 15,
  },
  optionTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: "white"
  },
  optionDesc: {
    fontSize: 12,
    color: "white"
  },
  actionSection: {
    flexDirection: "row",
    marginTop: 40,
    height: "8%"
  },
  actionButton: {
    padding: 5,
    backgroundColor: "#111419",
    borderRadius: 5,
    // marginBottom: 10,
    flexDirection: "column",
    justifyContent: "center",
    width: "49%",
    height: "60%",
    alignItems: 'center',
    marginRight: 2,
    marginLeft: 2
  },
  actionText: {
    color: '#1597fa',
    fontSize: 12,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
  accountSettings: {
    marginTop: 10,
  },
  accountText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },

  buttons: {
    backgroundColor: "black",
    borderRadius: 50,
    width: 20,
    height: 20,
    padding: 7,
    justifyContent: 'center',
    alignItems: "center",

    borderWidth: 1,
    borderColor: '#ccc',
  },
  incognito: {
    backgroundColor: "#111419",
    borderRadius: 5,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "5%",
    alignItems: 'center',
    marginTop: -35,
  }
} );

export default Settings;
