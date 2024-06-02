import {View, Text, StyleSheet } from 'react-native'
import { PoppinsLightText, PoppinsText } from './StyledText'




interface reviewCardprop {
    name : string,
    review : string
}

const ReviewCard = ({name, review } : reviewCardprop) => {



    return (
        <View style={styles.cardContainer}>

            <PoppinsText style={{ color : '#999999'}}>{name}</PoppinsText>

            <PoppinsLightText style={{color : 'black'}}>{review}</PoppinsLightText>
        </View>
    )

}




const styles = StyleSheet.create({

    cardContainer : {
        paddingVertical : 17,
        borderBottomWidth : 1,
        borderBottomColor : 'grey'
    }
})


export default ReviewCard