import { Image } from 'react-native'
import { SvgXml } from 'react-native-svg'
import star from '../../../../assets/star'
import open from '../../../../assets/open'
import { Spacer } from '../../../spacer/spacer'
import { Text } from '../../../typography/text'
import {
  CardContainer,
  CardWrapper,
  Info,
  RatingContainer,
  Rating,
  Section,
  Address,
} from './restaurant.style'
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant
  const ratingArray = Array.from(new Array(Math.floor(rating)))
  return (
    <CardContainer elevation={5}>
      <CardWrapper source={{ uri: photos[0] }} />
      <Info>
        <Text variant='label'>{name}</Text>
        <RatingContainer>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml key={index} xml={star} width={20} height={20}></SvgXml>
            ))}
          </Rating>
          <Section>
            {isClosedTemporarily && (
              <Text variant='error'>Closed temporarily</Text>
            )}
            <Spacer position='left' size='large'>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position='left' size='large'>
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </Section>
        </RatingContainer>
        <Address>{address}</Address>
      </Info>
    </CardContainer>
  )
}
