// // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'; // Use only react-navigation stack
import LoginScreen from '@/components/screens/LoginScreen';
import HomePage from "@/components/screens/HomePage";
import ChatScreen from "@/components/screens/ChatScreen";

import BoostScreen from "@/components/screens/BoostScreen";
import UserInfo from "@/components/screens/UserInfo";
import ChatSection from "@/components/Pages/chatSection";
import Getsuperlikes from "@/components/Pages/GetsuperLikes";
import PurchaseScreen from "@/components/Pages/PurchaseScreen";
import BottomStarScreen from "@/components/screens/BottonStarSreen.js";
import Settings from "@/components/Pages/Settings"
import Chat_Picks_click from "@/components/Pages/Chat_Picks_click.js"
import MysubStarting from "@/components/Pages/MysubStarting.js"
import SeeWhoLikeYou from "@/components/Pages/Seewholikeyoumore"
import Subsription from "@/components/Pages/Subscription";
import AddCreditDebitcard from "@/components/Pages/AddCreditDebitcard";
import GridScreen from "@/components/screens/GridScreen";
import Notifications from "@/components/Pages/Notifications";
import AddBanking from "@/components/Pages/AddBanking";
import GridBox from "@/components/Pages/GridBox";
import BoostSelect from "@/components/Pages/Boostselectbottom";
import Women from "@/components/Pages/Women";
import 'react-native-gesture-handler';
import HompagestarSelect from "@/components/Pages/HompagestarSelect";
import CoffyDate from "@/components/Pages/Coffydate";
import CoffeeDateJoin from "@/components/Pages/CoffeeDateJoin";
import DiscoverySettings from '../Pages/DiscoverySetting';
import TinderSwipeDemo from '@/components/TinderCard/TinderSwipeDemo.js';
// import User from "@/app/(tabs)/User";


const Stack = createStackNavigator();
const User = true;
const StackNavigator = () => {
  return <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}>

    {
      User ? (
        <>
          <Stack.Group>
            {/* <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen> */}
            <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
            <Stack.Screen name="4starscreen" component={BottomStarScreen}></Stack.Screen>
            <Stack.Screen name="user" component={UserInfo}></Stack.Screen>
            <Stack.Screen name="getsuperlikes" component={Getsuperlikes}></Stack.Screen>
            <Stack.Screen name="purchase" component={PurchaseScreen}></Stack.Screen>
            <Stack.Screen name="subsription" component={Subsription}></Stack.Screen>
            <Stack.Screen name="addcarddetails" component={AddCreditDebitcard}></Stack.Screen>
            <Stack.Screen name="picks" component={Chat_Picks_click}></Stack.Screen>
            <Stack.Screen name="chatscreen" component={ChatScreen}></Stack.Screen>
            <Stack.Screen name="substartclick" component={MysubStarting}></Stack.Screen>
            <Stack.Screen name="seewholikeyoumore" component={SeeWhoLikeYou}></Stack.Screen>
            <Stack.Screen name="gridscreen" component={GridScreen}></Stack.Screen>
            <Stack.Screen name="notifications" component={Notifications}></Stack.Screen>
            <Stack.Screen name="discoverysetting" component={DiscoverySettings}></Stack.Screen>
            <Stack.Screen name="lookingforwomen" component={Women}></Stack.Screen>
            <Stack.Screen name="bank" component={AddBanking}></Stack.Screen>
            <Stack.Screen name="gridbox" component={GridBox}></Stack.Screen>
            <Stack.Screen name="chatsection" component={ChatSection}></Stack.Screen>
            <Stack.Screen name="homepagestarselect" component={HompagestarSelect}></Stack.Screen>
            <Stack.Screen name="boostscreen" component={BoostScreen}></Stack.Screen>
            <Stack.Screen name="boostselect" component={BoostSelect}></Stack.Screen>
            <Stack.Screen name="setting" component={Settings}></Stack.Screen>
            <Stack.Screen name="tindercard" component={TinderSwipeDemo}></Stack.Screen>
            <Stack.Screen name="coffyDate" component={CoffyDate}></Stack.Screen>
            <Stack.Screen name="joincoffedate" component={CoffeeDateJoin}></Stack.Screen>
          </Stack.Group>
          {/* <Stack.Group
            screenOptions={{
              presentation: "modal"
            }}
          >
            <Stack.Screen name="Modal" component={ModalScreen}></Stack.Screen>
            <Stack.Screen name="user" component={UserInfo}></Stack.Screen>
            <Stack.Screen name="getsuperlikes" component={Getsuperlikes}></Stack.Screen>
            <Stack.Screen name="purchase" component={PurchaseScreen}></Stack.Screen>
            <Stack.Screen name="subsription" component={Subsription}></Stack.Screen>
            <Stack.Screen name="addcarddetails" component={AddCreditDebitcard}></Stack.Screen>
            <Stack.Screen name="picks" component={Chat_Picks_click}></Stack.Screen>
          </Stack.Group> */}
          {/* <Stack.Group
            screenOptions={{
              presentation: "transparentModal",
              ...TransitionPresets.ModalPresentationIOS,
            }}
          >
            <Stack.Screen name="setting" component={Settings}></Stack.Screen>
            <Stack.Screen name="chatscreen" component={ChatScreen}></Stack.Screen>
          </Stack.Group> */}
        </>

      ) :

        <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
    }
  </Stack.Navigator>
}
export default StackNavigator;