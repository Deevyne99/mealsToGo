import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'
import { RestaurantInfoCard } from '../components/restaurantInfoCard'

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const onChangeSearch = (query) => setSearchQuery(query)
  return (
    <SafeArea>
      <Search>
        <Searchbar
          placeholder='Search'
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </Search>
      <List>
        <RestaurantInfoCard />
      </List>
    </SafeArea>
  )
}

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`
const Search = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  color: white;
`
const List = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  color: white;
`
