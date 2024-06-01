import { MaterialTopTabs } from "../(tabs)/(uppertabs)/_layout"


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
            <MaterialTopTabs.Screen name='Review'
            />
            <MaterialTopTabs.Screen name='Guarantee'/>
           

        </MaterialTopTabs>
    )

}