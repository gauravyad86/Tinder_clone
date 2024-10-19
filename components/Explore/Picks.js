
import users from '@/assets/data/users';
import Nav from '@/components/Navbar/nav';
import MatchesScreen from '@/components/screens/MatchesScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Picks = () => {
  return (
    <View style={styles.container}>
      <Nav></Nav>
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
      <Text style={styles.message} >Recommended</Text>
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          {/* <Text style={{fontWeight: 'bold', fontSize: 24, color: '#F63A6E'}}>
          New Matches
        </Text> */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.users}>
            {users.map(user => (
              <View style={styles.user} key={user.id}>
                <Image source={{ uri: user.image }} style={styles.image} />
                <LinearGradient
                // Background Linear Gradient
                colors={ [ 'transparent', 'rgba(0,0,1,.9)' ] }
                style={ styles.background }
            />
                <Text style={styles.name}> {user.name}</Text>
                <Text style={styles.name2}> 4h left</Text>
              </View>

            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
      <TouchableOpacity style={styles.priceButton}>
        <Text style={styles.priceText}>SEE MORE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111419', // Dark background color
    // alignItems: "center"
  },
  message: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    //  backgroundColor:"red",
    // //  justifyContent:"flex-end",
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10
  },
  background: {
    width: '100%',
    height: '100%',
    //   borderRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    position: "absolute",
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
    position: "relative",
    top: 200

  },
  root: {
    width: '100%',
    height: "100%",
    flex: 1,
    padding: 10,
  },

  users: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    height: 140,
  },
  user: {
    width: 167,
    height: 250,
    margin: 3,
    borderRadius: 10,
    // justifyContent:"center",
    alignItems: "center",

  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  name: {
    color: "white",
    marginTop: 5,
    fontSize:22,
    position:"absolute",
    top:180,
    left:0,
  },
  name2: {
    color: "orange",
    marginTop: 5,
    fontSize:22,
    position:"absolute",
    top:210,
    left:0,
  },
  heartIcon: {
    // width: 50,
    // height: 50,
    // marginBottom: 10,
  },
  priceButton: {
    backgroundColor: 'white',
    height:"6%",
    width:"45%",
    borderRadius: 30,
    justifyContent:"center",
    alignItems: 'center',
    margin:90,
  },
  priceText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
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
    position: "relative",
    justifyContent: "center",
    top: 360,
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

export default Picks;
