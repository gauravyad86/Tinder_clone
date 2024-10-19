// import React from 'react'
// import { View } from 'react-native'
// import SubCross from "@/components/onCross/SubCross"
// import Getlikes from "@/components/getLikes/getlikes"
// export default function explore() {
//   return (
//    <View>
//     {/* <SubCross></SubCross> */}
//     {/* <Getlikes></Getlikes> */}

//    </View>
//   )
// }
import Nav from '@/components/Navbar/nav';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar } from 'react-native';

const Explore = () => {
  return (
    <View style={styles.container6}>
      <View style={styles.likePageTop}>
        <Text style={
          styles.likesCount
        }>  0 likes</Text>
        <Text style={
          styles.likesCount
        }>  Top Picks</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'white',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <Text style={styles.upgradeText}>Upgrade to Gold to see people
        {'\n'}who have already liked you.</Text>
      {/* Main Section */}

      <View style={styles.heartContainer}>
        <MaterialCommunityIcons name="heart-flash" size={50} color="#FFDA44" />
        <Text style={styles.goldText}>See people who liked you with {'\n'}Tinder Gold™</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>See who likes you</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}

    </View>
  );
};

const styles = StyleSheet.create({
    container6: {
    flex: 1,
    // backgroundColor: 'black', // Dark background color
    alignItems:"center",
  },
  likePageTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#FF5A60', // Tinder red color
    fontSize: 24,
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
  },
  likesCount: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
  },
  upgradeText: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    // marginBottom: 30,
    marginTop: 10
  },
  heartContainer: {
    alignItems: 'center',
    // marginBottom: 30,
    position:"relative",
    top:200

  },
  heartIcon: {
    // width: 50,
    // height: 50,
    // marginBottom: 10,
  },
  goldText: {
    color: 'white', // Gold color
    fontSize: 16,
    textAlign: 'center',
    // marginTop:-30
  },
  button: {
    backgroundColor: '#FFDA44',
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    height: "8%",
    width: "60%",
    borderRadius: 30,
    marginBottom: -400,
    position:"relative",
    justifyContent: "center",
    top:360,
    alignItems: "center"
  },
  buttonText: {
    color: '#1B1B1B',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#1B1B1B',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default Explore;
