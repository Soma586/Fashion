import  {View, Text} from 'react-native'
import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions, MaterialTopTabNavigationEventMap } from "@react-navigation/material-top-tabs"
import { ParamListBase, TabNavigationState } from "@react-navigation/native"
import { withLayoutContext } from "expo-router"
import { data } from '@/constants/data'


const {Navigator} = createMaterialTopTabNavigator()



export const MaterialTopTabs = withLayoutContext<
MaterialTopTabNavigationOptions,
typeof Navigator,
TabNavigationState<ParamListBase>,
MaterialTopTabNavigationEventMap
>(Navigator)

const Layout = () => {



    return (
        <MaterialTopTabs
        tabBarOptions={{
            pressColor: 'transparent',
            pressOpacity: 1,
            labelStyle: {
              fontSize: 16,
              textTransform: 'none',
              color: 'black',
              fontFamily : 'Poppins'
            },
            style: {
              backgroundColor: 'white',
              height: 50,
              elevation: 0,
            },
            indicatorStyle: {
              backgroundColor: 'black',
              height: 4,
            },
            tabStyle: {width: 'auto', marginLeft: 10, alignItems: 'center' },
    
          }}>
        >
            <MaterialTopTabs.Screen name='Woman'
            //initialParams={ {data : data.women}}
            initialParams={{data : 'women'}}
            />
            <MaterialTopTabs.Screen name='Man'
            initialParams={ {data : 'men'}}
            />
            <MaterialTopTabs.Screen name='Kids'
            initialParams={ {data : 'kids'}}
            />
           

        </MaterialTopTabs>
    )

}

export default Layout