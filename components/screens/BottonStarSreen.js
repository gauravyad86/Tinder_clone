
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, Pressable } from 'react-native';
import { FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
const BottomStarScreen = () => {
    const activeColor = "#FD297B";
    const color = "grey";
    const activeColorLike = "#FD297B";
    const colorLike = "grey";
    const [ activScreen, setActivieScreen ] = useState( 'Star' );
    const navigation = useNavigation()
    return (
        <View style={ styles.container6 }>
                {/* navbar */ }
                <View style={ styles.navbar }>
                    <View style={ styles.icontext }>
                       <Fontisto style={ styles.icon } size={ 30 } name='tinder' ></Fontisto>
                       <Text style={ styles.text }  >tinder</Text>
                    </View>
                    <View style={ styles.righticons }>
                    <TouchableOpacity onPress={ () => {
                            navigation.navigate( 'notifications' )
                        } }>
                        <Ionicons name="notifications" size={ 24 } style={ styles.sheildicon } color="grey" /></TouchableOpacity>
                        {/* <FontAwesome6 name="shield" size={25} style={styles.sheildicon}color="grey" /> */ }
                        <TouchableOpacity onPress={ () => {
                            navigation.navigate("discoverysetting")
                        } }><FontAwesome5 name="bars" size={ 24 } style={ styles.sheildicon } color="grey" /></TouchableOpacity>
                       
                    </View>
                </View>
            <View style={ styles.likePageTop }>
                <Text style={
                    styles.likesCount
                }>0 likes</Text>
                <Text style={
                    styles.likesCount
                }>|</Text>
                <TouchableOpacity onPress={ () => {
                    navigation.navigate( "picks" )
                } }>
                    <Text style={
                        styles.likesCount
                    }>Top Picks</Text>
                </TouchableOpacity>
            </View>
            <View
                style={ {
                    borderBottomColor: '#868C8B',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                } }
            />
            <Text style={ styles.upgradeText }>Upgrade to Gold to see people
                {'\n'}who have already liked you.</Text>
            {/* Main Section */ }

            <View style={ styles.heartContainer }>
                <MaterialCommunityIcons name="heart-flash" size={ 50 } color="#FFDA44" />
                <Text style={ styles.goldText }>See people who liked you with{'\n'}Tinder Gold™</Text>
            </View>
            <TouchableOpacity style={ styles.button } onPress={ () => {
                            navigation.navigate( 'seewholikeyoumore' )
                        } } >
                <Text style={ styles.buttonText }>See who likes you</Text>
            </TouchableOpacity>
            {/* <BottomBar/>   */ }
            <View style={styles.bottomBar}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Home"); setActivieScreen("Home"); }}>
                        <Fontisto size={30} name='tinder' color={activScreen === 'Home' ? activeColor : color} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate("gridscreen"); setActivieScreen("Grid"); }}>
                        <MaterialCommunityIcons name="view-grid" size={24} color={activScreen === 'Grid' ? activeColor : color} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate("4starscreen"); setActivieScreen("Star"); }}>
                        <MaterialCommunityIcons size={30} name='star-four-points' color={activScreen === 'Star' ? activeColor : color} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate("chatscreen"); setActivieScreen("Chat"); }}>
                        <Ionicons name='chatbubbles' size={30} color={activScreen === 'Chat' ? activeColor : color} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate("user"); setActivieScreen("User"); }}>
                        <FontAwesome name='user' size={30} color={activScreen === 'User' ? activeColor : color} />
                    </TouchableOpacity>
                </View>

        </View>
    );
};

const styles = StyleSheet.create( {
    container6: {
        flex: 1,
        // backgroundColor: 'black', // Dark background color
        // alignItems:"center",
        backgroundColor: "#161617",
       
    },
    likePageTop: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
         marginTop:"17%"
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
    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '100%',
        paddingVertical: 10,
        backgroundColor: "black",
        position: "absolute",
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: "grey",
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
        fontWeight: "500"
    },
    upgradeText: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        // marginBottom: 30,
        marginTop: 20
    },
    heartContainer: {
        alignItems: 'center',
        // marginBottom: 30,
        position: "relative",
        top: 200

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
        // marginBottom: -400,
        position: "absolute",
        justifyContent: "center",

        bottom: "10%",

        right: "20%",
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
    navbar: {
        // width: '100%',
        // height: '6%',
        // backgroundColor: "black",
        // flexDirection: "row",
        // justifyContent: "space-between",
        // alignItems: "center",
        width: '100%',
        height: '7%',
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position:"absolute",
        zIndex:10,
      },
      righticons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 5,
      },
      icontext: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        //  marginLeft:6,
      },
      text: {
        color: "red",
        marginLeft: 6,
        fontSize: 22,
        fontWeight: "500",
      },
      icon: {
        color: "red",
        marginLeft: 6,
        fontSize: 22,
        fontWeight: "500",
      },
      sheildicon: {
        marginRight: 8,
        marginLeft: 15,
      }
} );

export default BottomStarScreen;
