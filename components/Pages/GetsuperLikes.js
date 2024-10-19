import { Entypo, FontAwesome, Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from 'expo-router';
import React from 'react';
import { SafeAreaView, View, ScrollView, Text, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function GetSuperLikes () {
    const userss = [
        {
            id: '1',
            name: '3 Super Likes',
            rs: '239.0/ea'
        },
        {
            id: '2',
            name: '15 Super Likes',
            rs: '180.00/ea'
        },
        {
            id: '3',
            name: '30 Super Likes',
            rs: '138.00/ea'
        },
    ];
    const navigation = useNavigation()
    return (
        <SafeAreaView style={ styles.safeContainer }>
            <ScrollView style={ styles.container0 } contentContainerStyle={ { flexGrow: 1 } }>
                {/* Close button on top-left */ }
                <TouchableOpacity style={ styles.closeButton } onPress={ () => {
                    navigation.goBack()
                } }>
                    <Entypo name="cross" size={ 26 } color="white" />
                </TouchableOpacity>

                {/* Tinder+ logo and text */ }
                <LinearGradient
                    colors={['#0f0b8c', 'transparent']} // Gold gradient
                    style={[styles.header, { height: height * 0.08 }]} // Dynamic height
                >
                    <FontAwesome name="star" size={ 20 } color="#1597fa" style={ { marginTop: 15 } } />
                    <Text style={ styles.headerText }>Get Super Likes</Text>
                </LinearGradient>
                {/* <LinearGradient
                    // Background Linear Gradient
                    colors={ [ 'transparent', 'rgba(8,1,1,5)' ] }
                    style={ styles.background }
                /> */}
                {/* Main Heading Text */ }
                <Text style={ styles.mainHeading }>
                    Stand out with Super {'\n'}
                    Like. You're 3x more {'\n'}
                    likely to match!
                </Text>
                <Text style={ styles.planText }>Select a package</Text>

                {/* Packages List */ }
                <View style={ styles.container2 }>
                    <ScrollView horizontal showsHorizontalScrollIndicator={ false } style={ styles.use }>
                        { userss.map( user => (
                            <View style={ styles.user } key={ user.id }>
                                {user.id===2?( <Text style={ styles.Week }>{ user.name }</Text>):(<Text/>)}
                                <Text style={ styles.Week }>{ user.name }</Text>
                                <Text style={ styles.rsValue }>{ user.rs }</Text>
                                <TouchableOpacity style={ styles.selectButton } onPress={ () => {
                                    navigation.navigate( "homepagestarselect" )
                                } }>
                                    <Text style={ styles.selectButtonText }>Select</Text>
                                </TouchableOpacity>
                            </View>
                        ) ) }
                    </ScrollView>
                </View>

                {/* Or Divider */ }
                <View style={ styles.dividerContainer }>
                    <View style={ styles.line } />
                    <Text style={ styles.orText }>or</Text>
                    <View style={ styles.line } />
                </View>

                {/* Bottom Box */ }
                <View style={ styles.bottombox }>
                    <Text style={ styles.bottomText }>Includes 5 free Super Likes per week</Text>
                    <View style={ styles.header2 }>
                        <View style={ { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' } }>
                            <Fontisto name="tinder" size={ 22 } color="yellow" style={ styles.icon } />
                            <Text style={ styles.tinderGoldText }>Get Tinder Gold</Text>
                        </View>
                        <TouchableOpacity style={ styles.goldSelectButton } onPress={ () => {
                            navigation.navigate( "seewholikeyoumore" )
                        } }>
                            <Text style={ styles.goldSelectButtonText }>Select</Text>
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
        backgroundColor: '#111419',
    },
    container0: {
        // flex: 1,
        paddingHorizontal: 10,
        width: '100%',
        // justifyContent:"flex-start"
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1, // Ensure it stays on top
    },
    closeText: {
        fontSize: 24,
        color: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical: 10,
        width: "100%",
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 5,
        marginTop: 15,
    },
    mainHeading: {
        color: 'white',
        fontSize: 32,
        fontWeight: '500',
        marginVertical: 12,
        // textAlign: 'center',
        // marginLeft:-4,
    },
    planText: {
        color: 'white',
        fontSize: 27,
        fontWeight: '500',
        // textAlign: 'center',

    },
    container2: {
        marginTop: 15,
    },
    use: {
    },
    user: {
        height: 200,
        width: "35%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#555962',
        // marginHorizontal: 10,
        marginRight: 9,
        padding: 10,
    },
    Week: {
        color: 'white',
        fontSize: 28,
        fontWeight: '500',
        marginTop: 3,
    },
    rsValue: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        marginTop: 19,
    },
    selectButton: {
        backgroundColor: '#1886ff',
        borderRadius: 30,
        marginTop: 10, height: "30%",
        width: "80%",
        justifyContent: "center", alignItems: "center"
        // paddingVertical: 15,
        // paddingHorizontal: 40,
    },
    selectButtonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 20,
        fontWeight: "500"
    },
    dividerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    line: {
        height: 1,
        backgroundColor: '#555962',
        width: '44%',
    },
    orText: {
        fontSize: 18,
        color: 'white',
        marginHorizontal: 10,
        fontWeight: "bold"
    },
    bottombox: {
        borderWidth: 1,
        borderColor: '#555962',
        borderRadius: 10,
        padding: 15,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomText: {
        fontSize: 13,
        color: 'white',
        textAlign: 'center',
        fontWeight: "bold"
    },
    header2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    tinderGoldText: {
        color: 'white',
        fontSize: 18,
        marginLeft: 5,
    },
    goldSelectButton: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#555962',
    },
    goldSelectButtonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15,
    }, background: {
        width: '100%',
        height: '100%',
        //   borderRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        top: -40
    },
} );
// #05234d