import { Text, View, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'
import styled from 'styled-components/native'
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant
  return (
    <CardContainer elevation={5}>
      <CardWrapper source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </CardContainer>
  )
}

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.theme.colors.bg.primary};
`
const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`
const CardWrapper = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`
