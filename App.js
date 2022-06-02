import Raster from "./Raster";
import Shapes from "./Shapes";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <tab.Navigator   
        screenOptions={{
          tabBarActiveTintColor: '#eb4034',
          headerShown:false,
          tabBarOptions: {
            activeTintColor: '#eb4034',
            inactiveTintColor: '#000',
            labelStyle: {
              fontSize: 12,
            },
            style: {
              backgroundColor: '#fff',
            },
          },
        }}
      >
        <tab.Screen  options={
          {
            tabBarLabel: 'Raster',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-camera" color={color} size={size} />
            ),
          }
        } name="Raster"  component={Raster} />
        <tab.Screen  options={
          {
            tabBarLabel: 'Shapes',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-square" color={color} size={size} />
            ),
          }
        } name="Shapes" component={Shapes} />
      </tab.Navigator>
    </NavigationContainer>
  )

}