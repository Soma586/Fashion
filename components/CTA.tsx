import  {View, StyleSheet, TouchableHighlight} from 'react-native'
import { PoppinsText } from './StyledText'



const CTA = ({handlePress}) => {



    return (


        <TouchableHighlight style={styles.button} onPress={handlePress}>
        <View >


            <PoppinsText style={{color : 'white', alignSelf : 'center'}}>
                Add to cart
            </PoppinsText>
        </View>
        </TouchableHighlight>

    )
}



const styles = StyleSheet.create({

    button : {

        borderRadius : 50,
        backgroundColor : 'black',
        //alignSelf : 'center',
        alignContent : 'center',
        paddingVertical : 10
       // width : '100%'
    }
})


export default CTA