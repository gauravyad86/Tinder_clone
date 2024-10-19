import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import users from '@/assets/data/users';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
import { FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Message () {
    const navigation = useNavigation()
    const activeColor = "#F76C6B";
    const color = "grey";
    const [ activScreen, setActivieScreen ] = useState( 'Home' );
    return (

        <ScrollView vertical={ true } showsHorizontalScrollIndicator={ false } style={ styles.users }>
            <View style={ styles.messHeading }>
                <Text style={ styles.messagetext } > Messages</Text>
            </View>
            { users.map( user => (
                <TouchableOpacity onPress={ () => {
                    navigation.navigate( "chatsection" )
                } } key={user.id}>
                    <View style={ styles.mess } key={ user.id }>
                        <Image source={ { uri: user.image } } style={ styles.image } />
                        <View style={ styles.messageContent }>
                            <Text style={ styles.name }> { user.name }</Text>
                            <Text style={ styles.bio }>{ user.bio }</Text>
                            <View
                                style={ {
                                    borderBottomColor: 'white',
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                    marginTop: 10,
                                } }>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ) )
            }
        </ScrollView >
    )
}

const styles = StyleSheet.create( {

    container: {
        padding: 10,
        // marginTop:30
    },
    users: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // height: 700,
        // marginLeft: 8
        padding:10,

    },
    topIcons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '100%',
        // padding: 10,
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right: 0,
        // height: 60,
        // borderTopColor: "black",
        // zIndex: 10000,
        // opacity: 1000,
        position: 'absolute',
        bottom: -47,
        left: 0,
        right: 0,
        height: 60,

        // backgroundColor: '#03DAC6',
        // justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,

    },
    messagetext: {
        color: "white",
        fontSize: 17,
        fontWeight: "500",
        marginTop: 5,
        marginLeft: 10,
        marginBottom: 0
    },
    mess: {
        width: "100%",
        height: 90,
        flexDirection: "row",
        borderWidth: 2,
        // borderColor: '#F63A6E',
        alignItems: "center",
    },
    image: {
        width: '15%',
        height: '60%',
        borderRadius: 90,
    },
    name: {
        color: "white",
        marginTop: 2,
        fontWeight: "600",
        fontSize: 18,
    }
    ,
    bio: {
        color: "white",
        marginTop: 5,
        // fontWeight:600,
        fontSize: 13,
    },
    messageContent: {
        flexDirection: "column",
        // justifyContent:"flex-start",
        justifyContent: "center",
        marginLeft: 20,

    }
    // 
} );
