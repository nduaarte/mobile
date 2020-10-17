import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "./components/Header";
import OrphanagesMap from "./screens/OrphanagesMap";
import OrphanagesDetails from "./screens/OrphanagesDetails";
import OrphanageData from "./screens/CreaterOrphanage/OrphanageData";
import SelectMapPosition from "./screens/CreaterOrphanage/SelectMapPosition";

export default function Routes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <Screen
          name='OrphanagesMap'
          component={OrphanagesMap}
        />

        <Screen
          name='OrphanagesDetails'
          component={OrphanagesDetails}
          options={{ 
            headerShown: true, 
            header: () => <Header title='Orfanato' />
          }}
        />

        <Screen
          name='SelectMapPosition'
          component={SelectMapPosition} />
        <Screen

          name='OrphanageData'
          component={OrphanageData}
        />
      </Navigator>
    </NavigationContainer>
  );
}