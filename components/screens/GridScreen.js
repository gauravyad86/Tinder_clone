// import React from 'react'
// import { View, Text, Image, StyleSheet, Platform, Pressable, Button, Modal, ScrollView, ImageBackground } from 'react-native';
// import 'react-native-gesture-handler'
// import { useState } from 'react';
// import { FontAwesome, FontAwesome6, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import tw from 'tailwind-react-native-classnames';
// import { useNavigation } from 'expo-router';
// import users from '@/assets/data/users';
// import { LinearGradient } from 'expo-linear-gradient';
// import GridBox from '../Pages/GridBox';

// export default function GridScreen () {
//     const activeColor = "#F76C6B";
//     const color = "grey";
//     const [ activScreen, setActivieScreen ] = useState( 'Grid' );
//     const [ modalVisible, setModalVisible ] = useState( false );
//     const [ onoff, setOnoff ] = useState( false );
//     const setvisible = () => {
//         setModalVisible( true );
//     }
//     const navigation = useNavigation()
//     return (
//         <ScrollView style={ { flex: 1 } }>

//             <SafeAreaView style={ styles.root }>
//                 <View style={ styles.navbar }>
//                     <View style={ styles.icontext }>
//                         <Fontisto style={ styles.icon } size={ 30 } name='tinder' ></Fontisto>
//                         <Text style={ styles.text }  >tinder</Text>
//                     </View>
//                     <View style={ styles.righticons }>
//                         <TouchableOpacity onPress={ () => {
//                             navigation.navigate( 'notifications' )
//                         } }><Ionicons name="notifications" size={ 25 } style={ styles.sheildicon } color="grey" />
//                         </TouchableOpacity>
//                         <FontAwesome6 name="shield" size={ 25 } style={ styles.sheildicon } color="grey" />
//                     </View>
//                 </View>
//                 <View style={ styles.messagess }>
//                     <Text style={ styles.message } >Welcome to explore</Text>
//                 </View>
//                 <View style={ styles.card }>
//                     <ImageBackground
//                         source={ "https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain" }
//                         style={ styles.image }>
//                         <View style={ styles.cardInner }>
//                             <Text style={ styles.name }>Long-term partner</Text>
//                         </View>
//                     </ImageBackground>
//                 </View>
//                 <View style={ { marginTop: 15 } }>
//                     <Text style={ styles.message } >Goal-driven dating </Text>
//                 </View>
//                 <View style={ { marginTop: 3 } }>
//                     <Text style={ styles.goaltext } >find people with similar relationship goals </Text>
//                 </View>
//                 {/* <ScrollView vertical={ true } style={ styles.users }>
//                     { users.map( user => (
//                         <View style={ styles.user } key={ user.id }>
//                             <Image source={ { uri: user.image } } style={ styles.image } />
//                             <LinearGradient
//                                 // Background Linear Gradient
//                                 colors={ [ 'transparent', 'rgba(0,0,1,.9)' ] }
//                                 style={ styles.background }
//                             />
//                         </View>

//                     ) ) }
//                 </ScrollView> */}
//                 <GridBox />
//                 <View style={ styles.bottomBar }>
//                     <TouchableOpacity onPress={ () => { navigation.navigate( "Home" ); setActivieScreen( "Home" ); } }>
//                         <Fontisto size={ 30 } name='tinder' color={ activScreen === 'Home' ? activeColor : color } />
//                     </TouchableOpacity>

//                     <TouchableOpacity onPress={ () => { navigation.navigate( "gridscreen" ); setActivieScreen( "Grid" ); } }>
//                         <MaterialCommunityIcons name="view-grid" size={ 24 } color={ activScreen === 'Grid' ? activeColor : color } />
//                     </TouchableOpacity>

//                     <TouchableOpacity onPress={ () => { navigation.navigate( "4starscreen" ); setActivieScreen( "Star" ); } }>
//                         <MaterialCommunityIcons size={ 30 } name='star-four-points' color={ activScreen === 'Star' ? activeColor : color } />
//                     </TouchableOpacity>

//                     <TouchableOpacity onPress={ () => { navigation.navigate( "chatscreen" ); setActivieScreen( "Chat" ); } }>
//                         <Ionicons name='chatbubbles' size={ 30 } color={ activScreen === 'Chat' ? activeColor : color } />
//                     </TouchableOpacity>

//                     <TouchableOpacity onPress={ () => { navigation.navigate( "user" ); setActivieScreen( "User" ); } }>
//                         <FontAwesome name='user' size={ 30 } color={ activScreen === 'User' ? activeColor : color } />
//                     </TouchableOpacity>
//                 </View>

//             </SafeAreaView>

//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create( {
//     pageContainer: {
//         flexDirection: "column"
//     },
//     root: {
//         flex: 1,
//         backgroundColor: "black"
//     },

//     card: {
//         width: '100%',
//         height: '14%',
//         borderRadius: 10,
//         backgroundColor: '#fefefe',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 5,
//         },
//         shadowOpacity: 0.36,
//         shadowRadius: 6.68,

//         elevation: 11,
//     },
//     users: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         height: 200,

//     },
//     righticons: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginRight: 5,
//     },
//     icontext: {
//         flexDirection: "row",
//         justifyContent: "space-around",
//         alignItems: "center",
//         //  marginLeft:6,
//     },
//     text: {
//         color: "red",
//         marginLeft: 6,
//         fontSize: 22,
//         fontWeight: "500",
//     },
//     icon: {
//         color: "red",
//         marginLeft: 6,
//         fontSize: 22,
//         fontWeight: "500",
//     },
//     navbar: {
//         // width: '100%',
//         // height: '6%',
//         // backgroundColor: "black",
//         // flexDirection: "row",
//         // justifyContent: "space-between",
//         // alignItems: "center",
//         width: '100%',
//         // height: '%',
//         backgroundColor: "black",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         position: "absolute",
//         zIndex: 100,
//         marginTop: 10
//     },
//     sheildicon: {
//         marginRight: 8,
//         marginLeft: 15,
//     },
//     background: {
//         width: '100%',
//         height: '100%',
//         //   borderRadius: 10,
//         borderBottomEndRadius: 10,
//         borderBottomLeftRadius: 10,
//         position: "absolute",
//     },
//     user: {
//         // width: 150,
//         // height: 250,
//         width: 150, // Two items per row (100% / 2 - some margin)
//         height: 250,
//         margin: 3,
//         borderRadius: 10,
//         justifyContent: "center",
//         alignItems: "center",

//     },
//     // image: {
//     //     width: '100%',
//     //     height: '100%',
//     //     borderRadius: 10,
//     // },
//     image: {
//         width: '100%',
//         height: '100%',
//         borderRadius: 10,
//         overflow: 'hidden',
//         justifyContent: 'flex-end',
//     },
//     cardInner: {
//         padding: 10,
//     },
//     name: {
//         fontSize: 25,
//         color: 'white',
//         fontWeight: '600',
//     },
//     bio: {
//         fontSize: 18,
//         color: 'white',
//         lineHeight: 25,
//     },
//     icons: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         width: '85%',
//         padding: 10,
//         position: "absolute",
//         top: 550

//     },
//     buttons: {
//         backgroundColor: "grey",
//         borderRadius: 50,


//         width: 50,
//         height: 50,
//         padding: 7,
//         justifyContent: 'center',
//         alignItems: "center"

//     },

//     bottomBar: {
//         flexDirection: "row",
//         justifyContent: "space-around",
//         width: '100%',
//         paddingVertical: 10,
//         backgroundColor: "black",
//         position: "absolute",
//         bottom: 0,
//         borderTopWidth: 1,
//         borderTopColor: "grey",
//     },
//     messagetext: {
//         color: "white",
//         fontSize: 17,
//         fontWeight: "500",
//         marginTop: 5,
//         marginLeft: 10,
//         marginBottom: 0
//     },
//     messagess: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         width: "90%",
//         marginTop: 50
//         // position:"absolute",
//     },
//     message: {
//         color: "white",
//         fontSize: 19,
//         fontWeight: "500",
//         //  backgroundColor:"red",
//         // //  justifyContent:"flex-end",
//         marginLeft: 2,
//     },
//     goaltext: {
//         color: "#CECECE",
//         fontSize: 16,
//         // fontWeight: "500",
//         //  backgroundColor:"red",
//         // //  justifyContent:"flex-end",
//         marginLeft: 2,
//     },
//     mymoveoff: {
//         color: "white",
//         fontSize: 16.5,
//         fontWeight: "500",
//         // marginLeft:100,
//         marginRight: -20,
//     },
//     mymoveoff2: {
//         fontSize: 16.5,
//         fontWeight: "500",
//         color: "red"
//     }
// } );

import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { FontAwesome, FontAwesome6, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from 'expo-router';
import GridBox from '../Pages/GridBox';

const { width, height } = Dimensions.get( 'window' );

export default function GridScreen () {
    const activeColor = "#F76C6B";
    const color = "grey";
    const [ activScreen, setActivieScreen ] = useState( 'Grid' );
    const navigation = useNavigation();

    return (
        <SafeAreaView style={ styles.root }>
            {/* Navbar */ }
            <View style={ styles.navbar }>
                <View style={ styles.icontext }>
                    <Fontisto size={ width * 0.07 } name='tinder' color="red" />
                    <Text style={ styles.text }>tinder</Text>
                </View>
                <View style={ styles.righticons }>
                    <TouchableOpacity onPress={ () => navigation.navigate( 'notifications' ) }>
                        <Ionicons name="notifications" size={ width * 0.06 } style={ styles.sheildicon } color="grey" />
                    </TouchableOpacity>
                    <FontAwesome6 name="shield" size={ width * 0.06 } style={ styles.sheildicon } color="grey" />
                </View>
            </View>

            {/* Scrollable content */ }
            <ScrollView contentContainerStyle={ styles.scrollContent }>
                {/* Welcome message */ }
                <View style={ styles.messagess }>
                    <Text style={ styles.message }>Welcome to explore</Text>
                </View>

                {/* Card with ImageBackground */ }
                <View style={ styles.card }>
                    <ImageBackground
                        source={ { uri: "https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain" } }
                        style={ styles.image }>
                        <View style={ styles.cardInner }>
                            <Text style={ styles.name }>Long-term partner</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={ styles.messagess }>
                    <Text style={ styles.message }>Goal-driven dating</Text>
                </View>
                <View style={ { marginTop: height * 0.01 } }>
                    <Text style={ styles.goaltext }>Find people with similar relationship goals</Text>
                </View>

                {/* GridBox component */ }
                <GridBox />
            </ScrollView>

            {/* Fixed Bottom Navigation Bar */ }
            <View style={ styles.bottomBar }>
                <TouchableOpacity onPress={ () => { navigation.navigate( "Home" ); setActivieScreen( "Home" ); } }>
                    <Fontisto size={ width * 0.07 } name='tinder' color={ activScreen === 'Home' ? activeColor : color } />
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => { navigation.navigate( "gridscreen" ); setActivieScreen( "Grid" ); } }>
                    <MaterialCommunityIcons name="view-grid" size={ width * 0.07 } color={ activScreen === 'Grid' ? activeColor : color } />
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => { navigation.navigate( "4starscreen" ); setActivieScreen( "Star" ); } }>
                    <MaterialCommunityIcons size={ width * 0.07 } name='star-four-points' color={ activScreen === 'Star' ? activeColor : color } />
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => { navigation.navigate( "chatscreen" ); setActivieScreen( "Chat" ); } }>
                    <Ionicons name='chatbubbles' size={ width * 0.07 } color={ activScreen === 'Chat' ? activeColor : color } />
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => { navigation.navigate( "user" ); setActivieScreen( "User" ); } }>
                    <FontAwesome name='user' size={ width * 0.07 } color={ activScreen === 'User' ? activeColor : color } />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create( {
    root: {
        flex: 1,
        backgroundColor: "black",
    },
    navbar: {
        width: '100%',
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: width * 0.03,
    },
    icontext: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        color: "red",
        fontSize: width * 0.05,
        fontWeight: "500",
        marginLeft: width * 0.015,
    },
    messagess: {
        marginTop: height * 0.009,
        paddingHorizontal: width * 0.05,
    },
    message: {
        color: "white",
        fontSize: width * 0.05,
        fontWeight: "500",
    },
    goaltext: {
        color: "#CECECE",
        fontSize: width * 0.04,
        paddingHorizontal: width * 0.05,
    },
    card: {
        width: '90%',
        height: height * 0.2,
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: height * 0.02,
    },
    righticons: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: width * .005
    },
    sheildicon: {
        marginRight: 8,
        marginLeft: width*.1,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    cardInner: {
        padding: 10,
    },
    name: {
        fontSize: width * 0.06,
        color: 'white',
        fontWeight: '600',
    },
    scrollContent: {
        paddingBottom: height * 0.1, // Extra padding to avoid overlap with the bottom bar
    },
    bottomBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '100%',
        paddingVertical: height * 0.015,
        backgroundColor: "black",
        position: "absolute",
        bottom: 0,
        borderTopWidth: 1,
        borderTopColor: "grey",
    },
} );
