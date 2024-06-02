import  {View, Text} from 'react-native'
import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions, MaterialTopTabNavigationEventMap } from "@react-navigation/material-top-tabs"
import { ParamListBase, TabNavigationState } from "@react-navigation/native"
import { withLayoutContext } from "expo-router"



const {Navigator} = createMaterialTopTabNavigator()


interface CustomTabBarOptions extends MaterialTopTabNavigationOptions {
  pressColor: string;
  pressOpacity: number;
  labelStyle: {
    fontSize: number;
    textTransform: string;
    color: string;
    fontFamily: string;
  };
  style: {
    backgroundColor: string;
    height: number;
    elevation: number;
  };
  indicatorStyle: {
    backgroundColor: string;
    height: number;
  };
  tabStyle: {
    width: string;
    marginLeft: number;
    alignItems: string;
  };
}
export const MaterialTopTabs = withLayoutContext<
MaterialTopTabNavigationOptions,
typeof Navigator,
TabNavigationState<ParamListBase>,
MaterialTopTabNavigationEventMap
>(Navigator)

const Layout = () => {



    return (
        <MaterialTopTabs
        screenOptions = {
          {
            tabBarLabelStyle: { fontSize: 16, fontFamily: 'Poppins', color : 'black', textTransform: 'none' },
            tabBarStyle: { justifyContent: 'flex-start'},
            tabBarIndicatorStyle : { backgroundColor : 'black', height : 4},
            tabBarItemStyle:{ width:100, }   
          }
        }
          >
        
            <MaterialTopTabs.Screen name='Woman'
            options={{title : 'Woman'}}
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