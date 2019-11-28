import React from 'react'
import {ListItem, Body, Text, Right, Button, Icon } from 'native-base'
import { withNavigation } from 'react-navigation'

// Destructure the movie object and the navigate function from props.
const MovieListItem = ({ movie, navigation: { navigate } }) => (
  <ListItem>
    <Body>
      <Text style={{fontSize: 20}}>
        {movie.title}
      </Text>
      <Text style={{fontSize: 14, color: '#777'}}>
        {movie.releaseYear}
      </Text>
    </Body>
    <Right>
      <Button 
        transparent
        onPress={() => navigate('MovieDetail', { movie })}
      > 
        <Icon name="arrow-forward" />
      </Button>
    </Right>
  </ListItem>
)

// This uses the higher order component design pattern.
// See https://reactjs.org/docs/higher-order-components.html
// The withNavigation function returns our MovieListItem component
// with the navigation object injected as a prop.
export default withNavigation(MovieListItem)