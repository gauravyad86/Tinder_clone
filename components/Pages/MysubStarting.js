import { Entypo, FontAwesome5, Fontisto } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import { Text, TouchableOpacity, StyleSheet, Image , Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TinderSwipeDemo from "@/components/TinderCard/TinderSwipeDemo";
const { width, height } = Dimensions.get('window');
export default function MysubStarting () {
    const userss = [
        {
            id: '1',
            name: '1 Week',
            rs: '₹159.00/wk'
        },
        {
            id: '2',
            name: '1 month',
            rs: '₹79.70/wk  save 50%'
        },
        {
            id: '3',
            name: '6 month',
            rs: '₹49.70/wk save 66%'
        },
    ]
    const navigation = useNavigation()

    const activeColor = "#FD297B";
    const color = "grey";

    const [ styelesset, setStyleSet ] = useState( color );
    return (

        <SafeAreaView style={ styles.container }>
            <ScrollView style={ styles.container } vertial={ true } howsVerticalScrollIndicator={ false }>

                {/* Close button on top-left */ }
                <View style={ styles.closeButton }>
                    <TouchableOpacity onPress={ () => navigation.goBack() } >
                        <Entypo name="cross" size={ 30 } color="white" />
                    </TouchableOpacity>
                    <View style={ styles.header }>
                        <Fontisto name="tinder" size={ 22 } color="#FFDE59" style={ styles.icon } />
                        <Text style={ styles.headerText }>tinder</Text>
                        <Text style={ { color: 'black', backgroundColor: "#FFDE59", fontSize: 9, marginTop: 8, fontWeight: "700" } }>GOLD</Text>
                    </View>
                </View>
                <ScrollView style={ styles.container } vertial={ true } howsVerticalScrollIndicator={ false }>
                    {/* Main Heading Text */ }
                    <Text style={ styles.mainHeading }>
                        See who Likes you with
                        {'\n'}
                        Tinder Gold™
                    </Text>
                    <Text style={ styles.planText }> Select a plan</Text>

                    <View style={ styles.container2 }>
                        <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false } style={ styles.use }>
                            { userss.map( user => (
                                <View style={ [ styles.user, ] } key={ user.id }>
                                    <Text style={ styles.headingg }>Popular</Text>
                                    <Text style={ styles.Week } >{ user.name } </Text>
                                    <Text style={ styles.rsValue }>{ user.rs }</Text>
                                </View>

                            ) ) }
                        </ScrollView>

                    </View>

                    <Text style={ styles.upgradeTitle }>Included with Tinder Gold</Text>
                    {/* </View> */ }
                    <View style={ styles.upgradeSection }>
                        <View style={ styles.benefitItem }>
                            {/* <View style={ styles.benefitLabel }> */ }
                            <Entypo name="check" size={ 24 } color="white" />
                            <Text style={ styles.benefitLabel }>Unlimited Likes</Text>
                            {/* </View> */ }
                        </View>
                        <View style={ styles.benefitItem }>
                            {/* <View style={ styles.benefitLabel }> */ }

                            <Entypo name="check" size={ 24 } color="white" />
                            <Text style={ styles.benefitLabel }>See Who Likes You</Text>
                            {/* </View> */ }
                        </View>
                        <View style={ styles.benefitItem }>
                            <Entypo name="check" size={ 24 } color="white" />
                            <Text style={ styles.benefitLabel }>Unlimited Rewinds</Text>
                        </View>
                        <View style={ styles.benefitItem }>
                            <Entypo name="check" size={ 24 } color="white" />
                            <View >
                                <Text style={ styles.benefitLabel }>1 Free Boost per month </Text>
                                <Text style={ styles.benefitLabel2 }>Free monthly Boost only available for{'\n'}1 month or longer subscriptions
                                </Text>
                            </View>
                        </View>
                        <View style={ styles.benefitItem }>
                            <Entypo name="check" size={ 24 } color="white" />
                            <View >
                                <Text style={ styles.benefitLabel }>2 Free Super Likes per week</Text>

                            </View>
                        </View>
                        <View style={ styles.benefitItem }>
                            <Entypo name="check" size={ 24 } color="white" />
                            <View >
                                <Text style={ styles.benefitLabel }>Unlimited Passport™ Mode</Text>
                                <Text style={ styles.benefitLabel2 }>Add a note to your Super Likes
                                </Text>
                            </View>
                        </View>
                        <View style={ styles.benefitItem }>
                            <Entypo name="check" size={ 24 } color="white" />
                            <View >
                                <Text style={ styles.benefitLabel }>Control Your Profile</Text>
                                <Text style={ styles.benefitLabel2 }>Only show what you want them to know
                                </Text>
                            </View>
                        </View>
                        <View style={ styles.benefitItem }>
                            <Entypo name="check" size={ 24 } color="white" />
                            <View >
                                <Text style={ styles.benefitLabel }>Top Picks</Text>
                                <Text style={ styles.benefitLabel2 }>Browse through a daily curated selection
                                {'\n'}of profile
                                </Text>
                            </View>
                        </View>
                        <View style={ styles.benefitItem }>
                            <Entypo name="check" size={ 24 } color="white" />
                            <View >
                                <Text style={ styles.benefitLabel }>Control Who Sees You </Text>
                                <Text style={ styles.benefitLabel2 }>Mangage  who you're seen by.

                                </Text>
                            </View>
                        </View>
                        <View style={ styles.benefitItem }>
                            <Entypo name="check" size={ 24 } color="white" />
                            <View >
                                <Text style={ styles.benefitLabel }>Control Who You See </Text>
                                <Text style={ styles.benefitLabel2 }>Choose the type of people you want to
                                {'\n'}control them

                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={ styles.benefitItem }>
                        <Entypo name="check" size={ 24 } color="white" />
                        <View >
                            <Text style={ styles.benefitLabel }>Hide Aids </Text>

                        </View>
                    </View>

                </ScrollView>
                <TouchableOpacity style={ [ { flexDirection: "column", justifyContent: "center", alignItems: "center" }, styles.bottomTextBTn ] }>
                    <Text style={ styles.termsText }>
                        By tapping Continue, you will be charged, your subscription will auto-renew for the same price and package length until you cancel via Play Store settings, and you agree to our Terms.
                    </Text>
                    {/* Continue Button */ }
                    <View style={ styles.continueButton } >
                        <Text style={ styles.textStyle }>Continue</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create( {
    container: {
        flex: 1,
        // flexDirection:"row",
        backgroundColor: 'black',
        paddingHorizontal: 10,
        // justifyContent:"flex-start",
        // alignItems:"center",

    },

    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 22,
    },
    container2: {

        width: "100%"
    },
    termsText: {
        // textAlign: 'center',
        fontSize: 13,
        color: 'white',
        marginVertical: 10,
    },
    Week: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 3,
        marginLeft: 9,
    },
    rsValue: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 9,
    },

    closeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    closeText: {
        fontSize: 24,
        color: 'white',
    },
    container4: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#000', // Black background
        borderRadius: 8,
    },
    includedText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#aaa', // Light gray text color
        textAlign: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 5
    },


    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        margin:"auto"
    },
    logo: {
        width: 25,
        height: 25,
        marginRight: 5,
    },
    root: {
        width: '100%',
        // height: "50%",
        flex: 1,
        // padding: 10,
    },

    use: {
        flexDirection: 'row',
        // flexWrap: 'wrap',
        height: 160,
        // height: "50%",
        // justifyContent: "flex-end",
        // textAlign: 'center',
        width: "100%",
    },
    headingg: {
        color: '#FFDE59',
        fontSize: 17,
        justifyContent: "flex-start",
        // textAlign: 'center',
        marginLeft: 10,
        marginTop: -30
    },
    user: {
         height: height*.2,
        width: "45%",
        borderRadius: 10,
        justifyContent: "center",
        // alignItems: "center",
        borderWidth: 1,
        marginRight: 10,
        borderColor: "#7B8799",
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    name: {
        color: "white",
        marginTop: 5,

    },
    headerText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        marginRight: 5,
    },
    mainHeading: {
        color: 'white',
        fontSize: 28,
        justifyContent: "flex-start",
        // textAlign: 'center',
        fontWeight: '600',
        marginVertical: 8,
    },
    planText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    featuresList: {
        marginVertical: 20,
        borderRadius: 10,
        justifyContent: "center",
        // alignItems: "center",
        borderWidth: 2,
        borderColor: 'white',
    },
    upgradeSection: {
        backgroundColor: '#111419',
        borderWidth: 1
        , borderRadius: 8,
        borderColor: "#7B8799",
        // marginBottom: 30,
        justifyContent: "center",
        // alignItems:"center",
        width: "100%",
        // marginTop:10
    },
    upgradeTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: '400',
        marginBottom: -10,
        marginTop: 10,
        zIndex: 100,
        marginLeft: "25%"
    },
    upgradeTitleBox: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: -10,
        marginTop: 10,
        zIndex: 100,
        // backgroundColor:"red",
        justifyContent: "center",
        alignItems: "center"
    },
    benefitItem: {
        marginVertical: 6,
        flexDirection: "row", marginLeft: 15,
    },
    benefitLabel: {
        color: 'white',
        fontSize: 17,
        fontWeight: "500",
        flexDirection: "column",
        marginLeft: 15,
    },
    benefitLabel2: {
        color: '#7B8799',
        fontSize: 12,
        marginTop: 5,
        flexDirection: "column",
        marginLeft: 15,

    },
    benefitsSection: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    benefitTitle: {
        color: '#FF5A60',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    bottomTextBTn: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "black",
        height: "20%"
    }, continueButton: {
        // position: "absolute",
        backgroundColor: '#FFDE59',
        height: "27%",
        width: "90%",
        borderRadius: 20,
        // bottom: 50,
        // left: 100,
        justifyContent: "center", alignItems: "center"
    },
} );
