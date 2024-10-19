// import {View, Text, Dimensions, Image, Animated} from 'react-native';
// import React, {useCallback} from 'react';
// import TinderLike from './TinderLike';
// import { LinearGradient } from 'expo-linear-gradient';
// const {height, width} = Dimensions.get('window');
// const TinderCard = ({item, isFirst, swipe, ...rest}) => {
//   const rotate = swipe.x.interpolate({
//     inputRange: [-100, 0, 100],
//     outputRange: ['8deg', '0deg', '-8deg'],
//   });
//   const likeOpacity = swipe.x.interpolate({
//     inputRange: [10, 100],
//     outputRange: [0, 1],
//     extrapolate: 'clamp',
//   });
//   const rejectOpacity = swipe.x.interpolate({
//     inputRange: [-100, -10],
//     outputRange: [1, 0],
//     extrapolate: 'clamp',
//   });
//   const renderChoice = useCallback(() => {
//     return (
//       <>
//         <Animated.View
//           style={[
//             {position: 'absolute', top: 100, left: 20},
//             {opacity: likeOpacity},
//           ]}>
//           <TinderLike type={'Like'} />
//         </Animated.View>
//         <Animated.View
//           style={[
//             {position: 'absolute', top: 100, right: 20},
//             {opacity: rejectOpacity},
//           ]}>
//           <TinderLike type={'Nope'} />
//         </Animated.View>
//       </>
//     );
//   }, []);
//   return (
//     <Animated.View
//       style={[
//         {
//           width: width - 0,
//           height: height - 150,
//           position: 'absolute',
//           top: 50,
//           justifyContent: 'center',
//           alignItems: 'center',
//           alignSelf: 'center',

//         },
//         isFirst && {
//           transform: [...swipe.getTranslateTransform(), {rotate: rotate}],
//         },
//       ]}
//       {...rest}>
//       <Image
//         source={item.image}
//         style={{width: '100%', height: '100%', }}
//       />
//       {isFirst && renderChoice()}
//       <LinearGradient
//         colors={['rgba(0,0,0,0.5)','rgba(0,0,0,0.8)', ]}
//         style={{
//           width: '100%',
//           height: '20%',
//           position: 'absolute',
//           bottom:0,
//         }}>
//           <Text style={ {fontSize: 25,
//         color: 'white',
//         position: "absolute",
//         fontWeight: 'bold',
//         top: 20,} }>{ item.name } "age" </Text>
//           <Text style={ { fontSize: 18,
//         color: 'white',
//         position: "absolute",
//         top: 50,
//         marginTop: 7,}}>{ item.bio } </Text>
//       </LinearGradient>
//     </Animated.View>
//   );
// };

// export default TinderCard;
import {View, Text, Dimensions, Image, Animated} from 'react-native';
import React, {useCallback} from 'react';
import TinderLike from './TinderLike';
import { LinearGradient } from 'expo-linear-gradient';

const {height, width} = Dimensions.get('window');

const TinderCard = ({item, isFirst, swipe, ...rest}) => {
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['8deg', '0deg', '-8deg'],
  });
  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const rejectOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[{position: 'absolute', top: height * 0.15, left: 20}, {opacity: likeOpacity}]}>
          <TinderLike type={'Like'} />
        </Animated.View>
        <Animated.View
          style={[{position: 'absolute', top: height * 0.15, right: 20}, {opacity: rejectOpacity}]}>
          <TinderLike type={'Nope'} />
        </Animated.View>
      </>
    );
  }, []);

  return (
    <Animated.View
      style={[
        {
          width: width - 40,
          height: height * 0.7,
          position: 'absolute',
          top: height * 0.05,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        },
        isFirst && { transform: [...swipe.getTranslateTransform(), {rotate: rotate}] },
      ]}
      {...rest}>
      <Image source={item.image} style={{width: '100%', height: '100%', borderRadius: 10}} />
      {isFirst && renderChoice()}
      <LinearGradient
        colors={['rgba(0,0,0,0.5)','rgba(0,0,0,0.8)']}
        style={{ width: '100%', height: '20%', position: 'absolute', bottom: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 9 }}>
        <Text style={styles.name}>{item.name} {item.age}</Text>
        <Text style={styles.bio}>{item.bio}</Text>
      </LinearGradient>
    </Animated.View>
  );
};

export default TinderCard;

const styles = {
  name: {
    fontSize: width * 0.06,
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  bio: {
    fontSize: width * 0.045,
    color: 'white',
    paddingHorizontal: 20,
    paddingTop: 5,
  },
};
