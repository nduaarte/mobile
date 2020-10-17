import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import mapMarker from "../images/map-marker.png";

export default function OrphanagesMap() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -29.3348321,
          longitude: -49.7460253,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}>
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -29.3348321,
            longitude: -49.7460253
          }}
          calloutAnchor={{
            x: 2.7,
            y: 0.8
          }}>
          <Callout tooltip onPress={() => navigation.navigate('OrphanagesDetails')}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 Orfanatos encontrados</Text>

        <RectButton 
          style={styles.createOrphanageButton} 
          onPress={() => navigation.navigate('SelectMapPosition')}>
          <Feather name='plus' size={20} color='#fff' />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height 
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center'
  },

  calloutText: {
    fontFamily: 'nunito700',
    color: '#0089a5',
    fontSize: 15
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 5,
      height: 5
    },
  },

  footerText: {
    fontFamily: 'nunito700',
    color: '#8fa7b3',
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
