import _ from 'lodash'
import { View, Text, ScrollView, StyleSheet} from 'react-native'
import { List } from '@/constants/data'
import ItemCard from '@/components/ItemCard'
import { useLocalSearchParams } from 'expo-router';

const Sora = () => {



    const {data} = useLocalSearchParams()

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

