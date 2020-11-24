import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Write from 'WriteStory.js';
import Read from 'ReadStory.js';


export default class App extends React.Component 
{
  render()
  {
    return <AppContainer />;
  }
}

var TabNavigator = createBottomTabNavigator({
  Write : { screen : Write },
  Read : { screen : Read },
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
