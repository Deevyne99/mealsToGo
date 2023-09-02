import React from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components/native'

export const Section = styled(View)`
  flex-direction: row;
`
export const RatingContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`
export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`
export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`
export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`

export const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`
export const CardWrapper = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`
