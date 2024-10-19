import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import users from '@/assets/data/users';

const ChatTop = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <SafeAreaView style={ styles.root }>
        <View style={ styles.container }>
          <ScrollView horizontal={ true } showsHorizontalScrollIndicator={ false } style={ styles.users }>
            { users.map( user => (
              <View style={ styles.user } key={ user.id }>
                <Image source={ { uri: user.image } } style={ styles.image } />
                <Text style={ styles.name }> { user.name }</Text>
              </View>

            ) ) }
          </ScrollView>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  root: {
    width: '100%',
    height: "100%",
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  users: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    height: 140,
  },
  user: {
    width: 90,
    height: 100,
    margin: 10,
    borderRadius: 10,
    // justifyContent:"center",
    alignItems: "center",
    borderWidth: 2,
    padding: 3,
    borderColor: '#F63A6E',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  name: {
    color: "white",
    marginTop: 5,

  }
} );

export default ChatTop;
