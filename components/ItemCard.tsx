import  _ from 'lodash'
import {View, Text, Image, StyleSheet} from 'react-native'
import { PoppinsText, PoppinsLightText } from './StyledText'
import { FontAwesome } from '@expo/vector-icons'




const ItemCard = ({title , price, rating}) => {



    let arr : number[] = Array(5).fill(0)


    arr.forEach((_, index) => {
        
        if(index < rating){
            arr[index] = 1
            
        }


    })
    console.log(rating)
    console.log(arr)

    const displayRating = _.map(arr, (item) => {

        if(item === 1) {
            return <FontAwesome style={{marginRight : 3}} name='star' size={18}/>
        }else{
            return <FontAwesome name='star-o' size={18}/>
        }
    })
    return (
        <View style={styles.itemContainer}>

            <Image
            style = {{height : 242, }}
            source={ {uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />


            

            <View style={{ flexDirection : 'row', justifyContent : 'space-between'}}>
            <PoppinsText style={{fontSize : 20, marginBottom : 10}}>

                {title}
            </PoppinsText>

             <PoppinsText style={{fontSize : 20 , color : 'red'}}>

                {price}
            </PoppinsText>
            </View>

            <View style={{flexDirection : 'row'}}>

                {displayRating} 
                <PoppinsText>({`${rating}.0`})</PoppinsText>

            </View>


            <PoppinsLightText style={{position : 'absolute', bottom : 0 , color : '#6A6D7D'}}>
            Lorem ipsum dolor sit amet, consecte adipiscing elit.
            </PoppinsLightText>


         
         



          


        </View>
    )
}


export default ItemCard


const styles = StyleSheet.create({

    itemContainer : {
        height : 360,
        width : '100%'
    },
    text : {
        fontSize : 20 
    }
})