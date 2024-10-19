import React from 'react'
import { View ,StyleSheet} from 'react-native-web'
import users from '@/assets/data/users'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import TinderSwipeDemo from '../TinderCard/TinderSwipeDemo'
import { useNavigation } from 'expo-router'

export default function CoffeeDateJoin () {
    const navigation = useNavigation();

    return (
      
            <ScrollView vertical={ true } showsHorizontalScrollIndicator={ false } style={ [ styles.container9 ] }>
                <TouchableOpacity onPress={ () => navigation.goBack() }>
                    <View style={ styles.header }>
                        <Ionicons name="arrow-back" size={ 24 } color="red" />
                        <Text style={ { color: "white", marginLeft: "25%", fontSize: 17 } }>Coffee Date</Text>
                    </View>
                </TouchableOpacity>
                <TinderSwipeDemo/>
            </ScrollView>
    )
}

const styles = StyleSheet.create( {
    container9: {
      flex: 1,
      backgroundColor: 'black',
      color: "green",
      // display:"none"
      padding: 10
  
    },
    header: {
        fontSize: 15,
        height: 45,
        width: "100%",
        // fontWeight: 'bold',
        // marginBottom: 10,
        backgroundColor: "#111419",
        color: "white",
        flexDirection: "row",
        // justifyContent:"space-around",
        // marginLeft: 20,
        alignItems: "center",
        marginTop: -6,
        marginBottom: 40,
      },
})