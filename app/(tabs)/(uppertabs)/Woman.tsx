import _ from 'lodash'
import { View, Text, ScrollView, StyleSheet} from 'react-native'
import { List } from '@/constants/data'
import ItemCard from '@/components/ItemCard'
import { useLocalSearchParams } from 'expo-router';

const Sora = () => {



    const {data} = useLocalSearchParams()


    console.log(useLocalSearchParams())
    console.log("wtf")
    console.log(data)
    //console.log(typeof data)
    //console.log(...data)


    //console.log(data[0][0])
    //console.log(data[0])
    //console.log(...data)

    //console.log(JSON.stringify(data, null, 2));
    //console.log(data)
    const displayCards = _.map(List[data],( item) => {

        return <ItemCard {...item}/>
    })


    return (
        <ScrollView style={styles.container}>
            {displayCards}
        </ScrollView>
    )

}



const styles = StyleSheet.create({

    container : {

        paddingHorizontal : 20
    }
})


export default Sora

