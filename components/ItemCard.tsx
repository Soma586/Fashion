import  _ from 'lodash'
import {View, Text, Image, StyleSheet, Pressable} from 'react-native'
import { PoppinsText, PoppinsLightText } from './StyledText'
import { FontAwesome } from '@expo/vector-icons'
import { Link, router } from 'expo-router'


interface proptype  {
    title : string,
    price : string,
    rating : number,
    img :string
}

const ItemCard = (props : proptype) => {



    const {
        title,
        price,
        rating,
        img
    } = props

    let arr : number[] = Array(5).fill(0)


    arr.forEach((_, index) => {
        
        if(index < rating){
            arr[index] = 1
            
        }

    })
    


    const displayRating = _.map(arr, (item : number) => {

        if(item === 1) {
            return <FontAwesome style={{marginRight : 3}} name='star' size={18}/>
        }else{
            return <FontAwesome name='star-o' size={18}/>
        }
    })
    return (

        <Pressable  onPress={() => router.push({pathname :'/detailTest', params : {...props}})}>
        <View style={styles.itemContainer}>

            <Image
            style = {{height : 242, borderRadius : 10, marginBottom : 10}}
            source={ {uri: img}}
            resizeMode ='cover'
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
        </Pressable>
    )
}


export default ItemCard


const styles = StyleSheet.create({

    itemContainer : {
        height : 360,
        width : '100%',
        marginBottom : 20
    },
    text : {
        fontSize : 20 
    }
})