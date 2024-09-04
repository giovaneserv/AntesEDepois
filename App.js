import React from "react";
import Tela_Principal from './src/Telas/Tela_Principal';
import Eminem from './src/Telas/Eminem';
import Kendrick from './src/Telas/Kendrick';
import JCole from './src/Telas/JCole';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function App() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Tela_Principal">
      <Stack.Screen name="Tela_Principal" component={Tela_Principal}/>
      <Stack.Screen name="Eminem" component={Eminem}/>
      <Stack.Screen name="Kendrick" component={Kendrick}/>
      <Stack.Screen name="JCole" component={JCole}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}
export default App;