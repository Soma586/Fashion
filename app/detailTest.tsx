import  _ from 'lodash'
import {View, Text, ImageBackground, StyleSheet, Pressable, } from 'react-native'
import { useRef, useMemo, useState, useCallback} from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView,  } from 'react-native-gesture-handler';
import { useLocalSearchParams } from 'expo-router';
import { PoppinsLightText, PoppinsText } from '@/components/StyledText';
import CTA from '@/components/CTA';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolate } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions, Trans } from '@react-navigation/material-top-tabs';
import EditScreenInfo from '@/components/EditScreenInfo';
import ReviewCard from '@/components/ReviewCard';
import { FontAwesome } from '@expo/vector-icons'

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const Tab = createMaterialTopTabNavigator();

const Profile = () => {



    const colorList = ['black', 'white', '#A3A3A3', '#ECE3D2',  '#F590AE']

    const sizeList = ['XS' , "S", "M", "L", "XL"]

    const bottomSheetRef = useRef(null);


    const [visible, setIsVisible] = useState(true)

  
    


  


    //useSe
    const { title, rating, price } = useLocalSearchParams()

    let arr : number[] = Array(5).fill(0)


    arr.forEach((_, index) => {
        
        if(index < rating){
            arr[index] = 1
            
        }

    })

    const displayRating = _.map(arr, (item) => {

        if(item === 1) {
            return <FontAwesome style={{marginRight : 3}} name='star' size={18}/>
        }else{
            return <FontAwesome name='star-o' size={18}/>
        }
    })


    // const handleSheetChanges = useCallback((index) => {
    //     // If the bottom sheet is fully expanded (index 2), hide the component
    //     if (index === 2) {
    //       setIsVisible(false);
    //     } else {
    //       setIsVisible(true);
    //     }
    //   }, []);

    const bottomSheetPosition = useSharedValue(0);

    const handleSheetChanges = useCallback((index) => {
        // Update the shared value based on bottom sheet index
        bottomSheetPosition.value = index;
      }, []);


      const animatedOpacityStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
          bottomSheetPosition.value,
          [0, 2],  // Positions corresponding to indexes
          [1, 0]   // Opacity values
        );
        return {
          opacity: withTiming(opacity, { duration: 400 }),  // Smooth transition
        };
      });
    

    console.log(title)
    

    const snapPoints = useMemo(() => [ '40%','90%'], []);


    const displayColors = _.map(colorList, (color) =>{
        return (
            <View style={[styles.colorPicker, {backgroundColor : color} , color === 'white' && {borderWidth : 1}]}>

            </View>
        )
    })

    const displaySize = _.map(sizeList, (size) => {

        return (

            <PoppinsLightText style={{fontSize : 14}}>
                {size}
            </PoppinsLightText>
        )
    })


    // const screenOptions = useMemo<MaterialTopTabNavigationOptions>(
    //     () => ({
    

    //       safeAreaInsets: { top: 0 },
         
    //     }),
    //     []
    //   );
    return (
        <GestureHandlerRootView>

        
        <View>
            <ImageBackground
            style={styles.container}
            source={image}
            >
                <BottomSheet 
                  ref={bottomSheetRef}
                  onChange={handleSheetChanges}
                  snapPoints={snapPoints}
                >
                    <BottomSheetView style={styles.bottomSheetContainer}>
                        <View>
                            <PoppinsText style={{fontSize : 23, marginBottom : 10}}>
                                {title}
                            </PoppinsText>

                            <View style={{flexDirection : 'row' , justifyContent : 'space-between'}}>

                                <View style={{flexDirection : 'row'}}>
                                {displayRating}
                                </View>
                                

                                <PoppinsText style={{color : 'red', fontSize : 20}}>
                                    {price}
                                </PoppinsText>
                            </View>
                            <View style={{ flexDirection : 'row', marginBottom : 14}}>
                                {displayColors}
                             </View>   


                             <View style={styles.sizesContainer}>

                                 <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center'}}>

                                     <PoppinsText style={ {fontSize : 16}}>
                                         Available Spacesgg :
                                     </PoppinsText>

                                     <View style={{flexDirection : 'row', justifyContent : 'space-between', width : 160}}>
                                         {displaySize}
                                     </View>
                                </View>


                              

                            </View>

                            {/* {visible && 
                            <CTA/>
                            } */}
                              <Animated.View style={[styles.hiddenComponent, animatedOpacityStyle]}>
          <CTA/>
                </Animated.View>   
            </View>

            <ReviewCard name={"George Mcfly"} review={"This was a very nice shirt"}/>

            <ReviewCard name={"Robin Massy"} review={"I really like this"}/>

            <ReviewCard name={"Andrew Smith"} review={"It really like met my expectations"}/>
    
   
    
       </BottomSheetView>
       </BottomSheet>

            </ImageBackground>
        </View>
        </GestureHandlerRootView>

    )
}



const styles = StyleSheet.create({

    container : {
        height : '100%'
    },
    bottomSheetContainer : {
        paddingHorizontal : 20
    },
    colorPicker : {
        height : 35,
        width : 35,
        borderRadius : 100,
        marginRight : 8
        //border
    },
    sizesContainer : {
        paddingVertical : 12,
        backgroundColor : '#D8D8D8',
        marginBottom : 12
       // position : 'absolute'
    }

})


export default Profile