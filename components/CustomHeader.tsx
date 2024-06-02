import { Pressable, Image, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Logo from '../assets/images/logo.png'

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
      
        source={Logo}
      />

        <AntDesign name='shoppingcart' size={25}/>
    </View>
  );
};



const styles = StyleSheet.create({

    headerContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',

        //paddingVertical :40,
        paddingTop : 60,
        paddingBottom : 20,
        backgroundColor : 'white',
        paddingHorizontal : 20,
        alignItems : 'center'
    }
})

export default CustomHeader;
