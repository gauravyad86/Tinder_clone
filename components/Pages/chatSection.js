import { AntDesign, Entypo, Fontisto } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const ChatSection = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView vertical={ true } showsHorizontalScrollIndicator={ false } style={ styles.Scrollconatiner} >
      {/* Header */ }
      <View style={ styles.container }>
        <View style={ { flexDirection: "row", justifyContent: "space-between", alignItems: "center" } }>
          <TouchableOpacity onPress={()=>{
            navigation.goBack()
          }}>
          <AntDesign name="arrowleft" size={  18 } color="white" />
          </TouchableOpacity>
          <View style={ styles.header }>
            {/* <Image source={require('')} style={styles.logo} /> */ }
            <View style={ styles.tindericonBackground }>
              <Fontisto size={  18 } name='tinder' color="white"  ></Fontisto>
            </View>
            <Text style={ styles.headerText }>Team Tinder</Text>
          </View>
          <Entypo name="dots-three-vertical" size={ 24 } color="white" />
        </View>
        <View
          style={ {
            borderBottomColor: 'white',
            marginTop: 8,

            borderBottomWidth: StyleSheet.hairlineWidth,
          } }
        />
        {/* Chat Messages */ }
        <View style={ { flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 7 } } >
          <Text style={ styles.timeText }>Thursday 9:55 am</Text>
          <View style={ styles.chatRow }>
            <View style={ styles.tindericonBackground }>
              <Fontisto size={  18} name='tinder' color="white"  ></Fontisto>
            </View>
            <View style={ styles.messageBox }>

              <Text style={ styles.messageText }>
                Welcome to Tinder! Come back here for tips to make sure you have the best possible experience. And when in doubt? Swipe Right®.
              </Text>
            </View>
          </View>
        </View>


        <View style={ { flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 7 } } >
          <Text style={ styles.timeText }>Friday 9:55 am</Text>
          <View style={ styles.chatRow }>
            <View style={ styles.tindericonBackground }>
              <Fontisto size={ 18 } name='tinder' color="white"  ></Fontisto>
            </View>
            <View style={ styles.messageBox }>

              <Text style={ styles.messageText }>
                Everyone is here to see you: <Text style={ styles.linkText }>Add more pics</Text> to increase your chances of matching.
              </Text>
            </View>
          </View>
        </View>
        <View style={ { flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 7 } } >
          <Text style={ styles.timeText }>Friday 9:55 am</Text>
          <View style={ styles.chatRow }>
            <View style={ styles.tindericonBackground }>
              <Fontisto size={ 18 } name='tinder' color="white"  ></Fontisto>
            </View>
            <View style={ styles.messageBox }>
              <Text style={ styles.timeText }>Friday 10:29 am</Text>
              <Text style={ styles.messageText }>
                Take a selfie and prove you’re the person in your pics with <Text style={ styles.linkText }>Photo Verification</Text>.
              </Text>
            </View>
          </View>
        </View>
        <View style={ { flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 7 } } >
          <Text style={ styles.timeText }>Friday 10:55 am</Text>
          <View style={ styles.chatRow }>
            <View style={ styles.tindericonBackground }>
              <Fontisto size={ 18 } name='tinder' color="white"  ></Fontisto>
            </View>
            <View style={ styles.messageBox }>
              <Text style={ styles.timeText }>Friday 10:29 am</Text>
              <Text style={ styles.messageText }>
                There’s an empty space where your bio should be...fill it out for a chance at more matches. <Text style={ styles.linkText }>Edit My Profile</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={ { flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 7 } } >
          <Text style={ styles.timeText }>Friday 10:55 am</Text>
          <View style={ styles.chatRow }>
            <View style={ styles.tindericonBackground }>
              <Fontisto size={ 18 } name='tinder' color="white"  ></Fontisto>
            </View>
            <View style={ styles.messageBox }>
              <Text style={ styles.timeText }>Friday 10:29 am</Text>
              <Text style={ styles.messageText }>
                There’s an empty space where your bio should be...fill it out for a chance at more matches. <Text style={ styles.linkText }>Edit My Profile</Text>
              </Text>
            </View>
          </View>
        </View>
        {/* <View style={ styles.messageContainer }>
          <Text style={ styles.timeText }>Monday 8:54 am</Text>
          <Text style={ styles.messageText }>
            Share your <Text style={ styles.linkText }>Passions</Text> and connect with people who have similar interests.
          </Text>
        </View> */}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#121212',
    // paddingHorizontal: 16,
    justifyContent: "center",
    // alignItems:"center"
    width:"100%",
    padding:10,
  },
  Scrollconatiner: {
    flex: 1,
    backgroundColor: '#121212',
    // paddingHorizontal: 16,
  },
  chatRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 12,
  },
  tindericonBackground: {
    width: 30,
    height: 30,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 5
  },
  header: {
    flexDirection: "row",
    //  color:"white"
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  messageBox: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    borderRadius: 10,
    padding: 10,
  },
  timeText: {
    color: '#888',
    fontSize: 12,
    // marginBottom: 5,

  },
  messageText: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
  },
  linkText: {
    color: '#FF4E4E', // Tinder red color for links
    textDecorationLine: 'underline',
  },
} );
export default ChatSection;
