import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { ScrollView, Switch } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const DiscoverySettings = ( props ) => {
  const [ maxDistance, setMaxDistance ] = useState( 5 );
  const [ ageRange, setAgeRange ] = useState( [ 29, 55 ] );
  const [ photo, setPhoto ] = useState( 0 );
  const [ showOnTinder, setShowOnTinder ] = useState( 'On' ); // Dropdown for Show Me on Tinder
  const [ lookingFor, setLookingFor ] = useState( 'Women' ); // Dropdown for Looking For
  const [ notifications, setNotifications ] = useState( {
    newMatches: 'Select',
    messages: 'Select',
    messageLikes: 'Select',
    superLikes: 'Select',
  } );
  const navigation = useNavigation()

  return (

    <ScrollView vertical={ true } showsHorizontalScrollIndicator={ false } style={ [ styles.container9 ] }>
      <TouchableOpacity onPress={ () => navigation.goBack() }>
        <View style={ styles.header }>
          <Ionicons name="arrow-back" size={ 24 } color="red" />
          <Text style={ { color: "white", marginLeft: "25%", fontSize: 17 } }>Discovery Settings</Text>
        </View>
      </TouchableOpacity>
      {/* Maximum Distance */ }
      <View style={ styles.maxdistance }>
        <View style={ styles.settingRow }>
          <Text style={ styles.label }>Maximum distance</Text>
          <Text style={ styles.sliderValue }>{ maxDistance } km</Text>
        </View>
        <Slider
          style={ styles.slider }
          minimumValue={ 1 }
          maximumValue={ 100 }
          step={ 1 }
          value={ maxDistance }
          onValueChange={ ( value ) => setMaxDistance( value ) }
          minimumTrackTintColor="#FF495C"
          thumbTintColor="#FF495C"
        />
        <View style={ styles.settingRow }>
          <Text style={ styles.afterslidertext } >  Show people further away if I run out of profiles to see</Text>
          <Switch
            value={ showOnTinder }
            onValueChange={ () => setShowOnTinder( !showOnTinder ) }
            trackColor={ { false: '#767577', true: '#FF495C' } }
            thumbColor={ showOnTinder ? '#FF495C' : '#f4f3f4' }
          />
        </View>
      </View>

      {/* Looking For */ }
      <View style={ styles.lokingforwommen }>
        <Text style={ styles.label }>Show me</Text>
        <TouchableOpacity onPress={ () => {
          navigation.navigate( "lookingforwomen" )
        } }>
          <Ionicons name="chevron-forward" size={ 24 } color="white" />
        </TouchableOpacity>
      </View>

      {/* Age Range */ }
      <View style={ styles.maxdistance }>
        <View style={ styles.settingRow }>
          <Text style={ styles.label }>Age range</Text>
          <Text style={ styles.sliderValue }>{ ageRange[ 0 ] } - { ageRange[ 1 ] }+</Text>
        </View>
        <Slider
          style={ styles.slider }
          minimumValue={ 18 }
          maximumValue={ 100 }
          step={ 1 }
          value={ ageRange[ 0 ] }
          onValueChange={ ( value ) => setAgeRange( [ value, ageRange[ 1 ] ] ) }
          minimumTrackTintColor="#FF495C"
          thumbTintColor="#FF495C"
        />
        <View style={ styles.settingRow }>
          <Text style={ styles.afterslidertext } > Show people slightly out of my preferred range if Irun out of profiles to see</Text>
          <Switch
            value={ showOnTinder }
            onValueChange={ () => setShowOnTinder( !showOnTinder ) }
            trackColor={ { false: '#767577', true: '#FF495C' } }
            thumbColor={ showOnTinder ? '#FF495C' : '#f4f3f4' }
          />
        </View>
      </View>
      <Text style={ styles.afterslidertext }  > Tinder uses these preferences to suggest matches. Some match suggestions may not fall within your desired parameters</Text>


      {/* Notifications */ }
      <Text style={ styles.sectionHeader }>Premium Discovery</Text>
      <View style={ styles.numberofphotos }>
        <View style={ styles.settingRow }>
          <Text style={ styles.label }>Minimum number of photos</Text>
          <Text style={ styles.sliderValue }>{ photo }</Text>
        </View>
        <Slider
          style={ styles.slider }
          minimumValue={ 1 }
          maximumValue={ 51 }
          step={ 1 }
          value={ photo }
          onValueChange={ ( value ) => setPhoto( value ) }
          minimumTrackTintColor="#FF495C"
          thumbTintColor="#FF495C"
        />
      </View>
      {/* New Matches */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <AntDesign name="eye" size={ 24 } color="white" />
          <Text style={ styles.label }>New matches</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.newMatches }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, newMatches: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Men" value="Off" />
          </Picker>
        </View>
      </View>

      {/* Add languages */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <Ionicons name="language-sharp" size={ 24 } color="white" />
          <Text style={ styles.label }>Add languages</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.messages }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, messages: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>

      {/* Message Likes */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <AntDesign name="eye" size={ 24 } color="white" />
          <Text style={ styles.label }>Open to</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.messageLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, messageLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>

      {/*Zodiac */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <Ionicons name="moon-sharp" size={ 24 } color="white" />
          <Text style={ styles.label }>Zodiac</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*Education */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialCommunityIcons name="book-education-outline" size={ 24 } color="white" />
          <Text style={ styles.label }>Education</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*Famili plans */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialIcons name="family-restroom" size={ 24 } color="white" />
          <Text style={ styles.label }>Family Plans</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*COVID Vaccine */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialIcons name="vaccines" size={ 24 } color="white" />

          <Text style={ styles.label }>COVID Vaccine </Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*Personlity Type */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialCommunityIcons name="leaf-maple" size={ 24 } color="white" />
          <Text style={ styles.label }>Personlity Type</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*Communication Style */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialCommunityIcons name="message-text-clock" size={ 24 } color="white" />
          <Text style={ styles.label }>Communication Style</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*Love Style */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialCommunityIcons name="heart-settings" size={ 24 } color="white" />
          <Text style={ styles.label }>Love Style</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*Pet */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialIcons name="pets" size={ 24 } color="white" />
          <Text style={ styles.label }>Pet</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*Drinking */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialIcons name="local-drink" size={ 24 } color="white" />
          <Text style={ styles.label }>Drinking</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*Smoking */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialCommunityIcons name="smoking" size={ 24 } color="white" />
          <Text style={ styles.label }>Smoking</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*Workout */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <FontAwesome6 name="network-wired" size={ 24 } color="white" />
          <Text style={ styles.label }>Education</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*Dietary Preference */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <Ionicons name="fast-food" size={ 24 } color="white" />
          <Text style={ styles.label }>Dietary Preference </Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*Social Media */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <Entypo name="email" size={ 24 } color="white" />
          <Text style={ styles.label }>Social Media</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>
      {/*Sleeping Habits */ }
      <View style={ styles.settingRow }>
        <View style={ { flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
          <MaterialCommunityIcons name="sleep" size={ 24 } color="white" />
          <Text style={ styles.label }>Sleeping Habits</Text>
        </View>
        <View style={ styles.pickerContainer }>
          <Picker
            selectedValue={ notifications.superLikes }
            style={ styles.picker }
            onValueChange={ ( itemValue ) =>
              setNotifications( { ...notifications, superLikes: itemValue } )
            }
          >
            <Picker.Item label="Select" value="On" />
            <Picker.Item label="Off" value="Off" />
          </Picker>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  container9: {
    flex: 1,
    backgroundColor: 'black',
    color: "green",
    // display:"none"
    padding: 10

  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 10,
    color: 'white',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    // alignItems: 'center',
    width: "100%",
  },
  lokingforwommen:{
    fontSize: 15,
    height: "4%",
    width: "100%",
    // fontWeight: 'bold',
    // marginBottom: 10,
    backgroundColor: "#111419",
    color: "white",
    flexDirection: "row",
    justifyContent:"space-between",
    // marginLeft: 20,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 40,
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
  label: {
    fontSize: 15,
    color: "white",
    fontWeight: "600",
    marginLeft: 4,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderValue: {
    fontSize: 15,
    color: 'white',
    color: "white",
    fontWeight: "600"
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 1,
    overflow: 'hidden',
    width: 60,
    height: "55%"
  },
  afterslidertext: {
    fontSize: 13,
    color: "white",
  },
  picker: {
    height: 40,
    width: 150,
    color: '#000',
  },
 
  subText: {
    fontSize: 12,
    color: '#555',
  },
  maxdistance: {
    height: "10%",
    padding: 5,
    backgroundColor: "#111419",
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    alignItems: 'center',
    marginRight: 2,
    marginLeft: 2
  },
  numberofphotos: {
    height: "10%",
    padding: 5,
    backgroundColor: "#111419",
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    alignItems: 'center',
    marginRight: 2,
    marginLeft: 2
  }
} );

export default DiscoverySettings;
