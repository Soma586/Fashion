import  {View, StyleSheet} from 'react-native'
import { PoppinsText } from './StyledText'



const CTA = () => {



    return (

        <View style={styles.button}>


            <PoppinsText style={{color : 'white', alignSelf : 'center'}}>
                Add to cart
            </PoppinsText>
        </View>

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